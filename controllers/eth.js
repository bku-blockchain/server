import Web3 from 'web3';
import mongoose from 'mongoose';

import PollingContractJSON from '../build/contracts/Polling.json';

const config = require('../config');

const Poll = mongoose.model('Poll');
const Vote = mongoose.model('Vote');


/**
 * ==========================================================================
 * Configure Ethereum
 * ==========================================================================
 * */
const provider = config.eth.network == 'testnet' ? config.eth.provider : 'http://localhost:8545';
console.log('Ethereum provider:', provider);

const web3 = new Web3(new Web3.providers.HttpProvider(provider));

const { abi, bytecode } = PollingContractJSON;
const gasPrice = web3.utils.toHex(1e9);

/**
 * Configure Functions
 * use async for similar with configDefaultAccount_Local
 */
const configDefaultAccount_TestNet = async () => {
  /**
   * Add to wallet, can use sendTransaction()
   * Dont have to sign to transaction manually
   */
  const privateKey = config.eth.ropstenPrivateKey;
  const account = web3.eth.accounts.privateKeyToAccount(`0x${privateKey}`);
  web3.eth.accounts.wallet.add(account);

  /** Set the default account, used to `from` */
  web3.eth.defaultAccount = account.address;
};

const configDefaultAccount_Local = async () => {
  const accounts = await web3.eth.getAccounts();
  web3.eth.defaultAccount = accounts[0];
};

const configDefaultAccount = async () => {
  if (config.eth.network == 'testnet') {
    await configDefaultAccount_TestNet();
  } else {
    await configDefaultAccount_Local();
  }

  console.log('Default account address:', web3.eth.defaultAccount);
};


/**
 * ==========================================================================
 * Functions
 * ==========================================================================
 * */
export const deployPollContract = async ({ poll }, cb) => {
  const startDate = Math.floor(new Date(poll.startDate).getTime() / 1000);
  const endDate = Math.floor(new Date(poll.endDate).getTime() / 1000);

  try {
    const PollingContract = new web3.eth.Contract(abi);

    const secretKey = web3.utils.randomHex(32);

    const txInstance = PollingContract.deploy({
      arguments: [secretKey, startDate, endDate],
      data: bytecode
    });

    const gasLimit = await txInstance.estimateGas();
    console.log('Gas limit:', gasLimit);

    txInstance.send({
      from: web3.eth.defaultAccount,
      gas: gasLimit,
      gasPrice
    })
      .on('transactionHash', (txHash) => {
        console.log('Transaction Hash:', txHash);
        poll.eth = {
          ownerAddress: web3.eth.defaultAccount,
          contractSecretKey: secretKey,
          txHash
        };
        cb(null, poll);
      })
      .on('receipt', (receipt) => {
        Poll.findOneAndUpdate({ id: poll.id }, { 'eth.contractAddress': receipt.contractAddress })
          .then(() => {
            console.log('Update Poll ID: ', poll.id);
          });
      })
      .on('error', (err) => { console.log(err); });

  } catch (err) {
    cb(err);
  }
};

export const createVoting = async ({ vote, contractAddress, secretKey, userID, hashValue }, cb) => {
  try {
    const PollingContract = new web3.eth.Contract(abi, contractAddress);

    const txInstance = PollingContract.methods
      .createVoting(secretKey, web3.utils.toHex(userID), hashValue);

    // TODO: estimate gas is not working here
    // const gasLimit = await txInstance.estimateGas();
    const gasLimit = web3.utils.toHex(1e5);
    console.log('Gas limit:', gasLimit);

    txInstance.send({
      from: web3.eth.defaultAccount,
      gas: gasLimit,
      gasPrice
    })
      .on('transactionHash', (txHash) => {
        console.log('Transaction Hash:', txHash);
        vote.eth = { txHash };
        cb(null, vote);
      })
      .on('error', (err) => { console.log(err); });

  } catch (err) {
    cb(err);
  }
};

configDefaultAccount();

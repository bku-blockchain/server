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

const accountIsFree = []; // Mark if ETH Account is free (true/false), default is true => free
let numberAccounts = 0;

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

  // add test accounts
  web3.eth.accounts.wallet.add(web3.eth.accounts.privateKeyToAccount(`0x${process.env.ROPSTEN_PRIVATE_KEY_A}`));
  web3.eth.accounts.wallet.add(web3.eth.accounts.privateKeyToAccount(`0x${process.env.ROPSTEN_PRIVATE_KEY_B}`));
  web3.eth.accounts.wallet.add(web3.eth.accounts.privateKeyToAccount(`0x${process.env.ROPSTEN_PRIVATE_KEY_C}`));
  web3.eth.accounts.wallet.add(web3.eth.accounts.privateKeyToAccount(`0x${process.env.ROPSTEN_PRIVATE_KEY_D}`));

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

  // Mark free for all account
  console.log('Wallet Accounts:');
  numberAccounts = web3.eth.accounts.wallet.length;
  for (let i = 0; i < numberAccounts; i++) {
    console.log(web3.eth.accounts.wallet[i].address, web3.eth.accounts.wallet[i].privateKey);
    accountIsFree.push(true);
  }
};


/**
 * ==========================================================================
 * Functions
 * ==========================================================================
 * */


/**
  * Retrieve free account
  * Return index, address and nonce for pending
  */
export const initAccount = async () => {
  // find free account now
  const index = accountIsFree.indexOf(true);
  let address = null;
  if (index != -1) { // exist free account
    accountIsFree[index] = false; // mark busy with waiting nonce
    address = web3.eth.accounts.wallet[index].address;
    console.log('Index set False:', index);
  } else {
    // TODO: ???
  }

  console.log('Selected Address:', address);

  // get Nonce with option pending, for handle parallel request
  const nonce = await web3.eth.getTransactionCount(address, 'pending');
  console.log('Nonce:', nonce);

  return { address, index, nonce };
};

export const freeAccount = (index) => {
  if (index != -1) {
    console.log('Index set True:', index);
    accountIsFree[index] = true;
  }
};

/**
 * Deploy new smart contract
 */
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

    const { address, index, nonce } = await initAccount();

    const gasLimit = await txInstance.estimateGas({
      from: address,
      gasPrice,
      nonce
    });
    console.log('Gas limit:', gasLimit);

    txInstance.send({
      from: address,
      gas: gasLimit,
      gasPrice,
      nonce
    })
      .on('transactionHash', (txHash) => {
        console.log('Transaction Hash:', txHash);
        // mark address is free now
        freeAccount(index);
        poll.eth = {
          ownerAddress: address,
          contractSecretKey: secretKey,
          txHash
        };
        cb(null, poll);
      })
      .on('receipt', (receipt) => {
        console.log('Receipt:', receipt);
        Poll.findByIdAndUpdate(poll.id, { 'eth.contractAddress': receipt.contractAddress })
          .then(() => {
            console.log('Update poll: ', poll.id);
          });
      })
      .on('error', (err) => {
        // mark address is free now
        freeAccount(index);
        cb(err);
      });

  } catch (err) {
    cb(err);
  }
};

/**
 * Send transaction
 */
export const createVoting = async ({ vote, contractAddress, secretKey, userID, hashValue }, cb) => {
  try {
    const PollingContract = new web3.eth.Contract(abi, contractAddress);

    const txInstance = PollingContract.methods
      .createVoting(secretKey, web3.utils.toHex(userID), hashValue);

    // TODO: estimate gas is not working here
    // const gasLimit = await txInstance.estimateGas();
    const gasLimit = web3.utils.toHex(1e5);
    console.log('Gas limit:', gasLimit);

    const { address, index, nonce } = await initAccount();

    console.log('Gas limit:', gasLimit);

    txInstance.send({
      from: address,
      gas: gasLimit,
      gasPrice,
      nonce
    })
      .on('transactionHash', (txHash) => {
        console.log('Transaction Hash:', txHash);
        // mark address is free now
        freeAccount(index);
        vote.eth = { txHash };
        cb(null, vote);
      })
      .on('error', (err) => { freeAccount(index); cb(err); });

  } catch (err) {
    cb(err);
  }
};

configDefaultAccount();

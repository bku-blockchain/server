import Web3 from 'web3';
import mongoose from 'mongoose';

import PollingContractJSON from '../build/contracts/Polling.json';

const Poll = mongoose.model('Poll');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const { abi, bytecode } = PollingContractJSON;
const PollingContract = new web3.eth.Contract(abi);

const configDefaultAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  web3.eth.defaultAccount = accounts[0];
  console.log('Default account address:', web3.eth.defaultAccount);
};

export const deployContract = async ({ pollID, startDate, endDate }) => {
  try {
    const secretKey = web3.utils.randomHex(32);
    console.log(secretKey);
    const txInstance = PollingContract.deploy({
      arguments: [secretKey, startDate, endDate],
      data: bytecode
    });

    const gasLimit = await txInstance.estimateGas();
    console.log('Gas limit:', gasLimit);

    txInstance.send({
      from: web3.eth.defaultAccount,
      gas: gasLimit,
      gasPrice: web3.utils.toHex(1e9)
    })
      .on('transactionHash', (txHash) => {
        console.log('Transaction Hash:', txHash);
      })
      .on('receipt', (receipt) => {
        console.log(receipt.transactionHash);
        console.log(receipt.contractAddress);
        Poll.findOneAndUpdate({
          id: pollID
        }, {
          eth: {
            ownerAddress: web3.eth.defaultAccount,
            txHash: receipt.transactionHash,
            contractAddress: receipt.contractAddress,
            contractSecretKey: secretKey
          }
        }).exec().then((poll) => {
          console.log('Poll is updated');
          console.log(poll);
        });
      });

  } catch (err) {
    console.log(err);
  }
};

configDefaultAccount();

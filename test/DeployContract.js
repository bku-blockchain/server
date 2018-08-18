const Web3 = require('web3');
const async = require('async');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

/** Contract compiled by `truffle compile` */
const ballotContractJSON = require('../build/contracts/Ballot.json');

const { bytecode } = ballotContractJSON;

/**
 * Example account with ganache-cli
 * Change to your address with ganache-cli
 */
const personalAddress = '0x5bb45ab1dd0ab18a1ecbcb8cb659c1ddee27b3c2';

const estimateGas = (bytecode, cb) => {
  web3.eth.estimateGas({ data: bytecode })
    .then((gas) => {
      console.log('Gas estimate: ', gas);
      /** Gas estimate:  605107 */
      cb(null, gas);
    })
    .catch(err => cb(err));
};

const deployContract = (gas, cb) => {
  web3.eth.sendTransaction({
    from: personalAddress,
    data: bytecode,
    gas
  }).then((receipt) => {
    console.log(receipt);
    /**
      { transactionHash: '0x4521eacc1c2db3cec7ec9fe1185ad4f61b9188f0c03308cb3ebcfbbb6326ad72',
        transactionIndex: 0,
        blockHash: '0xddcfb007a7ed759d6ad90f0f10a4269f28affd671a68e866befad7ef988de336',
        blockNumber: 2,
        gasUsed: 605107,
        cumulativeGasUsed: 605107,
        contractAddress: '0x44f3Af5fB41bb98E72F255437448BF45C2163FDa',
        logs: [],
        status: true,
        logsBloom: '...' }
     */
    cb(null, receipt);
  }).catch(err => cb(err));
};

async.waterfall([
  /** start waterfall */
  cb => cb(null, bytecode),
  /** functions waterfall */
  estimateGas,
  deployContract

], (err, result) => {
  if (err) return console.log(err);
  console.log('Deploy contract successfully');
  console.log(result);
});

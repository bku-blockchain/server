const Web3 = require('web3');
const async = require('async');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

/** Contract compiled by `truffle compile` */
const ballotContractJSON = require('../build/contracts/Ballot.json');

const { abi, bytecode } = ballotContractJSON;

/**
 * Example account with ganache-cli
 * Change to your address with ganache-cli
 */
const personalAddress = '0x5bb45ab1dd0ab18a1ecbcb8cb659c1ddee27b3c2';

const ballotContract = new web3.eth.Contract(abi);

const estimateGas = (bytecode, cb) => {
  ballotContract.deploy({
    data: bytecode,
    arguments: [12]
  }).estimateGas()
    .then((gas) => {
      console.log('Gas estimate: ', gas);
      /** Gas estimate:  620299 */
      cb(null, gas);
    })
    .catch(err => cb(err));
};

const deployContract = (gas, cb) => {
  ballotContract.deploy({
    data: bytecode,
    arguments: [12]
  })
    .send({
      from: personalAddress,
      data: bytecode,
      gas
    })
    .then((instance) => {
      // console.log(instance);
      cb(null, instance.options.address);
    })
    .catch(err => cb(err));
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
  console.log('Contract Adress: ', result);
});

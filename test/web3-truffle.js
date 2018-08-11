const fs = require('fs');
const path = require('path');
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// const PollingContractJSON = require(path.join(__dirname, '../build/contracts/Polling.json'));
const PollingContractJSON = require('../build/contracts/Polling.json');

const { abi, bytecode } = PollingContractJSON;

const PollingContract = web3.eth.contract(abi);

const contractInstance = PollingContract.new('0q4rwed23', ['abc', '231', '123'], 2, 100000, 200000, {
  from: web3.eth.accounts[0],
  data: bytecode,
  gas: 6721975
});

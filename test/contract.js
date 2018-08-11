const Web3 = require('web3');
// const contract = require('truffle-contract');
const async = require('async');
const fs = require('fs');
const path = require('path');
const solc = require('solc');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// const UtilsLibArtifacts = require('../build/contracts/UtilsLib.json');
// const PollingArtifacts = require('../build/contracts/Polling.json');

// const UtilsLib = contract(UtilsLibArtifacts);
// const Polling = contract(PollingArtifacts);

// UtilsLib.setProvider(web3.currentProvider);
// Polling.setProvider(web3.currentProvider);

const source = fs.readFileSync(path.join(__dirname, '../contracts/Polling.sol'), 'utf8');
const compiledContract = solc.compile(source, 1);
const abi = compiledContract.contracts[':Polling'].interface;
const bytecode = compiledContract.contracts[':Polling'].bytecode;
const gasEstimate = web3.eth.estimateGas({ data: bytecode });
const PollingContract = web3.eth.contract(JSON.parse(abi));
console.log(gasEstimate);
var PollingContractReturned = PollingContract.new('0q4rwed23', ['abc', '231', '123'], 2, 100000, 200000, {
  from: web3.eth.accounts[0],
  data: bytecode,
  gas: gasEstimate
}, (err, contract) => {
  if (!err) {
    if (!contract.address) {
      console.log(contract.transactionHash);
    } else {
      console.log(contract.address);
    }
  }
});


// async.waterfall([
//   (cb) => {
//     web3.eth.getAccounts((err, accounts) => cb(err, accounts));
//   },
//   (accounts, cb) => {
//     Polling.new(['0q4rwed23', ['abc', '231', '123'], 2, 100000, 200000], {
//       data:
//     })
//     .then((instance) => {
//     // Polling.deployed().then((instance) => {
//       console.log(instance);
//       cb(null, accounts, instance);
//     }).catch(err => cb(err));
//   },
//   (accounts, instance, cb) => {
//     console.log(accounts);
//     console.log(instance.address);
//     instance.getBalance.call(accounts[0], { from: accounts[0] })
//       .then((result) => {
//         console.log(result.toString(10));
//         cb();
//       })
//       .catch(err => cb(err));
//   }
// ], (err) => {
//   if (err) return console.log(err);
//   console.log('OK');
// });

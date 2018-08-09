const Web3 = require('web3');
const contract = require('truffle-contract');
const async = require('async');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const metaCoinArtifacts = require('../build/contracts/MetaCoin.json');

const MetaCoin = contract(metaCoinArtifacts);

MetaCoin.setProvider(web3.currentProvider);

async.waterfall([
  (cb) => {
    web3.eth.getAccounts((err, accounts) => cb(err, accounts));
  },
  (accounts, cb) => {
    MetaCoin.deployed().then((instance) => {
      cb(null, accounts, instance);
    }).catch(err => cb(err));
  },
  (accounts, instance, cb) => {
    console.log(accounts);
    console.log(instance.address);
    instance.getBalance.call(accounts[0], { from: accounts[0] })
      .then((result) => {
        console.log(result.toString(10));
        cb();
      })
      .catch(err => cb(err));
  }
], (err) => {
  if (err) return console.log(err);
  console.log('OK');
});

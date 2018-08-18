require('dotenv').config();

const Web3 = require('web3');
const config = require('../config');

const web3 = new Web3(new Web3.providers.HttpProvider(config.eth.provider));

web3.eth.defaultAccount = config.eth.ropstenAddress;

// const myAccount = web3.eth.accounts.create();
// web3.eth.accounts.wallet.create(5);

web3.eth.accounts.wallet.add({
  address: web3.eth.defaultAccount,
  privateKey: config.eth.ropstenPrivateKey
});

console.log(web3.eth.accounts.wallet);

// web3.eth.getAccounts().then(console.log);

// web3.eth.getBlockNumber()
//   .then(blockNumber => console.log('Block number:', blockNumber))
//   .catch(err => console.log(err));

// web3.eth.getBalance(personalAccount)
//   .then(balance => console.log('Balance:', balance, 'wei'))
//   .catch(err => console.log(err));

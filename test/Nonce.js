require('dotenv').config();

const Web3 = require('web3');
const config = require('../config');

const web3 = new Web3(new Web3.providers.HttpProvider(config.eth.provider));

const personalAccount = config.eth.ropstenAddress;

web3.eth.getTransactionCount(personalAccount)
  .then((nonce) => {
    console.log('Nonce:', nonce);
  })
  .catch(err => console.log(err));

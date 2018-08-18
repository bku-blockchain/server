require('dotenv').config();

const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const async = require('async');
const cryptoJS = require('crypto-js');

const config = require('../config');

const web3 = new Web3(new Web3.providers.HttpProvider(config.eth.provider));

/** Contract compiled by `truffle compile` */
const ballotContractJSON = require('../build/contracts/Ballot.json');

const { bytecode } = ballotContractJSON;

const privateKey = Buffer.from(config.eth.ropstenPrivateKey, 'hex');

var rawTx = {
  nonce: web3.utils.toHex(2),
  gasLimit: web3.utils.toHex(1e6),
  gasPrice: web3.utils.toHex(10e9), // 10 Gwei
  from: config.eth.ropstenAddress,
  value: '0x00',
  data: bytecode
};

const tx = new Tx(rawTx);
tx.sign(privateKey);
const serializedTx = `0x${tx.serialize().toString('hex')}`;

web3.eth.sendSignedTransaction(serializedTx)
  .on('transactionHash', (hash) => {
    console.log('Hash');
    console.log(hash);
  })
  .on('error', console.log)
  .on('receipt', console.log);

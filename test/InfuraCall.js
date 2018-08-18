require('dotenv').config();

const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const async = require('async');
const cryptoJS = require('crypto-js');

const config = require('../config');

const web3 = new Web3(new Web3.providers.HttpProvider(config.eth.provider));

/** Contract compiled by `truffle compile` */
const ballotContractJSON = require('../build/contracts/Ballot.json');

const { abi, bytecode } = ballotContractJSON;

const contractAddress = '0x3F8E30EB904F4Ef25f5868f9A156a68e14B55Ec3';

const ballotContract = new web3.eth.Contract(abi, contractAddress);

const giveRightToVote = ballotContract.methods.giveRightToVote('0x852bc216934c04cf472c16a89ec45c3e78fc8a5f');

const privateKey = Buffer.from(config.eth.ropstenPrivateKey, 'hex');


giveRightToVote.estimateGas({ from: config.eth.ropstenAddress })
  .then((gasLimit) => {
    console.log('Gas limit: ', gasLimit);
    web3.eth.getTransactionCount(config.eth.ropstenAddress)
      .then((_nonce) => {
        const nonce = _nonce.toString(16);

        console.log(`Nonce: ${nonce}`);
        const txParams = {
          gasPrice: '0x09184e72a000',
          gasLimit,
          to: contractAddress,
          data: giveRightToVote.encodeABI(),
          from: config.eth.ropstenAddress,
          nonce: `0x${nonce}`
        };

        const tx = new Tx(txParams);
        tx.sign(privateKey);

        const serializedTx = tx.serialize();

        web3.eth.sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
          .on('receipt', (receipt) => {
            console.log(receipt);
          });
      });
  });


require('dotenv').config();

const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

const config = require('../config');

const web3 = new Web3(new Web3.providers.HttpProvider(config.eth.provider));

/** Contract compiled by `truffle compile` */
const ballotContractJSON = require('../build/contracts/Ballot.json');

const { abi, bytecode } = ballotContractJSON;

const personalAddress = config.eth.ropstenAddress;
const privateKey = Buffer.from(config.eth.ropstenPrivateKey, 'hex');
const contractAddress = '0x3F8E30EB904F4Ef25f5868f9A156a68e14B55Ec3';

const ballotContract = new web3.eth.Contract(abi, contractAddress);
const giveRightToVote = ballotContract.methods.giveRightToVote('0x152bc216934c04cf472c16a89ec45c3e78fc8a5f');


const call = async () => {
  try {
    const gasLimit = await giveRightToVote.estimateGas({ from: personalAddress });
    console.log('Gas limit:', gasLimit);
    const nonce = await web3.eth.getTransactionCount(personalAddress);
    console.log('Nonce:', nonce);

    const txParams = {
      from: personalAddress,
      to: contractAddress,
      data: giveRightToVote.encodeABI(),
      gasPrice: web3.utils.toHex(1e10),
      gasLimit,
      nonce: web3.utils.toHex(nonce)
    };

    const tx = new Tx(txParams);
    tx.sign(privateKey);
    const serializedTx = tx.serialize();

    const receipt = await web3.eth.sendSignedTransaction(`0x${serializedTx.toString('hex')}`);

    console.log('Send transaction successfully');
    console.log(receipt);

  } catch (err) {
    console.log(err);
  }
};

call();

require('dotenv').config();

const Web3 = require('web3');

const config = require('../config');

/** Contract compiled by `truffle compile` */
const ballotContractJSON = require('../build/contracts/Ballot.json');

const web3 = new Web3(new Web3.providers.HttpProvider(config.eth.provider));

/**
 * Add to wallet, can use sendTransaction()
 * Dont have to sign to transaction manually
 */
const privateKey = config.eth.ropstenPrivateKey;
const account = web3.eth.accounts.privateKeyToAccount(`0x${privateKey}`);
web3.eth.accounts.wallet.add(account);

/** Set the default account, used to `from` */
web3.eth.defaultAccount = account.address;
console.log('Account address:', account.address);


const { abi, bytecode } = ballotContractJSON;
const contractAddress = '0x3F8E30EB904F4Ef25f5868f9A156a68e14B55Ec3';

const ballotContract = new web3.eth.Contract(abi, contractAddress);

const giveRightToVote = ballotContract.methods.giveRightToVote('0x852bc216934c04cf472c16a89ec45c3e78fc8a5f');

const vote = async () => {
  try {
    const gasLimit = await giveRightToVote.estimateGas();
    console.log('Gas limit:', gasLimit);

    giveRightToVote.send({
      from: web3.eth.defaultAccount,
      gas: gasLimit,
      gasPrice: web3.utils.toHex(1e10)
    })
      .on('transactionHash', (hash) => {
        console.log('Hash:', hash);
      })
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('Confirmation:', confirmationNumber);
        // console.log(receipt);
      })
      .on('receipt', (receipt) => {
        console.log(receipt);
      })
      .on('error', console.error);

  } catch (err) {
    console.log(err);
  }
};

vote();

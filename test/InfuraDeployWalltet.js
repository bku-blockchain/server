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

const ballotContract = new web3.eth.Contract(abi);

const deploy = async () => {
  try {
    const contractParams = {
      data: bytecode,
      arguments: [12]
    };
    const gasLimit = await web3.eth.estimateGas(contractParams);
    console.log('Gas limit:', gasLimit);

    ballotContract.deploy(contractParams)
      .send({
        from: web3.eth.defaultAccount,
        gas: gasLimit * 5,
        gasPrice: web3.utils.toHex(1e10)
      })
      // .on('transactionHash', (hash) => {
      //   console.log('Hash:', hash);
      // })
      // .on('confirmation', (confirmationNumber) => {
      //   console.log('Confirmation:', confirmationNumber);
      // })
      // .on('receipt', (receipt) => {
      //   console.log(receipt);
      // })
      // .on('error', console.error)
      .then((result) => {
        console.log(result);
      });

  } catch (err) {
    console.log(err);
  }
};

deploy();

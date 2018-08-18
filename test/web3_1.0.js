const Web3 = require('web3');
const async = require('async');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// const contractAddress = '0xc3bb8c9b7a34f994c6f9b906bbcab78a6bd03ca43f3e476e43fbf805a5fbdd19';
const personalAddress = '0x5bb45ab1dd0ab18a1ecbcb8cb659c1ddee27b3c2';

const ballotContractJSON = require('../build/contracts/Ballot.json');

const { abi, bytecode } = ballotContractJSON;

const exampleDeployContract

// const ballotContract = new web3.eth.Contract(abi, contractAddress);
const gasEstimate = web3.eth.estimateGas({ data: bytecode }).then((gas) => {
  console.log(gas);
  web3.eth.sendTransaction({
    from: personalAddress,
    data: bytecode,
    gas
  }).then((receipt) => {
    console.log(receipt);
    /**
      { transactionHash: '0xb7372cd201c7bca5978f95103b7c71b5a38dfeab11f316fee50efe5a448fac68',
      transactionIndex: 0,
      blockHash: '0x3efa30d762574bd96e90a0f1fe3428437046fac3ac82354ba100ce17e38c7ec3',
      blockNumber: 1,
      gasUsed: 605107,
      cumulativeGasUsed: 605107,
      contractAddress: '0x102334e863D68b06AE5f3A4ABCa82c9321d069e6',
      logs: [],
      status: true,
     */
  }).catch(err => console.log(err));
});


// > Web3.utils
// > Web3.version
// > Web3.givenProvider
// > Web3.providers
// > Web3.modules

// Web3.modules
// > {
//     Eth: Eth function(provider),
//     Net: Net function(provider),
//     Personal: Personal function(provider),
//     Shh: Shh function(provider),
//     Bzz: Bzz function(provider),
// }

// web3.providers
// web3.eth.providers
// web3.shh.providers
// web3.bzz.providers

// web3.givenProvider
// web3.eth.givenProvider
// web3.shh.givenProvider
// web3.bzz.givenProvider

// web3.currentProvider
// web3.eth.currentProvider
// web3.shh.currentProvider
// web3.bzz.currentProvider

// web3.eth.setProvider(myProvider)
// web3.shh.setProvider(myProvider)
// web3.bzz.setProvider(myProvider)

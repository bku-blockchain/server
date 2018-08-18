const Web3 = require('web3');
const async = require('async');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

/** Contract compiled by `truffle compile` */
const ballotContractJSON = require('../build/contracts/Ballot.json');

const { abi } = ballotContractJSON;

/**
 * Example account with ganache-cli
 * Change to your address with ganache-cli
 */
const personalAddress = '0x5bb45ab1dd0ab18a1ecbcb8cb659c1ddee27b3c2';

/**
 * Example contract address had been deployed by ganache-cli
 */
const contractAddress = '0x44f3Af5fB41bb98E72F255437448BF45C2163FDa';

const ballotContract = new web3.eth.Contract(abi, contractAddress);

const giveRightToVote = () => {
  /** See contracts/Ballot.sol for detail
   * giveRightToVote() is a method sending a transaction
   * not a method call. Only used by owner.
   * Argument is an address of other account
   */
  ballotContract.methods.giveRightToVote('0x852bc216934c04cf472c16a89ec45c3e78fc8a5f')
    .send({
      from: personalAddress
    })
    .then((receipt) => {
      console.log(receipt);
      /**
        { transactionHash: '0xa65d65ab828c66b8bdfeba7f42efdf75a5ece1d210f97efd6cc23b0845794b53',
          transactionIndex: 0,
          blockHash: '0x8e93afd2c6463e94434d0164d1c1732ecafcfb4148f90d541348cd4ad347a220',
          blockNumber: 7,
          gasUsed: 43662,
          cumulativeGasUsed: 43662,
          contractAddress: null,
          status: true,
          logsBloom: '...',
          events: {} }
       */
    })
    .catch((err) => {
      console.log(err);
    });
};

giveRightToVote();

const Web3 = require('web3');
const fs = require('fs');
const path = require('path');
const solc = require('solc');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const source = fs.readFileSync(path.join(__dirname, '../contracts/Polling.sol'), 'utf8');
const compiledContract = solc.compile(source, 1);
const abi = compiledContract.contracts[':Polling'].interface;
const bytecode = compiledContract.contracts[':Polling'].bytecode;
const gasEstimate = web3.eth.estimateGas({ data: bytecode });
const PollingContract = web3.eth.contract(JSON.parse(abi));

const PollingContractReturned = PollingContract.new('0q4rwed23', ['abc', '231', '123'], 2, 100000, 200000, {
  from: web3.eth.accounts[0],
  data: bytecode,
  gas: gasEstimate
}, (err, contract) => {
  if (!err) {
    if (!contract.address) {
      console.log(contract.transactionHash);
    } else {
      console.log(contract.address);
    }
  }
});

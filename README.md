# Server

+ API endpoint: http://api.lab.bkchain.tk/
+ Dashboard: http://admin.lab.bkchain.tk/
+ Old dashboard: http://lab.bkchain.tk/
+ Static files for upload: http://static.lab.bkchain.tk/

## Quickstart

+ Clone repository, installing packages with `npm` or `yarn`
+ Copy file `.env.example` to file `.env` with the same path.
+ Change variables in new file `.env` with your values.


## APIs

View `docs/APIs.md`

On postman: https://documenter.getpostman.com/view/2583401/RzZ9FK8g


## Notes

### Compile smart contract with Truffle
With `truffle` is installed as devDependencies, you can run truffle by:

```bash
# Run directly
./node_modules/.bin/truffle compile

# Run via package.json
yarn run sol
yarn sol
```
Solidity files in `contracts/*.sol` will be compiled to `build/contracts/*.json`


### Start EVM with Ganache CLI
With `ganache-cli` is installed as devDependencies, you can run local EVM with ganache by:

```bash
# Run directly
./node_modules/.bin/ganache-cli

# Run via package.json
npm run evm
yarn evm
```

It will run on `127.0.0.1:8545`



### Document for Web3js version 1.0

+ Manage accounts and wallet:
	+ Private Key to Account: https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html#privatekeytoaccount
	+ Add account to wallet: https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html#wallet-add
	+ Remove account from wallet: https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html#wallet-remove
+ Deploy smart contract: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#deploy
+ Use methods in Contract:
	+ Call: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-call
	+ Send: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
+ Some utils:
	+ toHex: https://web3js.readthedocs.io/en/1.0/web3-utils.html#tohex
	+ toWei: https://web3js.readthedocs.io/en/1.0/web3-utils.html#towei
	+ hexToBytes: https://web3js.readthedocs.io/en/1.0/web3-utils.html#hextobytes

var UtilsLib = artifacts.require('./UtilsLib.sol');
var Polling = artifacts.require('./Polling.sol');

module.exports = function (deployer) {
  deployer.deploy(UtilsLib);
  deployer.link(UtilsLib, Polling);
  // deployer.deploy(Polling);
};

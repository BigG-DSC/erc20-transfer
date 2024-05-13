require('dotenv/config');
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    goerli: {
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      url: '<https://rpc.ankr.com/eth_sepolia>',
    },
  },
};

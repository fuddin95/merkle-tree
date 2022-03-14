require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          evmVersion: "constantinople",
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {},
      },
      {
        version: "0.7.6",
        settings: {},
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
};

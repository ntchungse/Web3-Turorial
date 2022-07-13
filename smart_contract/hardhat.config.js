// https://eth-rinkeby.alchemyapi.io/v2/hHi9JBXldz-Qgflnd1dlJlzU_9J3EUzv

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/hHi9JBXldz-Qgflnd1dlJlzU_9J3EUzv",
      accounts: [
        "f333b0bc4eb83075313857129c09f8ab6d93b92929f58a84340fed75851de2bd",
      ],
    },
  },
};

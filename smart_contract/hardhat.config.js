// https://eth-ropsten.alchemyapi.io/v2/h0lm8JObKfJdgixvgtzTZUyZV7IYO2Si

require('@nomiclabs/hardhat-waffle');   // plugin to build smart contracts tests

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/h0lm8JObKfJdgixvgtzTZUyZV7IYO2Si',
      accounts: ['f8ed2b4ec98eabc4336e548afe6389d58a3be5231c2c4adaa7f47e8a8f909b12']
    }
  }
}
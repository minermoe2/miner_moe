const baseUrl = 'http://miner-mo.bitballoon.com';

module.exports = {
  test: {
    timeout: 2 * 60 * 1000,
    url: `${ baseUrl }#test`,
  },
};

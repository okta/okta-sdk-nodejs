const faker = require('@faker-js/faker');

module.exports = () => ({
  profile: {
    name: `node-sdk: ${faker.random.word().substring(0, 49)}`,
  }
});

const faker = require('faker');

module.exports = () => ({
  profile: {
    name: faker.random.word()
  }
});

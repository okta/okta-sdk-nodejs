const faker = require('@faker-js/faker');

module.exports = () => ({
  profile: {
    name: faker.random.word().substring(0, 49),
  }
});

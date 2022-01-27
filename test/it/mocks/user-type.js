const faker = require('@faker-js/faker');

module.exports = () => ({
  description: faker.random.word(),
  displayName: faker.random.word(),
  name: faker.lorem.word().substring(0, 49),
});

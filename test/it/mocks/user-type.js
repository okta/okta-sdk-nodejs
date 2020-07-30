const faker = require('faker');

module.exports = () => ({
  description: faker.random.word(),
  displayName: faker.random.word(),
  name: faker.lorem.word()
});

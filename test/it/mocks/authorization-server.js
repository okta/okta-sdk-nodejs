const faker = require('@faker-js/faker');

module.exports = () => ({
  name: faker.random.words().substring(0, 99),
  description: faker.random.word(),
  audiences: [
    'https://api.resource.com'
  ]
});

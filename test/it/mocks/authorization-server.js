const faker = require('faker');

module.exports = () => ({
  name: faker.random.words().substring(0, 99),
  description: faker.random.word(),
  audiences: [
    'https://api.resource.com'
  ]
});

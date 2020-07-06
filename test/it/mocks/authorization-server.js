const faker = require('faker');

module.exports = () => ({
  name: faker.random.word(),
  description: faker.random.word(),
  audiences: [
    'https://api.resource.com'
  ]
});

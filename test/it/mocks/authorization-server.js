const faker = require('faker');

module.exports = () => ({
  name: faker.random.word().substring(0, 49),
  description: faker.random.word(),
  audiences: [
    'https://api.resource.com'
  ]
});

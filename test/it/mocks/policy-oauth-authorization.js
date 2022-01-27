const faker = require('@faker-js/faker');

module.exports = () => ({
  type: 'OAUTH_AUTHORIZATION_POLICY',
  status: 'ACTIVE',
  name: faker.random.word(),
  description: faker.random.word(),
  priority: 1,
  conditions: {
    clients: {
      include: [
        'ALL_CLIENTS'
      ]
    }
  }
});

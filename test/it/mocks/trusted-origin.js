const faker = require('@faker-js/faker');

module.exports = () => ({
  name: faker.random.words().substring(0, 99),
  origin: `https://${faker.internet.domainName()}/`,
  scopes: [
      { type: 'REDIRECT' },
      { type: 'CORS' }
  ]
});

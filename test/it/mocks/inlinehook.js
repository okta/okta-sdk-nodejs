const faker = require('faker');

module.exports = () => ({
  name: faker.random.word().substring(0, 49),
  type: 'com.okta.oauth2.tokens.transform',
  version: '1.0.0',
  channel: {
    type: 'HTTP',
    version: '1.0.0',
    config: {
      uri: 'https://example.com',
      headers: [
        {
          key: 'x-any-key',
          value: 'my-header-value'
        }
      ],
      method: 'POST',
      authScheme: {
        type: 'HEADER',
        key: 'Authorization',
        value: 'my-shared-secret'
      }
    }
  }
});

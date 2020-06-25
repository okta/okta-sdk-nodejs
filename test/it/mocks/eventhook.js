const faker = require('faker');

module.exports = () => ({
  name: faker.random.word(),
  events: {
    type: 'EVENT_TYPE',
    items: [
      'user.session.start',
      'user.lifecycle.create'
    ]
  },
  channel: {
    type: 'HTTP',
    version: '1.0.0',
    config: {
      uri: 'https://example.com/eventHooks',
      headers: [
        {
          key: 'x-any-key',
          value: 'my-header-value'
        }
      ],
      authScheme: {
        type: 'HEADER',
        key: 'Authorization',
        value: 'my-shared-secret'
      }
    }
  }
});

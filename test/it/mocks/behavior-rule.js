const faker = require('@faker-js/faker');

module.exports = () => ({
  name: `node-sdk: ${faker.random.word().substring(0, 49)}`,
  type: 'ANOMALOUS_DEVICE',
  status: 'INACTIVE',
  settings: {
    maxEventsUsedForEvaluation: 1
  }
});

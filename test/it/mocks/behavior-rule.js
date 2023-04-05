const faker = require('@faker-js/faker');

module.exports = (type) => {
  switch (type) {
    case 'ANOMALOUS_DEVICE':
      return {
        name: `node-sdk: ${faker.random.word().substring(0, 49)}`,
        type: 'ANOMALOUS_DEVICE',
        status: 'INACTIVE',
        settings: {
          minEventsUsedForEvaluation: 1,
          maxEventsUsedForEvaluation: 2,
        }
      };
    case 'ANOMALOUS_IP':
      return {
        name: `node-sdk: ${faker.random.word().substring(0, 49)}`,
        type: 'ANOMALOUS_IP',
        status: 'INACTIVE',
        settings: {
          minEventsUsedForEvaluation: 1,
          maxEventsUsedForEvaluation: 2,
        }
      };
    case 'ANOMALOUS_LOCATION':
      return {
        name: `node-sdk: ${faker.random.word().substring(0, 49)}`,
        type: 'ANOMALOUS_LOCATION',
        status: 'INACTIVE',
        settings: {
          minEventsUsedForEvaluation: 0,
          maxEventsUsedForEvaluation: 1,
          granularity: 'LAT_LONG',
          radiusKilometers: 20,
        }
      };
    case 'VELOCITY':
      return {
        name: `node-sdk: ${faker.random.word().substring(0, 49)}`,
        type: 'VELOCITY',
        status: 'INACTIVE',
        settings: {
          velocityKph: 800,
        }
      };
    default:
      throw new Error(`Unknown type ${type}`);
  }
};

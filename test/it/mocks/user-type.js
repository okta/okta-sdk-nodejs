const faker = require('@faker-js/faker');

module.exports = () => {
  const name = faker.random.words().replace(/[^0-9A-Za-z]/g, '');
  return {
    description: name,
    displayName: 'node-sdk: ' + name,
    name: 'sdk_' + name.substring(0, 40),
  };
};

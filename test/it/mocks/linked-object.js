import faker = require('faker');

module.exports = () => ({
  primary: {
    name: faker.name.firstName(),
    title: 'Manager',
    description: 'Manager link property',
    type: 'USER'
  },
  associated: {
    name: faker.name.firstName(),
    title: 'Subordinate',
    description: 'Subordinate link property',
    type: 'USER'
  }
});

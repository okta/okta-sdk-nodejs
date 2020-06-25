const faker = require('faker');

module.exports = () => ({
  primary: {
    name: faker.lorem.word(),
    title: 'Manager',
    description: 'Manager link property',
    type: 'USER'
  },
  associated: {
    name: faker.lorem.word(),
    title: 'Subordinate',
    description: 'Subordinate link property',
    type: 'USER'
  }
});

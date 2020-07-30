const faker = require('faker');

module.exports = () => ({
  type: 'SIGN_ON',
  name: faker.random.word(),
  conditions: {
    network: {
      connection: 'ANYWHERE'
    },
    authContext: {
      authType: 'ANY'
    }
  },
  actions: {
    signon: {
      access: 'DENY',
      requireFactor: false
    }
  }
});

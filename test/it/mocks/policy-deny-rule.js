const faker = require('faker');

module.exports = () => ({
  type: 'SIGN_ON',
  name: faker.random.word().substring(0, 49),
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

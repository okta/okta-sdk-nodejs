const faker = require('faker');

module.exports = () => ({
  type: 'OKTA_SIGN_ON',
  name: faker.random.word().substring(0, 49),
  description: faker.random.word(),
  conditions: {
    people: {
      groups: {
        include: []
      }
    }
  },
  _links: {
    self: {
      hints: {
        allow: [
          'GET',
          'PUT',
          'DELETE'
        ]
      }
    },
    active: {
      hints: {
        allow: [
          'POST'
        ]
      }
    },
    deactivate: {
      hints: {
        allow: [
          'POST'
        ]
      }
    },
    rules: {
      hints: {
        allow: [
          'GET',
          'POST',
          'PUT',
          'DELETE'
        ]
      }
    }
  }
});

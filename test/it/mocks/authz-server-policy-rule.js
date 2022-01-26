const faker = require('@faker-js/faker');

module.exports = () => ({
  name: faker.random.word().substring(0, 49),
  priority: 1,
  conditions: {
    people: {
      users: {
        include: [],
        exclude: []
      },
      groups: {
        include: [
          "EVERYONE"
        ],
        exclude: []
      }
    },
    grantTypes: {
      include: [
        "implicit",
        "client_credentials",
        "password",
        "authorization_code"
      ]
    },
    scopes: {
      include: [
        "*"
      ]
    }
  },
  actions: {
    token: {
      accessTokenLifetimeMinutes: 5,
      refreshTokenLifetimeMinutes: 0,
      refreshTokenWindowMinutes: 10080
    }
  },
  type: "RESOURCE_ACCESS"
});

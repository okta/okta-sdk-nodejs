const faker = require('@faker-js/faker');

module.exports = () => ({
  type: 'GOOGLE',
  name: `node-sdk: Google ${faker.random.word().substring(0, 49)}`,
  issuerMode: 'ORG_URL',
  protocol: {
    endpoints: {
      authorization: {
        binding: 'HTTP-REDIRECT',
        url: 'https://accounts.google.com/o/oauth2/auth'
      },
      token: {
        binding: 'HTTP-POST',
        url: 'https://www.googleapis.com/oauth2/v3/token'
      }
    },
    scopes: [
      'email',
      'openid',
      'profile'
    ],
    type: 'OIDC',
    credentials: {
      client: {
        client_id: 'your-client-id',
        client_secret: 'your-client-secret'
      }
    }
  },
  policy: {
    accountLink: {
      action: 'AUTO',
      filter: null
    },
    provisioning: {
      action: 'AUTO',
      conditions: {
        deprovisioned: {
          action: 'NONE'
        },
        suspended: {
          action: 'NONE'
        }
      },
      groups: {
        action: 'NONE'
      },
      profileMaster: false
    },
    maxClockSkew: 0,
    subject: {
      userNameTemplate: {
        template: 'idpuser.email'
      },
      matchAttribute: '',
      matchType: 'USERNAME',
      filter: null
    }
  }
});

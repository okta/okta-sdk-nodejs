const faker = require('@faker-js/faker');

module.exports = () => ({
  type: 'FACEBOOK',
  name: 'Facebook ' + faker.random.word().substring(0, 40),
  issuerMode: 'ORG_URL',
  protocol: {
    endpoints: {
      authorization: {
        binding: 'HTTP-REDIRECT',
        url: 'https://www.facebook.com/dialog/oauth'
      },
      token: {
        binding: 'HTTP-POST',
        url: 'https://graph.facebook.com/v2.8/oauth/access_token'
      }
    },
    scopes: [
      'public_profile',
      'openid'
    ],
    type: 'OAUTH2',
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

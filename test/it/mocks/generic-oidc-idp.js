const faker = require('@faker-js/faker');

module.exports = () => ({
  type: 'OIDC',
  name: `node-sdk: ${faker.random.word().substring(0, 49)}`,
  issuerMode: 'ORG_URL',
  protocol: {
    algorithms: {
      request: {
        signature: {
          algorithm: 'SHA-256',
          scope: 'REQUEST'
        }
      },
      response: {
        signature: {
          algorithm: 'SHA-256',
          scope: 'ANY'
        }
      }
    },
    endpoints: {
      acs: {
        binding: 'HTTP-POST',
        type: 'INSTANCE'
      },
      authorization: {
        binding: 'HTTP-REDIRECT',
        url: 'https://idp.example.com/authorize'
      },
      token: {
        binding: 'HTTP-POST',
        url: 'https://idp.example.com/token'
      },
      userInfo: {
        binding: 'HTTP-REDIRECT',
        url: 'https://idp.example.com/userinfo'
      },
      jwks: {
        binding: 'HTTP-REDIRECT',
        url: 'https://idp.example.com/keys'
      }
    },
    scopes: [
      'openid'
    ],
    type: 'OIDC',
    credentials: {
      client: {
        client_id: 'your-client-id',
        client_secret: 'your-client-secret'
      }
    },
    issuer: {
      url: 'https://idp.example.com'
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
      }
    },
    maxClockSkew: 120000,
    subject: {
      userNameTemplate: {
        template: 'idpuser.email'
      },
      matchType: 'USERNAME'
    }
  }
});

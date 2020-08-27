const faker = require('faker');

module.exports = () => ({
  name: 'oidc_client',
  label: faker.random.word().substring(0, 49),
  signOnMode: 'OPENID_CONNECT',
  settings: {
    oauthClient: {
      redirect_uris: [
        'https://example.com'
      ],
      response_types: [
        'code'
      ],
      grant_types: [
        'authorization_code'
      ],
      application_type: 'native'
    }
  }
});

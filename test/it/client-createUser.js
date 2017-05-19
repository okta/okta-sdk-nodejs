const assert = require('chai').assert;
const faker = require('faker');
const okta = require('../../');
const models = require('../../src/models');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL,
  token: process.env.OKTA_APICLIENT_TOKEN
});

describe('client.createUser()', () => {
  let _user;
  after(() => {
    return _user.deactivate().then(() => _user.delete());
  });
  it('should allow me to create a user', () => {
    const email = faker.internet.email(null, null, 'example.com');
    const newUser = {
      'profile': {
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'email': email,
        'login': email
      },
      'credentials': {
        'password' : {
          'value': 'PasswordAbc123'
        }
      }
    };
    return client.createUser(newUser).then((user) => {
      _user = user;
      assert.instanceOf(user, models.User);
      assert.equal(user.profile.firstName, newUser.profile.firstName);
      assert.equal(user.profile.lastName, newUser.profile.lastName);
      assert.equal(user.profile.email, newUser.profile.email);
      assert.equal(user.profile.login, newUser.profile.login);
    });
  });
});

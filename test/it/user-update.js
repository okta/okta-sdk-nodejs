const assert = require('chai').assert;
const faker = require('faker');
const okta = require('../../');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL,
  token: process.env.OKTA_APICLIENT_TOKEN
});

describe('user.update()', () => {
  let _user;
  before(() => {
    const email = faker.internet.email(null, null, 'example.com');
    const newUser = {
      'profile': {
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'email': email,
        'login': email,
        'nickName': 'bob'
      },
      'credentials': {
        'password' : {
          'value': 'PasswordAbc123'
        }
      }
    };
    return client.createUser(newUser).then((user) => {
      return _user = user;
    });
  });
  after(() => {
    return _user.deactivate().then(() => _user.delete());
  });
  it('should allow me to update a user', () => {
    _user.profile.nickName = 'rob';
    const modified = JSON.parse(JSON.stringify(_user));
    delete modified.lastUpdated;
    return _user.update().then(user => {
      const result = JSON.parse(JSON.stringify(user));
      delete result.lastUpdated;
      assert.deepEqual(result, modified, 'we are returned an updated user object');
      assert(user.lastUpdated > _user.lastUpdated, 'lastUpdated has increased');
    });
  });
});

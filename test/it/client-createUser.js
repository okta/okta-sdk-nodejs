const assert = require('chai').assert;
const utils = require('../utils');
const okta = require('../../');
const models = require('../../src/models');

const client = new okta.Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.createUser()', () => {
  let _user;
  after(() => {
    return _user.deactivate().then(() => _user.delete());
  });
  it('should allow me to create a user', () => {
    const newUser = utils.userWithPassword();
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

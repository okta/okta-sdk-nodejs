const assert = require('chai').assert;
const utils = require('../utils');
const okta = require('../../');
const models = require('../../src/models');

const client = new okta.Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN
});


describe('client.getUser()', () => {
  let _user;
  before(() => {
    return client.createUser(utils.userWithPassword()).then(user => _user =  user);
  });
  after(() => {
    return _user.deactivate().then(() => _user.delete());
  });

  it('should return User models by id', () => {
    return client.getUser(_user.id).then(user => {
      assert.instanceOf(user, models.User);
    });
  });

  it('should return User models by email', () => {
    return client.getUser(_user.profile.email).then(user => {
      assert.instanceOf(user, models.User);
    });
  });
});

const util = require('../shared/util.js');
const assert = require('chai').assert;
const models = require('../../src/models');

const client = util.getClient();

describe('client.createUser()', () => {
  let createdUser;

  it('should create a user without credentials', () => {
    const newUser = util.getFakeUser();

    const queryParameters = { activate : 'false' };
    return client.createUser(newUser, queryParameters).then((user) => {
      createdUser = user;
      util.assertUser(newUser, user);
    });
  });

  it('should activate and set the password', () => {
    const sendEmail = {sendEmail : 'false'};
    return createdUser.activate(sendEmail).then(() => {
      const credentials = {
        'credentials': {
          'password' : { 'value': 'Abcd1234' }
        }
      };

      return client.updateUser(createdUser.id, credentials).then((user) => {
        util.assertUser(createdUser, user);
        util.authenticateUser(user.profile.login, 'Abcd1234').then((response) => {
          assert.equal(response.status, 'SUCCESS');
        });
      });
    });
  });

  it('should get the user by user login', () => {
    return client.getUser(createdUser.profile.login).then((user) => {
      util.assertUser(createdUser, user);
    });
  });

  it('should list all users and find the user created', () => {
    let foundUser = false;
    return client.listUsers().each(user => {
      assert.instanceOf(user, models.User);
      if (user.profile.login === createdUser.profile.login) {
        foundUser = true;
      }
    }).then(() => {
      assert.equal(foundUser, true);
    });
  });

  it('should get forgot password link', () => {
    const sendEmail = {sendEmail : 'false'};
    return createdUser.forgotPassword(sendEmail).then((link) => {
      assert.isNotNull(link.resetPasswordUrl);
    });
  });

  it('should deactivate and delete the user', () => {
    return createdUser.deactivate().then(() => {
      return client.deactivateOrDeleteUser(createdUser.id);
    });
  });
});

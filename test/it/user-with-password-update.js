const assert = require('chai').assert;
const models = require('../../src/models');
const utils = require('../utils');

const client = utils.getClient();

describe('User API tests for user with password credentials', () => {
  let createdUser;

  it('should create a user with password', () => {
    const password = 'Abcd1234';
    const newUser = utils.getFakeUser(password);

    const queryParameters = { activate : 'false' };
    return client.createUser(newUser, queryParameters).then(user => {
      createdUser = user;
      utils.assertUser(newUser, user);
    });
  });

  it('should activate and have user in list of active users', () => {
    const sendEmail = {sendEmail : 'false'};
    return createdUser.activate(sendEmail).then(() => {
      let foundUser = false;

      const queryParameters = { filter : 'status eq \"ACTIVE\"' };
      return client.listUsers(queryParameters).each(user => {
        assert.instanceOf(user, models.User);
        if (user.profile.login === createdUser.profile.login) {
          foundUser = true;
        }
      }).then(() => {
        assert.equal(foundUser, true);
      });
    });
  });

  it('should change recovery question', () => {
    const userCredentials = {
      'password': { 'value': 'Abcd1234' },
      'recovery_question': {
        'question': 'How many roads must a man walk down?',
        'answer': 'forty two'
      }
    };

    return client.changeRecoveryQuestion(createdUser.id, userCredentials).then(response => {
      assert.equal(response.provider.type, 'OKTA');
      return utils.authenticateUser(createdUser.profile.login, 'Abcd1234').then(response => {
        assert.equal(response.status, 'SUCCESS');
      });
    });
  });

  it('should update the password', () => {
    const changePasswordCredentials = {
      'oldPassword': { 'value': 'Abcd1234' },
      'newPassword': { 'value': '1234Abcd' }
    };

    return client.changePassword(createdUser.id, changePasswordCredentials).then(response => {
      assert.equal(response.provider.type, 'OKTA');
      return utils.authenticateUser(createdUser.profile.login, '1234Abcd').then(response => {
        assert.equal(response.status, 'SUCCESS');
      });
    });
  });

  it('should deactivate and delete the user', () => {
    return createdUser.deactivate().then(() => {
      return client.deactivateOrDeleteUser(createdUser.id);
    });
  });

});

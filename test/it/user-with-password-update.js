const assert = require('chai').assert;
const models = require('../../src/models');
const util = require('../shared/util.js');

const client = util.getClient();

describe('client.createUser()', () => {
  let createdUser;

  it('should create a user with password & recovery question', () => {
    const password = 'Abcd1234';
    const recoveryQuestion = 'Who is Major player in the cowboy scene?';
    const recoveryAnswer = 'Annie Oakley';

    const newUser = util.getFakeUser(password, recoveryQuestion, recoveryAnswer);

    const queryParameters = { activate : 'false' };
    return client.createUser(newUser, queryParameters).then((user) => {
      createdUser = user;
      util.assertUser(newUser, user);
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

    return client.changeRecoveryQuestion(createdUser.id, userCredentials).then((response) => {
      assert.equal(response.provider.type, 'OKTA');
      return util.authenticateUser(createdUser.profile.login, 'Abcd1234').then((response) => {
        assert.equal(response.status, 'SUCCESS');
      });
    });
  });

  it('should update the password', () => {
    const changePasswordCredentials = {
      'oldPassword': { 'value': 'Abcd1234' },
      'newPassword': { 'value': '1234Abcd' }
    };

    return client.changePassword(createdUser.id, changePasswordCredentials).then((response) => {
      assert.equal(response.provider.type, 'OKTA');
      return util.authenticateUser(createdUser.profile.login, '1234Abcd').then((response) => {
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

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

  it('should get the user by userID', () => {
    return client.getUser(createdUser.id).then((user) => {
      util.assertUser(createdUser, user);
    });
  });

  it('should list all staged users and find the user created', () => {
    let foundUser = false;
    const queryParameters = { filter : 'status eq \"STAGED\"' };
    return client.listUsers(queryParameters).each(user => {
      assert.instanceOf(user, models.User);
      if (user.profile.login === createdUser.profile.login) {
        foundUser = true;
      }
    }).then(() => {
      assert.equal(foundUser, true);
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

  it('should update the user password through recovery question', () => {
    const userCredentials = {
      'password': { 'value': 'Abcd!234' },
      'recovery_question': { 'answer': 'Annie Oakley' }
    };

    return client.forgotPasswordWithRecoveryAnswer(createdUser.id, userCredentials).then(() => {
      return util.authenticateUser(createdUser.profile.login, 'Abcd!234').then((response) => {
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

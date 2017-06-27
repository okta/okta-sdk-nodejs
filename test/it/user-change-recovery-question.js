const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-change-recovery-question`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should change users recovery question', async () => {
    // 1. Create a user with password & recovery question
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'Change-Recovery-Question',
        email: 'john-change-recovery-question@example.com',
        login: 'john-change-recovery-question@example.com'
      },
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    let queryParameters = { activate : 'true' };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Change the recovery question
    let userCredentials = {
      password: { value: 'Abcd1234' },
      recovery_question: {
        question: 'How many roads must a man walk down?',
        answer: 'forty two'
      }
    };

    let response = await client.changeRecoveryQuestion(createdUser.id, userCredentials);
    expect(response.provider.type).to.equal('OKTA');
    expect(response.recovery_question.question).to.equal('How many roads must a man walk down?');

    // 3. Update the user password through updated recovery question
    userCredentials = {
      password: { value: '1234Abcd' },
      recovery_question: { answer: 'forty two' }
    };

    // Need to wait 1 second here as that is the minimum time resolution of the 'passwordChanged' field
    await utils.delay(1000);
    await createdUser.forgotPassword(userCredentials);

    // 4. Verify that password was updated
    const updatedUser = await client.getUser(createdUser.id);
    expect(updatedUser.passwordChanged).to.be.gt(createdUser.passwordChanged);

    // 5. Delete the user
    await utils.cleanup(client, createdUser);
  });
});

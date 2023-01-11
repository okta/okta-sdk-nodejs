import { expect } from 'chai';
import utils = require('../utils');
import { Client, DefaultRequestExecutor, UserCredentials } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-change-recovery-question`;
}

const client = new Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should change users recovery question', async () => {
    // 1. Create a user with password & recovery question
    const newUser = {
      profile: utils.getMockProfile('user-change-recovery-question'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    const queryParameters = { activate : true };
    const createdUser = await client.userApi.createUser({body: newUser, ...queryParameters});
    utils.validateUser(createdUser, newUser);

    // 2. Change the recovery question
    let userCredentials: UserCredentials = {
      password: { value: 'Abcd1234#@' },
      recovery_question: {
        question: 'How many roads must a man walk down?',
        answer: 'forty two'
      }
    };

    const response = await client.userApi.changeRecoveryQuestion({
      userId: createdUser.id, 
      userCredentials
    });
    expect(response.provider.type).to.equal('OKTA');
    expect(response.recovery_question.question).to.equal('How many roads must a man walk down?');

    // 3. Update the user password through updated recovery question
    userCredentials = {
      password: { value: '1234Abcd' },
      recovery_question: { question: 'How many engineers it takes to...', answer: 'forty two' }
    };

    // Need to wait 1 second here as that is the minimum time resolution of the 'passwordChanged' field
    await utils.delay(1000);
    await client.userApi.forgotPasswordSetNewPassword({
      userId: createdUser.id, 
      userCredentials
    });

    // 4. Verify that password was updated
    const updatedUser = await client.userApi.getUser({
      userId: createdUser.id
    });
    expect(new Date(updatedUser.passwordChanged)).to.be.gt(new Date(createdUser.passwordChanged));

    // 5. Delete the user
    await utils.cleanup(client, createdUser);
  });
});

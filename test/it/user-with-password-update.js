const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/scenario/user-with-password-update`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should implement CRUD operations on user with password credentials', async () => {
    // 1. Create a user with password & recovery question
    const password = 'Abcd1234';
    const newUser = utils.getFakeUser(password);

    let queryParameters = { activate : 'false' };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Activate the user
    const sendEmail = {sendEmail: 'false'};
    await createdUser.activate(sendEmail);

    // 3. Change the recovery question
    let userCredentials = {
      password: { value: 'Abcd1234' },
      recovery_question: {
        question: 'How many roads must a man walk down?',
        answer: 'forty two'
      }
    };

    let response = await client.changeRecoveryQuestion(createdUser.id, userCredentials);
    expect(response.provider.type).to.equal('OKTA');

    // 4. Update the user password through updated recovery question
    userCredentials = {
      password: { value: 'Abcd!234' },
      recovery_question: { answer: 'forty two' }
    };

    await client.forgotPasswordWithRecoveryAnswer(createdUser.id, userCredentials);
    response = await utils.authenticateUser(createdUser.profile.login, 'Abcd!234', client);
    expect(response.status).to.equal('SUCCESS');

    // 5. Update the password without recovery question
    const changePasswordCredentials = {
      oldPassword: { value: 'Abcd!234' },
      newPassword: { value: '1234Abcd' }
    };

    response = await createdUser.changePassword(changePasswordCredentials);
    expect(response.provider.type).to.equal('OKTA');

    response = await utils.authenticateUser(createdUser.profile.login, '1234Abcd', client);
    expect(response.status).to.equal('SUCCESS');

    // 6. Delete the user
    await utils.deleteUser(createdUser);
  });

});

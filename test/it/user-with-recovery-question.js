const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-with-recovery-question`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should implement CRUD operations on user with recovery question credentials', async () => {
    // 1. Create a user with password & recovery question
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'With-Recovery-Question',
        email: 'john-with-recovery-question@example.com',
        login: 'john-with-recovery-question@example.com'
      },
      credentials: {
        recovery_question: {
          question: 'Who is Major player in the cowboy scene?',
          answer: 'Annie Oakley'
        },
        password: { value: 'Abcd1234' }
      }
    };

    let queryParameters = { activate : 'false' };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Get the user by user ID
    const user = await client.getUser(createdUser.id);
    utils.validateUser(user, createdUser);

    // 3. List all staged users and find the user created
    queryParameters = { filter : 'status eq \"STAGED\"' };
    let userPresent = await utils.isUserPresent(client, createdUser, queryParameters);
    expect(userPresent).to.equal(true);

    // 4. Activate the user and verify user in list of active users
    const sendEmail = { sendEmail : 'false' };
    await createdUser.activate(sendEmail);
    queryParameters = { filter: 'status eq \"ACTIVE\"' };
    userPresent = await utils.isUserPresent(client, createdUser, queryParameters);
    expect(userPresent).to.equal(true);

    // 5. Update the user password through recovery question
    const userCredentials = {
      password: { value: 'Abcd!234' },
      recovery_question: { answer: 'Annie Oakley' }
    };

    await createdUser.forgotPassword(userCredentials, sendEmail);
    const response = await utils.authenticateUser(createdUser.profile.login, 'Abcd!234', client);
    expect(response.status).to.equal('SUCCESS');

    // 6. Delete the user
    await utils.deleteUser(createdUser);
  });
});

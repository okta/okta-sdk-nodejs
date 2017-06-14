const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-without-credentials`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should implement CRUD operations on user without credentials', async () => {
    // 1. Create a user without credentails and activate the user
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'No-Credential',
        email: 'john-without-credentials@example.com',
        login: 'john-without-credentials@example.com'
      }
    };

    const queryParameters = { activate : 'false' };

    let createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    const sendEmail = {sendEmail : 'false'};
    await createdUser.activate(sendEmail);

    // 2. Update the user credentials and authenticate the user
    const credentials = {
      credentials: {
        password : { value: 'Abcd1234' }
      }
    };
    const updatedUser = await client.updateUser(createdUser.id, credentials);
    utils.validateUser(updatedUser, createdUser);

    const response = await utils.authenticateUser(updatedUser.profile.login, 'Abcd1234', client);
    expect(response.status).to.equal('SUCCESS');

    // 3. Get the user by user login
    const user = await client.getUser(createdUser.profile.login);
    utils.validateUser(user, createdUser);

    // 4. List all users and find the user created
    const userPresent = await utils.isUserPresent(client, createdUser);
    expect(userPresent).to.equal(true);

    // 5. Get the reset password link
    const link = await createdUser.resetPassword(sendEmail);
    expect(link.resetPasswordUrl).to.not.be.null;

    // 6. Update the user profile
    createdUser.profile.nickName = 'Batman';
    const profileUpdateUser = await createdUser.update();
    expect(profileUpdateUser.lastUpdated).to.be.gt(createdUser.lastUpdated);
    expect(profileUpdateUser.profile.nickName).to.equal('Batman');

    // 7. Delete the user
    await utils.deleteUser(createdUser);
  });

});

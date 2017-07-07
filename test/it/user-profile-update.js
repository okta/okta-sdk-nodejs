const expect = require('chai').expect;
const utils = require('../utils');
const okta = require('../../');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-profile-update`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('User API Tests', () => {
  it('should update the user profile', async () => {
    // 1. Create a user
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'Profile-Update',
        email: 'john-profile-update@example.com',
        login: 'john-profile-update@example.com'
      },
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    let queryParameters = { activate : 'false' };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Update the user profile and verify that profile was updated
    // Need to wait 1 second here as that is the minimum time resolution of the 'lastUpdated' field
    await utils.delay(1000);
    createdUser.profile.nickName = 'Batman';
    const profileUpdateUser = await createdUser.update();
    expect(profileUpdateUser.lastUpdated).to.be.gt(createdUser.lastUpdated);

    const updatedUser = await client.getUser(createdUser.id);
    expect(updatedUser.profile.nickName).to.equal('Batman');

    // 3. Delete the user
    await utils.cleanup(client, createdUser);
  });
});

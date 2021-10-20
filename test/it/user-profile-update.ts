import { expect } from 'chai';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-profile-update`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should update the user profile', async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-profile-update'),
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    const queryParameters = false;
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Update the user profile and verify that profile was updated
    // Need to wait 1 second here as that is the minimum time resolution of the 'lastUpdated' field
    await utils.delay(1000);
    createdUser.profile.nickName = 'Batman';
    // TODO: receiving 403: invalid session
    // const profileUpdateUser = await createdUser.update();
    const profileUpdateUser = await client.updateUser(createdUser.id, createdUser);
    expect(new Date(profileUpdateUser.lastUpdated)).to.be.gt(new Date(createdUser.lastUpdated));

    const updatedUser = await client.getUser(createdUser.id);
    expect(updatedUser.profile.nickName).to.equal('Batman');

    // 3. Delete the user
    await utils.cleanup(client, createdUser);
  });
});

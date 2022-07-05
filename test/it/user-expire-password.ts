import { expect } from 'chai';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-change-password`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User API Tests', () => {
  it('should expire a users password', async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-expire-password'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    const queryParameters = { activate : true };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Expire the user's password
    await client.expirePassword(createdUser.id);

    // 3. Verify that password was expired
    const expiredUser = await client.getUser(createdUser.id);
    expect(expiredUser.status).to.equal('PASSWORD_EXPIRED');

    // 4. Delete the user
    await utils.cleanup(client, createdUser);
  });

  it('should expire a users password and return temp password', async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('user-expire-temp-password'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };

    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);

    const queryParameters = { activate : true };
    const createdUser = await client.createUser(newUser, queryParameters);
    utils.validateUser(createdUser, newUser);

    // 2. Expire the user's password
    const jsonResponse = await client.expirePasswordAndGetTemporaryPassword(createdUser.id);

    // 3. Verify that password was expired
    const expiredUser = await client.getUser(createdUser.id);
    expect(jsonResponse.tempPassword).to.not.be.null;
    expect(expiredUser.status).to.equal('PASSWORD_EXPIRED');

    // 4. Delete the user
    await utils.cleanup(client, createdUser);
  });
});

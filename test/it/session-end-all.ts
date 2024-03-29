import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import { Client, User } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-end-all`;
}

const client = new Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Sessions API', () => {
  let createdUser: User;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('session-end-all'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    createdUser = await client.userApi.createUser({body: newUser});
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  it('should allow me to end all existing sessions for a user', async () => {
    if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
      console.log('Test has been skipped. The endpoint does not support PrivateKey.');
      return;
    }

    // 1 - create session
    const transaction1 = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
    const session1 = await client.sessionApi.createSession({
      createSessionRequest: {
        sessionToken: transaction1.sessionToken
      }
    });

    // 2 - create another session
    const transaction2 = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
    const session2 = await client.sessionApi.createSession({
      createSessionRequest: {
        sessionToken: transaction2.sessionToken
      }
    });

    // 3 - end all user sessions
    await client.userApi.revokeUserSessions({
      userId: createdUser.id
    });

    // 4 - attempt to retrieve session1
    let sess1;
    try {
      sess1 = await client.sessionApi.getSession({
        sessionId: session1.id
      });
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(sess1).to.be.undefined;

    // 5 - attempt to retrieve session2
    let sess2;
    try {
      sess2 = await client.sessionApi.getSession({
        sessionId: session2.id
      });
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(sess2).to.be.undefined;
  });
});

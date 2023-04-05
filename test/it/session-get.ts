import utils = require('../utils');
import {
  Client,
  DefaultRequestExecutor,
  Session,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-get`;
}

const client = new Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Sessions API', () => {
  let createdUser;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('session-get'),
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

  it('should allow me to get an existing session', async () => {
    if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
      console.log('Test has been skipped. The endpoint does not support PrivateKey.');
      return;
    }

    // 1 - create session
    const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
    const session = await client.sessionApi.createSession({
      createSessionRequest: {
        sessionToken: transaction.sessionToken
      }
    });

    // 2 - retrieve session
    const sess = await client.sessionApi.getSession({
      sessionId: session.id
    });

    expect(sess).to.be.instanceOf(Session);
  });
});

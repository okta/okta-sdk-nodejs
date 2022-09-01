import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-end`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Sessions API', () => {
  let createdUser;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('session-end'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    createdUser = await client.createUser(newUser);
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  it('should allow me to end an existing session', async () => {
    if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
      console.log('Test has been skipped. The endpoint does not support PrivateKey.');
      return;
    }

    // 1 - create session
    const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
    const session = await client.createSession({
      sessionToken: transaction.sessionToken
    });

    // 2 - end session
    await client.endSession(session.id);

    // 3 - attempt to retrieve session
    let sess;
    try {
      sess = await client.getSession(session.id);
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(sess).to.be.undefined;
  });
});

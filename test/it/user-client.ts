import { expect } from 'chai';
import { Collection, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import getMockUser = require('./mocks/user-without-credentials');
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-client`;
}

const client: V2Client = utils.getV2Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User client API', () => {
  describe('List clients', () => {
    let user;
    beforeEach(async () => {
      user = await client.createUser(getMockUser(), { activate: false });
    });
    afterEach(async () => {
      await utils.cleanupUser(client, user);
    });

    // Only test on if Collection is returned, since no api has been provided to assign client to user
    it('should return a Collection', async () => {
      const applinks = await client.listUserClients(user.id);
      expect(applinks).to.be.instanceOf(Collection);
    });
  });
});

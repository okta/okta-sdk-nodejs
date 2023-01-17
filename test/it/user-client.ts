import { expect } from 'chai';
import { Collection, DefaultRequestExecutor, Client, User } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import getMockUser = require('./mocks/user-without-credentials');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-client`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User client API', () => {
  describe('List clients', () => {
    let user: User;
    beforeEach(async () => {
      user = await client.userApi.createUser({
        body: getMockUser(),
        activate: false
      });
    });
    afterEach(async () => {
      await utils.cleanupUser(client, user);
    });

    // Only test on if Collection is returned, since no api has been provided to assign client to user
    it('should return a Collection', async () => {
      const applinks = await client.userApi.listUserClients({
        userId: user.id
      });
      expect(applinks).to.be.instanceOf(Collection);
    });
  });
});

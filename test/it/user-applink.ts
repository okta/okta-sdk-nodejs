import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import Collection = require('../../src/collection');
import utils = require('../utils');
import getMockUser = require('./mocks/user-without-credentials');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-applink`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User applink API', () => {
  describe('List applinks', () => {
    let user;
    beforeEach(async () => {
      user = await client.createUser(getMockUser(), { activate: false });
    });
    afterEach(async () => {
      await utils.cleanupUser(client, user);
    });

    // Only test on if Collection is returned, since no api has been provided to assign applink to user
    it('should return a Collection', async () => {
      const applinks = await user.listAppLinks();
      expect(applinks).to.be.instanceOf(Collection);
    });
  });
});

const expect = require('chai').expect;
const faker = require('faker');
const okta = require('../../src');
const Collection = require('../../src/collection');
const utils = require('../utils');
const mockUser = require('./mocks/user-without-credentials.json');
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
      mockUser.profile.login = faker.internet.email();
      mockUser.profile.email = mockUser.profile.login;
      user = await client.createUser(mockUser, { activate: false });
    });
    afterEach(async () => {
      await utils.cleanupUser(client, user);
    });

    // Only test on if Collection be returned, since no api is provided to assign applinks to user
    it('should return a Collection', async () => {
      const applinks = await user.listAppLinks();
      expect(applinks).to.be.instanceOf(Collection);
    });
  });
});

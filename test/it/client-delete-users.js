const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');
const collection = require('../../src/collection');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/list-users`;
}

const client = new okta.Client({
  orgUrl: 'https://okta.trexcloud.com',
  token: 'xxxxxxxxxxxx',
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.listUsers().each()', () => {
  it('should allow me to delete users', async () => {
    await client.listUsers().each(async(user) => {
      if (user.profile.firstName.startsWith('gzfirst')) {
      	console.log(user.profile.firstName);
      	await existingUser.deactivate();
      }

      expect(user).to.be.an.instanceof(models.User);
    });
  });
});

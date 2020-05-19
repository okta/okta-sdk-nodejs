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
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.listUsers().each()', () => {
  it('should allow me to delete users', async () => {
    let queryParameters = { search: 'status eq "DEPROVISIONED"' };
    await client.listUsers( ).each(async(user) => {
      if (user.profile.lastName.includes('okta-sdk-nodejs')) {
        console.log(user.profile.lastName);
        await user.deactivate();
        await user.delete();
      }
    });
  });

    it('should allow me to delete group', async () => {
    await client.listGroups().each(async(group) => {
      if (group.profile.name.includes('sdk-java') || group.profile.name.includes('Get Test') || group.profile.name.includes('Group-')) {
        console.log(group.profile.name);
        // await user.deactivate();
        await client.deleteGroup(group.id);
      }
    });
  });

  it('should allow me to delete apps', async () => {
    await client.listApplications().each(async(app) => {
      if (app.label.includes('Example')) {
        console.log(app.label);
        // await user.deactivate();
        await app.deactivate();
        await app.delete();
      }
    });
  });
});

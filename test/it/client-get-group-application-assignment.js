const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application-group-assignment`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.getApplicationGroupAssignment()', () => {

  it('should allow me to get a group-application assignment', async () => {
    const application = utils.getBookmarkApplication();

    const group = {
      profile: {
        name: 'Application client get group'
      }
    };

    let createdApplication;
    let createdGroup;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, null, group);
      createdApplication = await client.createApplication(application);
      createdGroup = await client.createGroup(group);
      await client.createApplicationGroupAssignment(createdApplication.id, createdGroup.id);
      const assignment = await client.getApplicationGroupAssignment(createdApplication.id, createdGroup.id);
      expect(assignment).to.be.instanceof(models.ApplicationGroupAssignment);
      expect(assignment._links.app.href).to.contain(createdApplication.id);
      expect(assignment._links.group.href).to.contain(createdGroup.id);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
      if (createdGroup) {
        await utils.cleanup(client, null, createdGroup);
      }
    }
  });

});

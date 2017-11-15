const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-application-group-assignments`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.listApplicationGroupAssignments()', () => {

  it('should allow me to list an applications group assignments', async () => {
    const application = {
      name: 'bookmark',
      label: 'my bookmark app',
      signOnMode: 'BOOKMARK',
      settings: {
        app: {
          requestIntegration: false,
          url: 'https://example.com/bookmark.htm'
        }
      }
    };

    const group = {
      profile: {
        name: 'test group'
      }
    };

    let createdApplication;
    let createdGroup;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, null, group);
      createdApplication = await client.createApplication(application);
      createdGroup = await client.createGroup(group);
      await client.updateApplicationGroupAssignment(createdApplication.id, createdGroup.id);
      await client.listApplicationGroupAssignments(createdApplication.id).each(async (assignment) => {
        // there should be only one assignment
        expect(assignment).to.be.instanceof(models.ApplicationGroupAssignment);
        expect(assignment._links.app.href).to.contain(createdApplication.id);
        expect(assignment._links.group.href).to.contain(createdGroup.id);
      });

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

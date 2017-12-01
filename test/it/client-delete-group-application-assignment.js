const expect = require('chai').expect;

const okta = require('../../');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-delete-application-group-assignment`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.deleteApplicationGroupAssignment()', () => {

  it('should allow me to delete a group-application assignment', async () => {
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
      await client.createApplicationGroupAssignment(createdApplication.id, createdGroup.id);
      await client.deleteApplicationGroupAssignment(createdApplication.id, createdGroup.id)
      .then((res) => {
        expect(res.status).to.equal(204);
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

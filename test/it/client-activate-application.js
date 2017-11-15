const expect = require('chai').expect;

const okta = require('../../');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-activate-application`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.activateApplication()', () => {

  it('should allow me to activate an application', async () => {
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

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      await client.deactivateApplication(createdApplication.id);
      let fetchedApplication = await client.getApplication(createdApplication.id);
      expect(fetchedApplication.status).to.equal('INACTIVE');
      await client.activateApplication(createdApplication.id);
      fetchedApplication = await client.getApplication(createdApplication.id);
      expect(fetchedApplication.status).to.equal('ACTIVE');
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });
});

const expect = require('chai').expect;

const okta = require('../../');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-update-application`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.updateApplication()', () => {

  it('should allow me to get an application by ID', async () => {
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
      createdApplication.label = 'updated';
      await createdApplication.update();
      expect(createdApplication.label).to.equal('updated');
      const fetchedApplication = await client.getApplication(createdApplication.id);
      expect(fetchedApplication.label).to.equal('updated');
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

});

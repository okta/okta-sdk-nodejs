const expect = require('chai').expect;

const okta = require('../../');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-activate-deactivate`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Application.activate() / Application.deactivate()', () => {

  it('should allow me to activate/deactivate the application', async () => {
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
      await createdApplication.deactivate()
      .then(response => {
        expect(response.status).to.equal(200);
      });
      await client.getApplication(createdApplication.id)
      .then(application => {
        expect(application.status).to.equal('INACTIVE');
      });
      await createdApplication.activate()
      .then(response => {
        expect(response.status).to.equal(200);
      });
      await client.getApplication(createdApplication.id)
      .then(application => {
        expect(application.status).to.equal('ACTIVE');
      });
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });
});

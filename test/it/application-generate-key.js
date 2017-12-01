const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-generate-key`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Application.generateApplicationKey()', () => {

  it('should allow me to generate keys for an application', async () => {
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
      const applicationKey = await createdApplication.generateApplicationKey({
        validityYears: 2
      });
      expect(applicationKey).to.be.instanceof(models.JsonWebKey);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });
});

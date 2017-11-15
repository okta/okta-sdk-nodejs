const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-get-application-key`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.getApplicationKey()', () => {

  it('should allow me to get an application key for an application', async () => {
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
      const applicationKeys = await client.listApplicationKeys(createdApplication.id);
      await applicationKeys.each(async (key) => {
        const fetchedKey = await client.getApplicationKey(createdApplication.id, key.kid);
        expect(fetchedKey).to.be.instanceof(models.JsonWebKey);
        expect(fetchedKey.kid).to.equal(key.kid);
      });
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });
});

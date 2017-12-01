const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-clone-key`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Application.cloneApplicationKey()', () => {

  it('should allow me to clone a key from one app to another app', async () => {
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

    const application2 = {
      name: 'bookmark',
      label: 'my bookmark app 2',
      signOnMode: 'BOOKMARK',
      settings: {
        app: {
          requestIntegration: false,
          url: 'https://example.com/bookmark.htm'
        }
      }
    };

    let createdApplication;
    let createdApplication2;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.removeAppByLabel(client, application2.label);
      createdApplication = await client.createApplication(application);
      createdApplication2 = await client.createApplication(application2);
      const generatedKey = await createdApplication.generateApplicationKey({
        validityYears: 2
      });

      const clonedKey = await createdApplication.cloneApplicationKey(generatedKey.kid, {
        targetAid: createdApplication2.id
      });
      expect(clonedKey).to.be.instanceof(models.JsonWebKey);
      expect(clonedKey.kid).to.equal(generatedKey.kid);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
      if (createdApplication2) {
        await createdApplication2.deactivate();
        await createdApplication2.delete();
      }
    }
  });
});

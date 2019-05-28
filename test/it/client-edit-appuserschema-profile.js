const expect = require('chai').expect;

const okta = require('../../');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-edit-appuserschema-profile`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.editAppUserSchemaProfile()', function () {

  it('should allow me to edit an application user schema profile', async () => {
    const application = utils.getOauth2ClientApp();
    const newPropsDefinition = {
      definitions: {
        custom: {
          id: '#custom',
          type: 'object',
          properties: {
            twitterUserName: {
              title: 'Twitter username',
              description: 'User\'s username for twitter.com',
              type: 'string',
              scope: 'NONE',
              minLength: 1,
              maxLength: 20
            }
          }
        }
      }
    };
    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      const fetchedAppUserSchema = await client.getAppUserSchema(createdApplication.id);
      expect(fetchedAppUserSchema.definitions.custom.properties)
        .not.to.include.keys('twitterUserName');
      await client.editAppUserSchemaProfile(createdApplication.id, newPropsDefinition)
        .then(appUserSchema => {
          expect(appUserSchema.definitions.custom.properties)
            .to.deep.equal(newPropsDefinition.definitions.custom.properties);
        });
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });
});

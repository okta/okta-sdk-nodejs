const expect = require('chai').expect;

const okta = require('../../');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-get-user`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Application.getApplicationUser()', () => {

  it('should allow me to get a user that is assigned to the application', async () => {
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

    const user = {
      profile: {
        firstName: 'John',
        lastName: 'Activate',
        email: 'john-activate@example.com',
        login: 'john-activate@example.com'
      },
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };

    let createdApplication;
    let createdUser;
    let createdAppUser;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, user);
      createdApplication = await client.createApplication(application);
      createdUser = await client.createUser(user);
      createdAppUser = await createdApplication.assignUserToApplication({
        id: createdUser.id
      });
      await createdApplication.getApplicationUser(createdAppUser.id)
      .then(appUser => {
        expect(appUser.id).to.equal(createdAppUser.id);
      });
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
      if (createdUser) {
        await utils.cleanup(client, createdUser);
      }
      if (createdAppUser) {
        await utils.cleanup(client, createdAppUser);
      }
    }
  });
});

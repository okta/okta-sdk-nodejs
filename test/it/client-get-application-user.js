const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-list-users`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.getApplicationUser()', () => {

  it('should allow me to get a user that is assigned to an application', async () => {
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
      createdAppUser = await client.assignUserToApplication(createdApplication.id, {
        id: createdUser.id
      });
      const fetchedAppUser = await client.getApplicationUser(createdApplication.id, createdAppUser.id);
      expect(fetchedAppUser).to.be.instanceof(models.AppUser);
      expect(fetchedAppUser.id).to.equal(createdAppUser.id);
      expect(fetchedAppUser._links.user.href).to.contain(createdUser.id);
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


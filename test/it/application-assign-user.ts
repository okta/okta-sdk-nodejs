import { expect } from 'chai';
import utils = require('../utils');
import { BookmarkApplication, Application, Client, DefaultRequestExecutor, User, AppUser } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-assign-user`;
}

const client = new Client({
  scopes: ['okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application.assignUserToApplication()', () => {

  it('should allow me to assign a user to the application', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('application-assign-user'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };

    let createdApplication: Application;
    let createdUser: User;
    let createdAppUser: AppUser;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, user);
      createdApplication = await client.applicationApi.createApplication({ application });
      expect(createdApplication).to.be.instanceOf(BookmarkApplication);
      createdUser = await client.userApi.createUser({body: user});
      createdAppUser = await client.applicationApi.assignUserToApplication({
        appId: createdApplication.id,
        appUser: {
          id: createdUser.id
        }
      });
      expect(createdAppUser._links.user.href).to.contain(createdUser.id);
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({ appId: createdApplication.id });
        await client.applicationApi.deleteApplication({ appId: createdApplication.id });
      }
      if (createdUser) {
        await utils.cleanup(client, createdUser);
      }
      if (createdAppUser) {
        await utils.cleanup(client, createdAppUser as User);
      }
    }
  });
});

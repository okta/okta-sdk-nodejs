import { expect } from 'chai';

import utils = require('../utils');
import { ApiClient, DefaultRequestExecutor, User, AppUser, Application } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-get-user`;
}

const client = new ApiClient({
  scopes: ['okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application.getApplicationUser()', () => {

  it('should allow me to get a user that is assigned to the application', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('application-get-user'),
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
      createdApplication = await client.applicationApi.createApplication({application});
      createdUser = await client.userApi.createUser({body: user});
      createdAppUser = await client.applicationApi.assignUserToApplication({
        appId: createdApplication.id,
        appUser: {
          id: createdUser.id
        }
      });
      const appUser = await client.applicationApi.getApplicationUser({
        appId: createdApplication.id,
        userId: createdAppUser.id
      });
      expect(appUser.id).to.equal(createdAppUser.id);
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
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

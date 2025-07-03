import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';

import utils = require('../utils');
import { Application, AppUser, ApiClient, User } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-delete-user`;
}

const client = new ApiClient({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

// no deleteApplicationUser method in v3
xdescribe('client.deleteApplicationUser()', () => {

  it('should allow me to remove a user from a application', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('client-delete-application-user'),
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
      const resp = await client.userApi.deleteUser({userId: createdAppUser.id});
      expect(resp).to.be.undefined;
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

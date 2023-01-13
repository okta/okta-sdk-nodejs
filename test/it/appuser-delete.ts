import { expect } from 'chai';

import utils = require('../utils');
import { Application, Client, DefaultRequestExecutor, User, AppUser } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-delete-user`;
}

const client = new Client({
  scopes: ['okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

// no deleteApplicationUser method in v3
xdescribe('AppUser.delete()', () => {

  it('should allow me to delete the app user', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('appuser-delete'),
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
      const response = await client.userApi.deleteUser({userId: createdAppUser.id});
      expect(response).to.be.undefined;
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

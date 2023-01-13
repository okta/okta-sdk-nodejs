import { expect } from 'chai';

import {
  Application,
  AppUser,
  Client,
  DefaultRequestExecutor,
  User,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-list-users`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.getApplicationUser()', () => {

  it('should allow me to get a user that is assigned to an application', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('client-get-application-user'),
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
      const fetchedAppUser = await client.applicationApi.getApplicationUser({appId: createdApplication.id, userId: createdAppUser.id});
      expect(fetchedAppUser).to.be.instanceof(AppUser);
      expect(fetchedAppUser.id).to.equal(createdAppUser.id);
      const userLink = fetchedAppUser._links.user as Record<string, string>;
      expect(userLink.href).to.contain(createdUser.id);
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

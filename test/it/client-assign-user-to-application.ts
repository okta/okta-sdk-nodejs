import { expect } from 'chai';

import {
  AppUser,
  Client,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-assign-user`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.assignUserToApplication()', () => {

  it('should allow me to assign a user to a application', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('client-assign-user-to-application'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };

    let createdApplication;
    let createdUser;
    let createdAppUser;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, user);
      createdApplication = await client.applicationApi.createApplication({application});
      createdUser = await client.userApi.createUser({body: user});
      createdAppUser = await client.applicationApi.assignUserToApplication({
        appId: createdApplication.id, 
        appUser: createdUser
      });
      expect(createdAppUser).to.be.instanceof(AppUser);
      expect(createdAppUser._links.user.href).to.contain(createdUser.id);
    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
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

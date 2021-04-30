import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';

import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-assign-user`;
}

const client = new okta.Client({
  scopes: ['okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Application.assignUserToApplication()', () => {

  it('should allow me to assign a user to the application', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('application-assign-user'),
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
      expect(createdAppUser._links.user.href).to.contain(createdUser.id);
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

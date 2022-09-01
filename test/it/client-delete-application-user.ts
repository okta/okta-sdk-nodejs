import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';

import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-delete-user`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('client.deleteApplicationUser()', () => {

  it('should allow me to remove a user from a application', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('client-delete-application-user'),
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
      createdApplication = await client.createApplication(application);
      createdUser = await client.createUser(user);
      createdAppUser = await client.assignUserToApplication(createdApplication.id, {
        id: createdUser.id
      });
      const resp = await client.deleteApplicationUser(createdApplication.id, createdAppUser.id);
      expect(resp).to.be.undefined;
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
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

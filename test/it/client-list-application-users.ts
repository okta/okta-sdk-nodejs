import { expect } from 'chai';
import { spy } from 'sinon';

import {
  AppUser,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-list-users`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.listApplicationUsers()', () => {

  it('should allow me to list users that are assigned to an application', async () => {
    const application = utils.getBookmarkApplication();

    const user = {
      profile: utils.getMockProfile('client-list-application-users'),
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
      await (await client.listApplicationUsers(createdApplication.id)).each(async (appUser) => {
        expect(appUser).to.be.instanceof(AppUser);
        const userLink = appUser._links.user as Record<string, string>;
        expect(userLink.href).to.contain(createdUser.id);
      });
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

describe('client.listApplicationUsers({ })', () => {
  let app;
  const users = [];
  const appUsers = [];

  const createUser = async (name) => {
    const newUser = {
      profile: {
        ...utils.getMockProfile(name),
        lastName: 'okta-sdk-nodejs-app-users-filter',
      },
      credentials: {
        password: {value: 'Abcd1234#@'}
      }
    };
    await utils.cleanup(client, newUser);
    const createdUser = await client.createUser(newUser);
    return createdUser;
  };

  before(async () => {
    const application = utils.getBookmarkApplication();
    await utils.removeAppByLabel(client, application.label);
    app = await client.createApplication(application);

    users.push(await createUser('client-list-app-users-unassigned'));
    users.push(await createUser('client-list-app-users'));
    users.push(await createUser('client-list-app-users-filtered-1'));
    users.push(await createUser('client-list-app-users-filtered-2'));

    for (const user of users.slice(1)) {
      const appUser = await client.assignUserToApplication(app.id, {
        id: user.id
      });
      appUsers.push(appUser);
    }

    // The search indexing is not instant, so give it some time to settle
    await utils.delay(5000);
  });

  after(async () => {
    for (const appUser of appUsers) {
      await client.deleteApplicationUser(app.id, appUser.id);
    }

    await client.deactivateApplication(app.id);
    await client.deleteApplication(app.id);

    await utils.cleanup(client, users);
  });

  it('should paginate results', async () => {
    const listIds = new Set();
    const collection = await client.listApplicationUsers(app.id, {
      limit: 2
    });
    const pageSpy = spy(collection, 'getNextPage');
    await collection.each(async appUser => {
      expect(listIds.has(appUser.id)).to.be.false;
      listIds.add(appUser.id);
    });
    expect(listIds.size).to.equal(3);
    expect(pageSpy.getCalls().length).to.equal(2);
  });

  it('should search users with q and paginate results', async () => {
    const queryParameters = {
      q: 'client-list-app-users-filtered',
      limit: 1
    };
    const collection = await client.listApplicationUsers(app.id, queryParameters);
    const pageSpy = spy(collection, 'getNextPage');
    const filteredIds = new Set();
    await collection.each(appUser => {
      expect(appUser).to.be.an.instanceof(AppUser);
      filteredIds.add(appUser.id);
    });
    expect(filteredIds.size).to.equal(2);
    expect(pageSpy.getCalls().length).to.equal(2);
  });
});

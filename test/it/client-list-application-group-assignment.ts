import { expect } from 'chai';
import { spy } from 'sinon';
import faker = require('@faker-js/faker');

import {
  Application,
  ApplicationGroupAssignment,
  ApiClient,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-application-group-assignments`;
}

const client = new ApiClient({
  scopes: ['okta.clients.manage', 'okta.apps.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.listApplicationGroupAssignments()', () => {

  it('should allow me to list an applications group assignments', async () => {
    const application = utils.getBookmarkApplication();

    const group = {
      profile: {
        name: `node-sdk: Application list group ${faker.random.word()}`.substring(0, 49)
      }
    };

    let createdApplication;
    let createdGroup;

    try {
      await utils.removeAppByLabel(client, application.label);
      await utils.cleanup(client, null, group);
      createdApplication = await client.applicationApi.createApplication({application});
      createdGroup = await client.groupApi.createGroup({group});
      await client.applicationApi.assignGroupToApplication({appId: createdApplication.id, groupId: createdGroup.id, applicationGroupAssignment: {}});
      await (await client.applicationApi.listApplicationGroupAssignments({appId: createdApplication.id})).each(async (assignment) => {
        // there should be only one assignment
        expect(assignment).to.be.instanceof(ApplicationGroupAssignment);
        const appLink = assignment._links.app;
        const groupLink = assignment._links.group;
        expect(appLink.href).to.contain(createdApplication.id);
        expect(groupLink.href).to.contain(createdGroup.id);
      });

    } finally {
      if (createdApplication) {
        await client.applicationApi.deactivateApplication({appId: createdApplication.id});
        await client.applicationApi.deleteApplication({appId: createdApplication.id});
      }
      if (createdGroup) {
        await utils.cleanup(client, null, createdGroup);
      }
    }
  });

});

describe('client.listApplicationGroupAssignments({ })', () => {
  let app: Application;
  const groups = [];

  const createGroup = async (name) => {
    const newGroup = {
      profile: {
        name
      }
    };
    const createdGroup = await client.groupApi.createGroup({group: newGroup});
    return createdGroup;
  };

  before(async () => {
    const application = utils.getBookmarkApplication();
    await utils.removeAppByLabel(client, application.label);
    app = await client.applicationApi.createApplication({application});

    groups.push(await createGroup('node-sdk: client-list-app-groups-unassigned'));
    groups.push(await createGroup('node-sdk: client-list-app-groups'));
    groups.push(await createGroup('node-sdk: client-list-app-groups-filtered-1'));
    groups.push(await createGroup('node-sdk: client-list-app-groups-filtered-2'));

    for (const group of groups.slice(1)) {
      await client.applicationApi.assignGroupToApplication({appId: app.id, groupId: group.id, applicationGroupAssignment: {}});
    }
  });

  after(async () => {
    if (app?.id) {
      await client.applicationApi.deactivateApplication({ appId: app.id });
      await client.applicationApi.deleteApplication({ appId: app.id });
    }

    await utils.cleanup(client, null, groups);
  });

  it('should paginate results', async () => {
    const listIds = new Set();
    const collection = await client.applicationApi.listApplicationGroupAssignments({appId: app.id,
      limit: 2
    });
    const pageSpy = spy(collection, 'getNextPage');
    await collection.each(async assignment => {
      expect(listIds.has(assignment.id)).to.be.false;
      listIds.add(assignment.id);
    });
    expect(listIds.size).to.equal(3);
    expect(pageSpy.getCalls().length).to.equal(2);
  });

  it('should search groups with q and paginate results', async () => {
    const queryParameters = {
      q: 'node-sdk: client-list-app-groups-filtered',
      limit: 1
    };
    const collection = await client.applicationApi.listApplicationGroupAssignments({appId: app.id, ...queryParameters});
    const pageSpy = spy(collection, 'getNextPage');
    const filteredIds = new Set();
    await collection.each(assignment => {
      filteredIds.add(assignment.id);
    });
    expect(filteredIds.size).to.equal(2);
    expect(pageSpy.getCalls().length).to.equal(2);
  });
});

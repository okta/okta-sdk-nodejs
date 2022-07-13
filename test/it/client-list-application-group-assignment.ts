import { expect } from 'chai';
import faker = require('@faker-js/faker');

import {
  Client,
  DefaultRequestExecutor,
  v3 } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-application-group-assignments`;
}

const client = new Client({
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
      createdApplication = await client.createApplication(application);
      createdGroup = await client.createGroup(group);
      await client.createApplicationGroupAssignment(createdApplication.id, createdGroup.id, {});
      await (await client.listApplicationGroupAssignments(createdApplication.id)).each(async (assignment) => {
        // there should be only one assignment
        expect(assignment).to.be.instanceof(v3.ApplicationGroupAssignment);
        const appLink = assignment._links.app as Record<string, string>;
        const groupLink = assignment._links.group as Record<string, string>;
        expect(appLink.href).to.contain(createdApplication.id);
        expect(groupLink.href).to.contain(createdGroup.id);
      });

    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
      if (createdGroup) {
        await utils.cleanup(client, null, createdGroup);
      }
    }
  });

});

describe('client.listApplicationGroupAssignments({ })', () => {
  let app;
  const groups = [];

  const createGroup = async (name) => {
    const newGroup = {
      profile: {
        name
      }
    };
    const createdGroup = await client.createGroup(newGroup);
    return createdGroup;
  };

  before(async () => {
    const application = utils.getBookmarkApplication();
    await utils.removeAppByLabel(client, application.label);
    app = await client.createApplication(application);

    groups.push(await createGroup('client-list-app-groups-unassigned'));
    groups.push(await createGroup('client-list-app-groups'));
    groups.push(await createGroup('client-list-app-groups-filtered-1'));
    groups.push(await createGroup('client-list-app-groups-filtered-2'));

    for (const group of groups.slice(1)) {
      await client.createApplicationGroupAssignment(app.id, group.id, {});
    }
  });

  after(async () => {
    await client.deactivateApplication(app.id);
    await client.deleteApplication(app.id);

    await utils.cleanup(client, null, groups);
  });

  it('should paginate results', async () => {
    const listIds = new Set();
    const collection = await client.listApplicationGroupAssignments(app.id, { limit: 2 });
    await collection.each(async assignment => {
      expect(listIds.has(assignment.id)).to.be.false;
      listIds.add(assignment.id);
    });
    expect(listIds.size).to.equal(3);
  });

  it('should search groups with q and paginate results', async () => {
    const queryParameters = {
      q: 'client-list-app-groups-filtered',
      limit: 1
    };
    const filteredIds = new Set();
    await (await client.listApplicationGroupAssignments(app.id, queryParameters)).each(assignment => {
      filteredIds.add(assignment.id);
    });
    expect(filteredIds.size).to.equal(2);
  });
});

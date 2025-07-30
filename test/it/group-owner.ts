import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  Group,
  GroupOwner,
  User,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import utils = require('../utils');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.groups.read',
    'okta.groups.manage',
    'okta.users.read',
    'okta.users.manage',
  ]
});

const groupData = {
  profile: {
    name: `node-sdk: Group Owner ${faker.random.word()}`.substring(0, 49)
  }
};

const ownerUserData = {
  profile: utils.getMockProfile('group-owner'),
  credentials: {
    password: { value: 'Abcd1234#@' }
  }
};

describe('GroupOwnerApi', () => {
  let group: Group;
  let ownerUser: User;

  before(async () => {
    group = await client.groupApi.createGroup({
      group: groupData
    });
    ownerUser = await client.userApi.createUser({
      body: ownerUserData,
      activate: true
    });
  });

  after(async () => {
    if (ownerUser) {
      await utils.deleteUser(ownerUser, client);
    }
    if (group) {
      await client.groupApi.deleteGroup({
        groupId: group.id,
      });
    }
  });

  it('Assign group owner, list group owners, delete group owner', async () => {
    // assign
    const assignedOwner = await client.groupApi.assignGroupOwner({
      groupId: group.id,
      GroupOwner: {
        id: ownerUser.id,
        type: 'USER'
      }
    });
    expect(assignedOwner).to.be.instanceOf(GroupOwner);

    // list
    let ownerCollection = await client.groupApi.listGroupOwners({
      groupId: group.id
    });
    let owners: GroupOwner[] = [];
    await ownerCollection.each(owner => owners.push(owner));
    expect(owners.length).to.equal(1);
    expect(owners[0].type).to.equal('USER');
    expect(owners[0].id).to.equal(ownerUser.id);

    // delete
    await client.groupApi.deleteGroupOwner({
      groupId: group.id,
      ownerId: ownerUser.id,
    });

    // list
    ownerCollection = await client.groupApi.listGroupOwners({
      groupId: group.id
    });
    owners = [];
    await ownerCollection.each(owner => owners.push(owner));
    expect(owners.length).to.equal(0);
  });
});

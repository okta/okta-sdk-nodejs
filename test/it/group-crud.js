const assert = require('chai').assert;
const models = require('../../src/models');
const faker = require('faker');
const utils = require('../utils');

const client = utils.getClient();

describe('Group CRUD Operations tests', () => {
  let createdGroup;

  after(() => {
    return client.deleteGroup(createdGroup.id);
  });

  it('should create a group', () => {
    const newGroup = {
      profile: {
        name: 'Mocha Test Group' + faker.random.uuid()
      }
    };

    return client.createGroup(newGroup).then((group) => {
      createdGroup = group;
      utils.assertGroup(createdGroup, newGroup);
    });

  });

  it('should get the group by group ID', () => {
    return client.getGroup(createdGroup.id).then(group => {
      utils.assertGroup(group, createdGroup);
    });
  });

  it('should list all groups and find the group created', () => {
    let foundGroup = false;
    return client.listGroups().each(group => {
      assert.instanceOf(group, models.UserGroup);
      if (group.profile.name === createdGroup.profile.name) {
        foundGroup = true;
        return false;
      }
    }).then(() => assert.equal(foundGroup, true));
  });

  it('should search the group by name', () => {
    let foundGroup = false;
    const queryParameters = { q : 'Mocha' };
    return client.listGroups(queryParameters).each(group => {
      assert.instanceOf(group, models.UserGroup);
      if (group.profile.name === createdGroup.profile.name) {
        foundGroup = true;
        return false;
      }
    }).then(() => assert.equal(foundGroup, true));
  });

  it('should list the group by type', () => {
    let foundGroup = false;
    const queryParameters = { filter : 'type eq \"OKTA_GROUP\"', limit : '200' };
    return client.listGroups(queryParameters).each(group => {
      assert.instanceOf(group, models.UserGroup);
      if (group.profile.name === createdGroup.profile.name) {
        foundGroup = true;
        return false;
      }
    }).then(() => assert.equal(foundGroup, true));
  });

  it('should update the group name and description', () => {
    const updateGroup = {
      profile: {
        name: 'Mocha CRUD Test Group - Updated',
        description: 'Description updated',
      }
    };

    return client.updateGroup(createdGroup.id, updateGroup).then(group => {
      utils.assertGroup(group, updateGroup);
    });
  });

});

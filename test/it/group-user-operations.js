const assert = require('chai').assert;
const faker = require('faker');
const utils = require('../utils');

const client = utils.getClient();

describe('Group Member Operations tests', () => {
  let createdUser;
  let createdGroup;

  before(() => {
    const password = 'Abcd1234';
    const newUser = utils.getFakeUser(password);
    const newGroup = {
      profile: {
        name: 'Mocha Test Group' + faker.random.uuid()
      }
    };

    return Promise.all([
      client.createGroup(newGroup).then((group) => {
        return createdGroup = group;
      }),
      client.createUser(newUser).then((user) => {
        return createdUser = user;
      }),
    ]);
  });

  after(() => {
    return Promise.all([
      client.deleteGroup(createdGroup.id),
      createdUser.deactivate().then(() => createdUser.delete())
    ]);
  });

  it('should add user to the group', () => {
    return createdUser.addToGroup(createdGroup.id).then(() => {
      utils.isUserInGroup(createdUser, createdGroup, true);
    });
  });

  it('should list the users of the group', () => {
    let foundUser = false;
    const groupUsers = createdGroup.listUsers();

    return groupUsers.each(user => {
      if (user.id === createdUser.id) {
        foundUser = true;
        return false;
      }
    }).then(() => {
      assert.equal(foundUser, true);
    });
  });

  it('should remove user from the group', () => {
    return client.removeUserFromGroup(createdGroup.id, createdUser.id).then(() => {
      return utils.isUserInGroup(createdUser, createdGroup, false);
    });
  });

});

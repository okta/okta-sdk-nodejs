const assert = require('chai').assert;
const okta = require('../../');
const models = require('../../src/models');

const client = new okta.Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.createGroup()', () => {
  let _group;
  after(() => {
    return client.deleteGroup(_group.id);
  });
  it('should allow to create a group', () => {
    const newGroup = {
      profile: {
        name: 'Admin Users Group'
      }
    };
    return client.createGroup(newGroup).then((group) => {
      _group = group;
      assert.instanceOf(group, models.Group);
      assert.equal(group.profile.name, group.profile.name);
    });
  });
});

const assert = require('chai').assert;
const okta = require('../../');
const models = require('../../src/models');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL,
  token: process.env.OKTA_APICLIENT_TOKEN
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
      assert.instanceOf(group, models.UserGroup);
      assert.equal(group.profile.name, group.profile.name);
    });
  });
});

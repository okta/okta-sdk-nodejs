const faker = require('faker');

const utils = require('../utils');
const okta = require('../../');

const client = new okta.Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('user.addToGroup(:groupId)', () => {
  let _group, _user;

  before(() => {
    const newGroup = {
      profile: {
        name: 'Test User Group ' + faker.random.uuid()
      }
    };
    const newUser = utils.userWithPassword();
    return Promise.all([
      client.createGroup(newGroup).then((group) => {
        return _group = group;
      }),
      client.createUser(newUser).then((user) => {
        return _user = user;
      }),
    ]);
  });

  after(() => {
    return Promise.all([
      client.deleteGroup(_group.id),
      _user.deactivate().then(() => _user.delete())
    ]);
  });

  it('should allow me to add that user to the group', () => {
    // PUT response has no body to assert, it simply should not fail
    return _user.addToGroup(_group.id);
  });
});

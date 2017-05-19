const faker = require('faker');
const okta = require('../../');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL,
  token: process.env.OKTA_APICLIENT_TOKEN
});

describe('user.addToGroup(:groupId)', () => {
  let _group, _user;

  before(() => {
    const newGroup = {
      profile: {
        name: 'Test User Group ' + faker.random.uuid()
      }
    };
    const email = faker.internet.email(null, null, 'example.com');
    const newUser = {
      'profile': {
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'email': email,
        'login': email
      },
      'credentials': {
        'password' : {
          'value': 'PasswordAbc123'
        }
      }
    };
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

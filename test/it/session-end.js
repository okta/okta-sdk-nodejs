const utils = require('../utils');
const okta = require('../../');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-end`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Sessions API', () => {
  let createdUser;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: utils.getMockProfile('session-end'),
      credentials: {
        password: { value: 'Abcd1234' }
      }
    };
    // Cleanup the user if user exists
    await utils.cleanup(client, newUser);
    createdUser = await client.createUser(newUser);
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  it('should allow me to end an existing session', async () => {
    // 1 - create session
    const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234');
    const session = await client.createSession({
      sessionToken: transaction.sessionToken
    });

    // 2 - end session
    await session.delete();

    // 3 - attempt to retrieve session
    let sess;
    try {
      sess = await client.getSession(session.id);
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(sess).to.be.undefined;
  });
});

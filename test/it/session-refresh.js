const utils = require('../utils');
const okta = require('../../');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-refresh`;
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
      profile: utils.getMockProfile('session-refresh'),
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

  it('should allow me to refresh an existing session', async () => {
    // 1 - create sessionId
    const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234');
    const currentSession = await client.createSession({
      sessionToken: transaction.sessionToken
    });

    await utils.delay(1000);

    // 2 - refresh the session
    const refreshedSession = await currentSession.refresh();

    expect(new Date(refreshedSession.expiresAt).getTime())
      .to.be.above(new Date(currentSession.expiresAt).getTime());
  });
});

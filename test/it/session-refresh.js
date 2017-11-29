const utils = require('../utils');
const okta = require('../../');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-clear`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('Sessions API', () => {
  let createdUser;
  before(async () => {
    // 1. Create a user
    const newUser = {
      profile: {
        firstName: 'John',
        lastName: 'Session',
        email: 'john-session@example.com',
        login: 'john-session@example.com'
      },
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
    const sessionId = await utils.createSessionId(client, 'john-session@example.com', 'Abcd1234');

    const currentSession = await client.getSession(sessionId);

    await utils.delay(1000);

    // 2 - refresh the session
    const refreshedSession = await client.refreshSession(sessionId);

    expect(new Date(refreshedSession.expiresAt).getTime())
      .to.be.above(new Date(currentSession.expiresAt).getTime());
  });
});

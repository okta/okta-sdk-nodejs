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

  it('should allow me to clear an existing session', async () => {
    // 1 - create sessionId
    const sessionId = await utils.createSessionId(client, 'john-session@example.com', 'Abcd1234');

    // 2 - clear sessionId
    await client.clearSession(sessionId);

    // 3 - attempt to retrieve session
    let session;
    try {
      session = await client.getSession(sessionId);
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(session).to.be.undefined;
  });
});

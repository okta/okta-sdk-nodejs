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

  it('should allow me to clear all existing sessions', async () => {
    // 1 - create sessionId
    const sessionId1 = await utils.createSessionId(client, 'john-session@example.com', 'Abcd1234');

    // 2 - create another sessionId
    const sessionId2 = await utils.createSessionId(client, 'john-session@example.com', 'Abcd1234');

    // 3 - clear sessionId
    await client.clearUserSessions(createdUser.id);

    // 4 - attempt to retrieve session1
    let session1;
    try {
      session1 = await client.getSession(sessionId1);
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(session1).to.be.undefined;

    // 5 - attempt to retrieve session2
    let session2;
    try {
      session2 = await client.getSession(sessionId2);
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(session2).to.be.undefined;
  });
});

const faker = require('faker');

const utils = require('../utils');
const okta = require('../../');
const models = require('../../src/models');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-get`;
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
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        login: faker.internet.email()
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

  it('should allow me to get an existing session', async () => {
    // 1 - create session
    const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234');
    const session = await client.createSession({
      sessionToken: transaction.sessionToken
    });

    // 2 - retrieve session
    const sess = await client.getSession(session.id);

    expect(sess).to.be.instanceOf(models.Session);
  });
});

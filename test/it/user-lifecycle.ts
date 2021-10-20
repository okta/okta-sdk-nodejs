import { expect } from 'chai';
import utils = require('../utils');
import * as okta from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-lifecycle`;
}

const client = new okta.Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

const newUser = {
  profile: utils.getMockProfile('mock-user'),
  credentials: {
    password: { value: 'Abcd1234' }
  }
};

describe('User lifecycle API', () => {
  let createdUser;
  beforeEach(async () => {
    await utils.cleanup(client, newUser);
  });
  afterEach(async () => {
    await utils.cleanup(client, createdUser);
  });

  describe('active and deactive', () => {
    beforeEach(async () => {
      createdUser = await client.createUser(newUser, false);
      utils.validateUser(createdUser, newUser);
    });

    it('should activate a user', async () => {
      const sendEmail = { sendEmail : false };
      await client.activateUser(createdUser.id, false);
      // await createdUser.activate(sendEmail);
      const queryParameters = { filter: 'status eq "ACTIVE"' };
      const userPresent = await utils.isUserPresent(client, createdUser, 'status eq "ACTIVE"');
      expect(userPresent).to.equal(true);
    });
  });

  xdescribe('expire password', () => {
    beforeEach(async () => {
      createdUser = await client.createUser(newUser, true);
      utils.validateUser(createdUser, newUser);
    });

    it('should expire a users password', async () => {
      const queryParameters = { tempPassword : true };
      // TODO: receiving 403: Invalid Session
      const response = await client.expirePassword(createdUser.id);
      //const response = await createdUser.expirePassword(queryParameters);
      // @ts-ignore
      expect(response.tempPassword).to.not.be.null;
    });
  });

  xdescribe('suspend and unsuspend', () => {
    beforeEach(async () => {
      createdUser = await client.createUser(newUser, true);
      utils.validateUser(createdUser, newUser);
    });

    it('should suspend/unsuspend a user', async () => {
      await client.suspendUser(createdUser.id);
      // await createdUser.suspend();

      let queryParameters = { filter: 'status eq "SUSPENDED"' };
      let userPresent = await utils.isUserPresent(client, createdUser, 'status eq "SUSPENDED"');
      expect(userPresent).to.equal(true);

      await createdUser.unsuspend();
      queryParameters = { filter: 'status eq "ACTIVE"' };
      userPresent = await utils.isUserPresent(client, createdUser, 'status eq "ACTIVE"');
      expect(userPresent).to.equal(true);
    });
  });

  xdescribe('unlock', () => {
    beforeEach(async () => {
      createdUser = await client.createUser(newUser, true);
      utils.validateUser(createdUser, newUser);
    });

    // As it's not easy to mock lock user, we test on error response to make sure correct endpoint is called.
    it('should return errorCode E0000032 for unlocked user', async () => {
      try {
        await createdUser.unlock();
      } catch (e) {
        expect(e.statusCode).to.be.equal(403);
        expect(e.errorCode).to.be.equal('E0000032');
      }
    });
  });

  xdescribe('reset factors', () => {
    beforeEach(async () => {
      createdUser = await client.createUser(newUser, true);
      utils.validateUser(createdUser, newUser);
    });

    it('should get response with status 200', async () => {
      const response = await client.resetFactors(createdUser.id);
      //const response = await createdUser.resetFactors();
      expect(response.statusCode).to.be.equal(200);
    });
  });

  xdescribe('delete sessions', () => {
    beforeEach(async () => {
      createdUser = await client.createUser(newUser, true);
      utils.validateUser(createdUser, newUser);
    });

    it('should get response with status 204', async () => {
      const response = await client.clearUserSessions(createdUser.id);
      // const response = await createdUser.clearSessions();
      expect(response.statusCode).to.be.equal(204);
    });
  });
});

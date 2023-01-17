import { expect } from 'chai';
import utils = require('../utils');
import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-lifecycle`;
}

const client = new Client({
  scopes: ['okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

const newUser = {
  profile: utils.getMockProfile('mock-user'),
  credentials: {
    password: { value: 'Abcd1234#@' }
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
      createdUser = await client.userApi.createUser({
        body: newUser,
        activate : false
      });
      utils.validateUser(createdUser, newUser);
    });

    it('should activate a user', async () => {
      await client.userApi.activateUser({
        userId: createdUser.id,
        sendEmail: false
      });
      const queryParameters = { filter: 'status eq "ACTIVE"' };
      const userPresent = await utils.isUserPresent(client, createdUser, queryParameters);
      expect(userPresent).to.equal(true);
    });
  });

  describe('expire password', () => {
    beforeEach(async () => {
      createdUser = await client.userApi.createUser({
        body: newUser,
        activate : true
      });
      utils.validateUser(createdUser, newUser);
    });

    it('should expire a users password', async () => {
      // TODO: receiving 403: Invalid Session
      const user = await client.userApi.expirePassword({
        userId: createdUser.id
      });
      expect(user.status).to.equal('PASSWORD_EXPIRED');
    });
  });

  describe('suspend and unsuspend', () => {
    beforeEach(async () => {
      createdUser = await client.userApi.createUser({
        body: newUser,
        activate: true
      });
      utils.validateUser(createdUser, newUser);
    });

    it('should suspend/unsuspend a user', async () => {
      await client.userApi.suspendUser({
        userId: createdUser.id
      });

      let queryParameters = { filter: 'status eq "SUSPENDED"' };
      let userPresent = await utils.isUserPresent(client, createdUser, queryParameters);
      expect(userPresent).to.equal(true);

      await client.userApi.unsuspendUser({
        userId: createdUser.id
      });
      queryParameters = { filter: 'status eq "ACTIVE"' };
      userPresent = await utils.isUserPresent(client, createdUser, queryParameters);
      expect(userPresent).to.equal(true);
    });
  });

  describe('unlock', () => {
    beforeEach(async () => {
      createdUser = await client.userApi.createUser({
        body: newUser,
        activate: true
      });
      utils.validateUser(createdUser, newUser);
    });

    // As it's not easy to mock lock user, we test on error response to make sure correct endpoint is called.
    it('should return errorCode E0000032 for unlocked user', async () => {
      try {
        await client.userApi.unlockUser({
          userId: createdUser.id
        });
      } catch (e) {
        expect(e.status).to.be.equal(403);
        expect(e.errorCode).to.be.equal('E0000032');
      }
    });
  });

  describe('reset factors', () => {
    beforeEach(async () => {
      createdUser = await client.userApi.createUser({
        body: newUser,
        activate: true
      });
      utils.validateUser(createdUser, newUser);
    });

    it('should get response with status 200', async () => {
      const response = await client.userApi.resetFactors({
        userId: createdUser.id
      });
      expect(response).to.be.undefined;
    });
  });

  describe('delete sessions', () => {
    beforeEach(async () => {
      createdUser = await client.userApi.createUser({
        body: newUser,
        activate: true
      });
      utils.validateUser(createdUser, newUser);
    });

    it('should get response with status 204', async () => {
      const response = await client.userApi.revokeUserSessions({
        userId: createdUser.id
      });
      expect(response).to.be.undefined;
    });
  });
});

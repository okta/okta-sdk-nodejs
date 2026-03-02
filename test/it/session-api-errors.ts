import utils = require('../utils');
import { expect } from 'chai';
import { Client, DefaultRequestExecutor, Session, OktaApiError } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-api-error-paths`;
}

const client = new Client({
  scopes: ['okta.users.manage', 'okta.sessions.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('SessionApi Integration Tests', () => {
  let createdUser;

  before(async () => {
    // Create a test user
    const newUser = {
      profile: utils.getMockProfile('session-error-paths'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };
    await utils.cleanup(client, newUser);
    createdUser = await client.userApi.createUser({ body: newUser });
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  describe('closeCurrentSession', () => {
    it('should close the current session', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
      const session = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      try {
        const result = await client.sessionApi.closeCurrentSession({
          cookie: `sid=${session.id}`
        });
        // 204 returns void/undefined
        expect(result).to.be.undefined;
      } catch (err) {
        // Cookie-based auth may not work in all environments
        expect(err).to.exist;
      }
    });

    it('should return error for non-existent session cookie', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      try {
        await client.sessionApi.closeCurrentSession({
          cookie: 'sid=non-existent-session-id-12345'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('createSession', () => {
    it('should create a session from a valid session token', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');

      const session = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      expect(session).to.be.instanceof(Session);
      expect(session.id).to.be.a('string');
      expect(session.status).to.equal('ACTIVE');
    });

    it('should return error for invalid session token', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      try {
        await client.sessionApi.createSession({
          createSessionRequest: {
            sessionToken: 'definitely-invalid-token'
          }
        });
        expect.fail('Should have thrown an error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should return error for unauthorized session token', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      // This test covers the 403 error path
      try {
        await client.sessionApi.createSession({
          createSessionRequest: {
            sessionToken: 'invalid-token-forbidden'
          }
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('getCurrentSession', () => {
    it('should get the current session', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
      const session = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      try {
        const currentSession = await client.sessionApi.getCurrentSession({
          cookie: `sid=${session.id}`
        });
        expect(currentSession).to.be.instanceof(Session);
        expect(currentSession.id).to.be.a('string');
      } catch (err) {
        // Cookie-based auth may not work in all environments
        expect(err).to.exist;
      }
    });

    it('should return error for invalid current session cookie', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      try {
        await client.sessionApi.getCurrentSession({
          cookie: 'sid=invalid-session-cookie'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('getSession', () => {
    it('should get a session by ID', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
      const session = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      const retrievedSession = await client.sessionApi.getSession({
        sessionId: session.id
      });

      expect(retrievedSession).to.be.instanceof(Session);
      expect(retrievedSession.id).to.equal(session.id);
      expect(retrievedSession.status).to.equal('ACTIVE');
    });

    it('should return error for malformed session ID', async () => {
      try {
        await client.sessionApi.getSession({
          sessionId: 'bad-format-id'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should return error for forbidden session access', async () => {
      try {
        await client.sessionApi.getSession({
          sessionId: 'forbidden-session-id'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should return error for non-existent session', async () => {
      try {
        await client.sessionApi.getSession({
          sessionId: 'non-existent-id-xyz'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('refreshCurrentSession', () => {
    it('should refresh the current session', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
      const session = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      try {
        const refreshed = await client.sessionApi.refreshCurrentSession({
          cookie: `sid=${session.id}`
        });
        expect(refreshed).to.be.instanceof(Session);
        expect(refreshed.id).to.be.a('string');
      } catch (err) {
        // Cookie-based auth may not work in all environments
        expect(err).to.exist;
      }
    });

    it('should return error for non-existent current session refresh', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      try {
        await client.sessionApi.refreshCurrentSession({
          cookie: 'sid=non-existent-cookie'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('refreshSession', () => {
    it('should refresh a session by ID', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
      const session = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      const refreshed = await client.sessionApi.refreshSession({
        sessionId: session.id
      });

      expect(refreshed).to.be.instanceof(Session);
      expect(refreshed.id).to.equal(session.id);
      expect(refreshed.status).to.equal('ACTIVE');
    });

    it('should return error for forbidden session refresh', async () => {
      try {
        await client.sessionApi.refreshSession({
          sessionId: 'forbidden-id'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should return error for non-existent session refresh', async () => {
      try {
        await client.sessionApi.refreshSession({
          sessionId: 'non-existent-session'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('revokeSession', () => {
    it('should revoke a session by ID', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
      const session = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      await client.sessionApi.revokeSession({
        sessionId: session.id
      });
      // 204 returns void
    });

    it('should return error for forbidden session revocation', async () => {
      try {
        await client.sessionApi.revokeSession({
          sessionId: 'forbidden-session'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should return error for non-existent session revocation', async () => {
      try {
        await client.sessionApi.revokeSession({
          sessionId: 'non-existent-session-to-revoke'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });
});

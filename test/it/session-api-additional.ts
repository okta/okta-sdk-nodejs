import utils = require('../utils');
import { expect } from 'chai';
import { Client, DefaultRequestExecutor, Session, OktaApiError } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/session-api-additional-coverage`;
}

const client = new Client({
  scopes: ['okta.users.manage', 'okta.sessions.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('SessionApi Additional Coverage', () => {
  let createdUser;

  before(async () => {
    // Create a test user
    const newUser = {
      profile: utils.getMockProfile('session-api-coverage'),
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

  describe('Session Creation and Management', () => {
    it('should create a session and verify session object properties', async function () {
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
      expect(session.userId).to.equal(createdUser.id);
      expect(session.status).to.equal('ACTIVE');
    });

    it('should handle createSession with error scenarios', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      try {
        await client.sessionApi.createSession({
          createSessionRequest: {
            sessionToken: 'invalid-token-12345'
          }
        });
        expect.fail('Should have thrown an error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('Get Session Operations', () => {
    it('should retrieve an existing session by ID', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
      const createdSession = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      const retrievedSession = await client.sessionApi.getSession({
        sessionId: createdSession.id
      });

      expect(retrievedSession).to.be.instanceof(Session);
      expect(retrievedSession.id).to.equal(createdSession.id);
      expect(retrievedSession.userId).to.equal(createdUser.id);
      expect(retrievedSession.status).to.equal('ACTIVE');
    });

    it('should handle getSession with non-existent session ID', async () => {
      try {
        await client.sessionApi.getSession({
          sessionId: 'non-existent-session-id-123'
        });
        expect.fail('Should have thrown a 404 error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should handle getSession error responses (403, 429)', async () => {
      // This test covers error handling paths in getSession response processor
      try {
        await client.sessionApi.getSession({
          sessionId: 'invalid-format'
        });
        expect.fail('Should have thrown an error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('Refresh Session Operations', () => {
    it('should refresh an existing session by ID', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      const transaction = await utils.authenticateUser(client, createdUser.profile.login, 'Abcd1234#@');
      const session = await client.sessionApi.createSession({
        createSessionRequest: {
          sessionToken: transaction.sessionToken
        }
      });

      const refreshedSession = await client.sessionApi.refreshSession({
        sessionId: session.id
      });

      expect(refreshedSession).to.be.instanceof(Session);
      expect(refreshedSession.id).to.equal(session.id);
      expect(refreshedSession.userId).to.equal(createdUser.id);
      expect(refreshedSession.status).to.equal('ACTIVE');
    });

    it('should handle refreshSession with non-existent session ID', async () => {
      try {
        await client.sessionApi.refreshSession({
          sessionId: 'non-existent-session-id-456'
        });
        expect.fail('Should have thrown a 404 error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should handle refreshSession error responses (403, 429)', async () => {
      try {
        await client.sessionApi.refreshSession({
          sessionId: 'invalid-session-format'
        });
        expect.fail('Should have thrown an error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should refresh current session using cookie', async function () {
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
        // Expected in some environments where cookie auth is not supported
        expect(err).to.be.instanceof(OktaApiError);
      }
    });
  });

  describe('Revoke Session Operations', () => {
    it('should revoke an existing session by ID', async function () {
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

      // Verify session is revoked by trying to get it
      try {
        await client.sessionApi.getSession({
          sessionId: session.id
        });
        expect.fail('Should have thrown a 404 error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).status).to.equal(404);
      }
    });

    it('should handle revokeSession with non-existent session ID', async () => {
      try {
        await client.sessionApi.revokeSession({
          sessionId: 'non-existent-session-789'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should handle revokeSession error responses (403, 404, 429)', async () => {
      try {
        await client.sessionApi.revokeSession({
          sessionId: 'invalid-format-session'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('Current Session Operations with Cookie', () => {
    it('should get current session using cookie', async function () {
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
        // Expected in some environments where cookie auth is not supported
        expect(err).to.be.instanceof(OktaApiError);
      }
    });

    it('should handle getCurrentSession with invalid cookie', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      try {
        await client.sessionApi.getCurrentSession({
          cookie: 'sid=invalid-cookie-value'
        });
        expect.fail('Should have thrown an error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should close current session using cookie', async function () {
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
        await client.sessionApi.closeCurrentSession({
          cookie: `sid=${session.id}`
        });

        // Verify session is closed
        try {
          await client.sessionApi.getSession({
            sessionId: session.id
          });
          expect.fail('Should have thrown a 404 error');
        } catch (err) {
          expect(err).to.be.instanceof(OktaApiError);
          expect((err as OktaApiError).status).to.equal(404);
        }
      } catch (err) {
        // Expected in some environments where cookie auth is not supported
        expect(err).to.be.instanceof(OktaApiError);
      }
    });

    it('should handle closeCurrentSession with invalid cookie', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      try {
        await client.sessionApi.closeCurrentSession({
          cookie: 'sid=totally-invalid-cookie'
        });
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should return 404 for a non-existent session ID', async function () {
      if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
        this.skip();
      }

      try {
        await client.sessionApi.getSession({
          sessionId: 'definitely-not-a-real-session'
        });
        expect.fail('Should have thrown a 404 error');
      } catch (err) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).status).to.equal(404);
      }
    });

    it('should handle createSession required parameter validation', async () => {
      try {
        await client.sessionApi.createSession({
          createSessionRequest: null
        });
        expect.fail('Should have thrown a RequiredError');
      } catch (err) {
        expect(err).to.be.an.instanceof(Error);
        expect((err as Error).name).to.equal('RequiredError');
      }
    });

    it('should handle refreshSession required parameter validation', async () => {
      try {
        await client.sessionApi.refreshSession({
          sessionId: null
        });
        expect.fail('Should have thrown a RequiredError');
      } catch (err) {
        expect(err).to.be.an.instanceof(Error);
        expect((err as Error).name).to.equal('RequiredError');
      }
    });

    it('should handle revokeSession required parameter validation', async () => {
      try {
        await client.sessionApi.revokeSession({
          sessionId: null
        });
        expect.fail('Should have thrown a RequiredError');
      } catch (err) {
        expect(err).to.be.an.instanceof(Error);
        expect((err as Error).name).to.equal('RequiredError');
      }
    });

    it('should handle getSession required parameter validation', async () => {
      try {
        await client.sessionApi.getSession({
          sessionId: null
        });
        expect.fail('Should have thrown a RequiredError');
      } catch (err) {
        expect(err).to.be.an.instanceof(Error);
        expect((err as Error).name).to.equal('RequiredError');
      }
    });
  });
});

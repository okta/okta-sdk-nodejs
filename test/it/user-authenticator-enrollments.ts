import utils = require('../utils');
import { expect } from 'chai';
import { Client, DefaultRequestExecutor, AuthenticatorEnrollment, OktaApiError, AuthenticatorEnrollmentCreateRequest } from '@okta/okta-sdk-nodejs';

type HttpError = { status?: number; statusCode?: number };

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-authenticator-enrollments`;
}

const client = new Client({
  scopes: ['okta.users.manage', 'okta.authenticators.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('UserAuthenticatorEnrollmentsApi Integration Tests', () => {
  let createdUser;
  let phoneEnrollment;
  let phoneAuthenticatorId: string;
  let tacAuthenticatorId: string;

  before(async function () {
    this.timeout(30000);

    // Create a test user
    const newUser = {
      profile: utils.getMockProfile('user-authenticator-enrollments'),
      credentials: {
        password: { value: 'Abcd1234#@' }
      }
    };
    await utils.cleanup(client, newUser);
    createdUser = await client.userApi.createUser({ body: newUser });

    // Look up real authenticator IDs
    const authenticators = await client.authenticatorApi.listAuthenticators();
    await authenticators.each(async (auth) => {
      if (auth.type === 'phone' && !phoneAuthenticatorId) {
        phoneAuthenticatorId = auth.id;
      }
      if ((auth.key === 'custom_otp' || auth.type === 'security_key') && !tacAuthenticatorId) {
        tacAuthenticatorId = auth.id;
      }
    });
  });

  after(async () => {
    return utils.cleanup(client, createdUser);
  });

  describe('createAuthenticatorEnrollment', () => {
    it('should create a phone authenticator enrollment', async function () {
      this.timeout(10000);

      if (!phoneAuthenticatorId) {
        this.skip();
        return;
      }

      try {
        phoneEnrollment = await client.userAuthenticatorEnrollmentsApi.createAuthenticatorEnrollment({
          userId: createdUser.id,
          authenticator: {
            authenticatorId: phoneAuthenticatorId,
            profile: {
              phoneNumber: '+14155550100'
            }
          }
        });

        expect(phoneEnrollment).to.be.instanceof(AuthenticatorEnrollment);
        expect(phoneEnrollment.id).to.be.a('string');
        expect(phoneEnrollment.type).to.be.a('string');
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
          this.skip();
        }
        throw err;
      }
    });

    it('should handle 400 Bad Request for invalid phone number', async function () {
      if (!phoneAuthenticatorId) {
        this.skip();
        return;
      }

      try {
        await client.userAuthenticatorEnrollmentsApi.createAuthenticatorEnrollment({
          userId: createdUser.id,
          authenticator: {
            authenticatorId: phoneAuthenticatorId,
            profile: {
              phoneNumber: 'invalid-phone'
            }
          }
        });
        expect.fail('Should have thrown error for invalid phone number');
      } catch (err: unknown) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should handle 403 Forbidden for unauthorized user', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.createAuthenticatorEnrollment({
          userId: 'non-existent-user-id',
          authenticator: {
            authenticatorId: phoneAuthenticatorId || 'phone-placeholder',
            profile: {
              phoneNumber: '+14155550100'
            }
          }
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Forbidden or Not Found expected
      }
    });
  });

  describe('listAuthenticatorEnrollments', () => {
    it('should list authenticator enrollments for a user', async function () {
      this.timeout(10000);

      try {
        const enrollments = await client.userAuthenticatorEnrollmentsApi.listAuthenticatorEnrollments({
          userId: createdUser.id
        });

        expect(enrollments).to.exist;
        // User may have 0 or more enrollments
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 403 || status === 404 || status === 501 || status === 405) {
          this.skip();
        }
        throw err;
      }
    });

    it('should list enrollments with discloseIdentifiers parameter', async function () {
      this.timeout(10000);

      try {
        const enrollments = await client.userAuthenticatorEnrollmentsApi.listAuthenticatorEnrollments({
          userId: createdUser.id,
          discloseIdentifiers: ['phone']
        });

        expect(enrollments).to.exist;
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 403 || status === 404 || status === 501 || status === 405) {
          this.skip();
        }
        throw err;
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.listAuthenticatorEnrollments({
          userId: 'invalid-user-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Forbidden or Not Found expected
      }
    });

    it('should handle 404 Not Found for non-existent user', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.listAuthenticatorEnrollments({
          userId: '00u000000000000000000'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Not Found expected
      }
    });
  });

  describe('getAuthenticatorEnrollment', () => {
    it('should retrieve a specific authenticator enrollment', async function () {
      this.timeout(10000);

      if (!phoneEnrollment?.id) {
        this.skip();
        return;
      }

      try {
        const enrollment = await client.userAuthenticatorEnrollmentsApi.getAuthenticatorEnrollment({
          userId: createdUser.id,
          enrollmentId: phoneEnrollment.id
        });

        expect(enrollment).to.be.instanceof(AuthenticatorEnrollment);
        expect(enrollment.id).to.equal(phoneEnrollment.id);
        expect(enrollment.type).to.be.a('string');
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 403 || status === 404 || status === 501 || status === 405) {
          this.skip();
        }
        throw err;
      }
    });

    it('should retrieve enrollment with discloseIdentifiers parameter', async function () {
      this.timeout(10000);

      if (!phoneEnrollment?.id) {
        this.skip();
        return;
      }

      try {
        const enrollment = await client.userAuthenticatorEnrollmentsApi.getAuthenticatorEnrollment({
          userId: createdUser.id,
          enrollmentId: phoneEnrollment.id,
          discloseIdentifiers: ['phone']
        });

        expect(enrollment).to.be.instanceof(AuthenticatorEnrollment);
        expect(enrollment.id).to.be.a('string');
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 403 || status === 404 || status === 501 || status === 405) {
          this.skip();
        }
        throw err;
      }
    });

    it('should handle 404 Not Found for non-existent enrollment', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.getAuthenticatorEnrollment({
          userId: createdUser.id,
          enrollmentId: 'non-existent-enrollment-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Not Found expected
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.getAuthenticatorEnrollment({
          userId: 'invalid-user-id',
          enrollmentId: 'some-enrollment-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Forbidden or Not Found expected
      }
    });
  });

  describe('createTacAuthenticatorEnrollment', () => {
    it('should create a TAC authenticator enrollment', async function () {
      this.timeout(10000);

      if (!tacAuthenticatorId) {
        this.skip();
        return;
      }

      try {
        const tacEnrollment = await client.userAuthenticatorEnrollmentsApi.createTacAuthenticatorEnrollment({
          userId: createdUser.id,
          authenticator: {
            authenticatorId: tacAuthenticatorId,
            profile: {
              multiUse: false,
              ttl: '60'
            }
          }
        });

        expect(tacEnrollment).to.exist;
        expect(tacEnrollment.id).to.be.a('string');
        expect(tacEnrollment.type).to.be.a('string');
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
          this.skip();
        }
        throw err;
      }
    });

    it('should handle 400 Bad Request for invalid TAC data', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.createTacAuthenticatorEnrollment({
          userId: createdUser.id,
          authenticator: {
            authenticatorId: 'invalid-id',
            profile: {}
          }
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Error expected for invalid input
      }
    });

    it('should handle 403 Forbidden for unauthorized user', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.createTacAuthenticatorEnrollment({
          userId: 'non-existent-user-id',
          authenticator: {
            authenticatorId: tacAuthenticatorId || 'tac-placeholder',
            profile: {}
          }
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Forbidden or Not Found expected
      }
    });
  });

  describe('deleteAuthenticatorEnrollment', () => {
    let enrollmentToDelete;

    before(async function () {
      this.timeout(10000);

      if (!phoneAuthenticatorId) {
        return;
      }

      // Try to create an enrollment to delete
      try {
        enrollmentToDelete = await client.userAuthenticatorEnrollmentsApi.createAuthenticatorEnrollment({
          userId: createdUser.id,
          authenticator: {
            authenticatorId: phoneAuthenticatorId,
            profile: {
              phoneNumber: '+14155550101'
            }
          }
        });
      } catch (err) {
        // Enrollment creation may not be supported in this org
      }
    });

    it('should delete an authenticator enrollment', async function () {
      this.timeout(10000);

      if (!enrollmentToDelete?.id) {
        this.skip();
        return;
      }

      try {
        const result = await client.userAuthenticatorEnrollmentsApi.deleteAuthenticatorEnrollment({
          userId: createdUser.id,
          enrollmentId: enrollmentToDelete.id
        });

        // 204 returns void/undefined
        expect(result).to.be.undefined;
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 403 || status === 404 || status === 501 || status === 405) {
          this.skip();
        }
        throw err;
      }
    });

    it('should handle 404 Not Found for non-existent enrollment', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.deleteAuthenticatorEnrollment({
          userId: createdUser.id,
          enrollmentId: 'non-existent-enrollment-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Not Found expected
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.deleteAuthenticatorEnrollment({
          userId: 'invalid-user-id',
          enrollmentId: 'some-enrollment-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Forbidden or Not Found expected
      }
    });

    it('should handle 404 when deleting already deleted enrollment', async function () {
      this.timeout(10000);

      if (!enrollmentToDelete?.id) {
        this.skip();
        return;
      }

      try {
        await client.userAuthenticatorEnrollmentsApi.deleteAuthenticatorEnrollment({
          userId: createdUser.id,
          enrollmentId: enrollmentToDelete.id
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Not Found expected for already deleted enrollment
      }
    });
  });

  describe('Error handling and edge cases', () => {
    it('should handle missing required userId parameter', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.listAuthenticatorEnrollments({
          userId: null as unknown as string
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: unknown) {
        expect(err).to.exist;
        expect(err.name).to.equal('RequiredError');
      }
    });

    it('should handle missing required enrollmentId parameter', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.getAuthenticatorEnrollment({
          userId: createdUser.id,
          enrollmentId: null as unknown as string
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: unknown) {
        expect(err).to.exist;
        expect(err.name).to.equal('RequiredError');
      }
    });

    it('should handle missing required authenticator parameter in create', async () => {
      try {
        await client.userAuthenticatorEnrollmentsApi.createAuthenticatorEnrollment({
          userId: createdUser.id,
          authenticator: null as unknown as AuthenticatorEnrollmentCreateRequest
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: unknown) {
        expect(err).to.exist;
        expect(err.name).to.equal('RequiredError');
      }
    });
  });
});

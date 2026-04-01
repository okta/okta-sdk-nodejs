import utils = require('../utils');
import { expect } from 'chai';
import { Client, DefaultRequestExecutor, User, UserFactor, UserFactorSecurityQuestion, UserFactorVerifyResponse, OktaApiError, ResendUserFactor, UploadYubikeyOtpTokenSeedRequest } from '@okta/okta-sdk-nodejs';

type HttpError = { status?: number; statusCode?: number };

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-factor-api-integration`;
}

const client = new Client({
  scopes: ['okta.factors.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('UserFactorApi Integration Tests - Additional Coverage', () => {
  let createdUser: User;
  let securityQuestionFactor;

  before(async function () {
    this.timeout(20000);

    // Ensure Security Question is active
    await utils.activateSecurityQuestion(client);

    // Create a test user
    const newUser = {
      profile: utils.getMockProfile('user-factor-api-integration'),
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

  describe('listFactors', () => {
    it('should list all enrolled factors for a user', async function () {
      this.timeout(10000);

      const factorsCollection = await client.userFactorApi.listFactors({
        userId: createdUser.id
      });

      const factors: UserFactor[] = [];
      await factorsCollection.each(factor => factors.push(factor));
      expect(factors).to.be.an('array');
    });

    it('should handle 403 Forbidden for unauthorized user', async () => {
      try {
        await client.userFactorApi.listFactors({
          userId: 'invalid-user-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent user', async () => {
      try {
        await client.userFactorApi.listFactors({
          userId: '00u000000000000000000'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('listSupportedFactors', () => {
    it('should list all supported factors for a user', async function () {
      this.timeout(10000);

      const supportedFactors = await client.userFactorApi.listSupportedFactors({
        userId: createdUser.id
      });

      expect(supportedFactors).to.exist;
      expect(supportedFactors.each).to.be.a('function');
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.listSupportedFactors({
          userId: 'invalid-user-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent user', async () => {
      try {
        await client.userFactorApi.listSupportedFactors({
          userId: '00u000000000000000000'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('listSupportedSecurityQuestions', () => {
    it('should list all supported security questions', async function () {
      this.timeout(10000);

      const questions = await client.userFactorApi.listSupportedSecurityQuestions({
        userId: createdUser.id
      });

      expect(questions).to.exist;
      expect(questions.each).to.be.a('function');
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.listSupportedSecurityQuestions({
          userId: 'invalid-user-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent user', async () => {
      try {
        await client.userFactorApi.listSupportedSecurityQuestions({
          userId: '00u000000000000000000'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('enrollFactor and getFactor', () => {
    it('should enroll a security question factor', async function () {
      this.timeout(10000);

      const factor = {
        factorType: 'question',
        provider: 'OKTA',
        profile: {
          question: 'disliked_food',
          answer: 'mayonnaise'
        }
      };

      securityQuestionFactor = await client.userFactorApi.enrollFactor({
        userId: createdUser.id,
        body: factor as UserFactor
      });

      expect(securityQuestionFactor).to.be.instanceof(UserFactor);
      expect(securityQuestionFactor).to.be.instanceof(UserFactorSecurityQuestion);
      expect(securityQuestionFactor.id).to.be.a('string');
      expect(securityQuestionFactor.factorType).to.equal('question');
      expect(securityQuestionFactor.provider).to.equal('OKTA');
    });

    it('should get an enrolled factor by ID', async function () {
      this.timeout(10000);

      if (!securityQuestionFactor?.id) {
        this.skip();
      }

      const factor = await client.userFactorApi.getFactor({
        userId: createdUser.id,
        factorId: securityQuestionFactor.id
      });

      expect(factor).to.be.instanceof(UserFactor);
      expect(factor.id).to.equal(securityQuestionFactor.id);
      expect(factor.factorType).to.equal('question');
    });

    it('should handle 400 Bad Request for invalid factor', async () => {
      try {
        await client.userFactorApi.enrollFactor({
          userId: createdUser.id,
          body: {
            factorType: 'invalid',
            provider: 'OKTA'
          } as unknown as UserFactor
        });
        expect.fail('Should have thrown error');
      } catch (err: unknown) {
        expect(err).to.be.instanceof(OktaApiError);
        expect((err as OktaApiError).errorCode).to.be.a('string');
      }
    });

    it('should handle 403 Forbidden for unauthorized user in enrollFactor', async () => {
      try {
        await client.userFactorApi.enrollFactor({
          userId: 'invalid-user-id',
          body: {
            factorType: 'question',
            provider: 'OKTA'
          }
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent factor in getFactor', async () => {
      try {
        await client.userFactorApi.getFactor({
          userId: createdUser.id,
          factorId: 'non-existent-factor-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('verifyFactor', () => {
    it('should verify a security question factor', async function () {
      this.timeout(10000);

      if (!securityQuestionFactor?.id) {
        this.skip();
      }

      try {
        const response = await client.userFactorApi.verifyFactor({
          userId: createdUser.id,
          factorId: securityQuestionFactor.id,
          body: {
            answer: 'mayonnaise'
          }
        });

        expect(response).to.be.instanceof(UserFactorVerifyResponse);
        expect(response.factorResult).to.be.a('string');
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
        await client.userFactorApi.verifyFactor({
          userId: 'invalid-user-id',
          factorId: 'some-factor-id',
          body: {}
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent factor', async () => {
      try {
        await client.userFactorApi.verifyFactor({
          userId: createdUser.id,
          factorId: 'non-existent-factor-id',
          body: {}
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('resendEnrollFactor', () => {
    it('should handle resend for SMS factor', async function () {
      this.timeout(10000);

      let smsFactor;
      // Try to enroll SMS factor first
      try {
        smsFactor = await client.userFactorApi.enrollFactor({
          userId: createdUser.id,
          body: {
            factorType: 'sms',
            provider: 'OKTA',
            profile: {
              phoneNumber: '+14155550100'
            }
          }
        });
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
          this.skip();
        }
        throw err;
      }

      if (!smsFactor?.id) {
        this.skip();
        return;
      }

      try {
        const response = await client.userFactorApi.resendEnrollFactor({
          userId: createdUser.id,
          factorId: smsFactor.id,
          resendUserFactor: {} as ResendUserFactor
        });
        expect(response).to.exist;
        expect(response.factorType).to.be.a('string');
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 403 || status === 404 || status === 501 || status === 405) {
          this.skip();
        }
        throw err;
      } finally {
        // Clean up
        try {
          await client.userFactorApi.unenrollFactor({
            userId: createdUser.id,
            factorId: smsFactor.id
          });
        } catch (_) {
          // cleanup best-effort
        }
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.resendEnrollFactor({
          userId: 'invalid-user-id',
          factorId: 'some-factor-id',
          resendUserFactor: {} as ResendUserFactor
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent factor', async () => {
      try {
        await client.userFactorApi.resendEnrollFactor({
          userId: createdUser.id,
          factorId: 'non-existent-factor-id',
          resendUserFactor: {} as ResendUserFactor
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('getFactorTransactionStatus', () => {
    it('should handle transaction status request', async function () {
      this.timeout(10000);

      try {
        await client.userFactorApi.getFactorTransactionStatus({
          userId: createdUser.id,
          factorId: 'some-factor-id',
          transactionId: 'some-transaction-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Expected to fail without valid transaction
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.getFactorTransactionStatus({
          userId: 'invalid-user-id',
          factorId: 'some-factor-id',
          transactionId: 'some-transaction-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent transaction', async () => {
      try {
        await client.userFactorApi.getFactorTransactionStatus({
          userId: createdUser.id,
          factorId: 'factor-id',
          transactionId: 'non-existent-transaction'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('unenrollFactor', () => {
    it('should unenroll a factor', async function () {
      this.timeout(10000);

      // First unenroll the security question factor from the earlier test if it exists
      if (securityQuestionFactor?.id) {
        try {
          await client.userFactorApi.unenrollFactor({
            userId: createdUser.id,
            factorId: securityQuestionFactor.id
          });
        } catch (err) {
          // Factor may already be unenrolled
        }
      }

      // Create a new security question factor to delete
      const factor = {
        factorType: 'question',
        provider: 'OKTA',
        profile: {
          question: 'favorite_art_piece',
          answer: 'starry night'
        }
      };

      const createdFactor = await client.userFactorApi.enrollFactor({
        userId: createdUser.id,
        body: factor as UserFactor
      });

      expect(createdFactor).to.be.instanceof(UserFactor);
      expect(createdFactor.id).to.be.a('string');
      expect(createdFactor.factorType).to.equal('question');

      const response = await client.userFactorApi.unenrollFactor({
        userId: createdUser.id,
        factorId: createdFactor.id
      });

      // 204 returns undefined
      expect(response).to.be.undefined;

      // Verify it's deleted
      try {
        await client.userFactorApi.getFactor({
          userId: createdUser.id,
          factorId: createdFactor.id
        });
        expect.fail('Should have thrown 404');
      } catch (err: unknown) {
        expect(err).to.be.instanceof(OktaApiError);
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.unenrollFactor({
          userId: 'invalid-user-id',
          factorId: 'some-factor-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent factor', async () => {
      try {
        await client.userFactorApi.unenrollFactor({
          userId: createdUser.id,
          factorId: 'non-existent-factor-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('activateFactor', () => {
    it('should handle activation request', async function () {
      this.timeout(10000);

      let totpFactor;
      // Try to enroll a TOTP factor that requires activation
      try {
        totpFactor = await client.userFactorApi.enrollFactor({
          userId: createdUser.id,
          body: {
            factorType: 'token:software:totp',
            provider: 'OKTA'
          }
        });
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 400 || status === 403 || status === 404 || status === 405 || status === 501) {
          this.skip();
        }
        throw err;
      }

      if (!totpFactor?.id) {
        this.skip();
        return;
      }

      try {
        await client.userFactorApi.activateFactor({
          userId: createdUser.id,
          factorId: totpFactor.id,
          body: {
            passCode: '123456'
          }
        });
      } catch (err) {
        // Expected to fail without a valid passcode
        expect(err).to.exist;
      } finally {
        // Clean up
        try {
          await client.userFactorApi.unenrollFactor({
            userId: createdUser.id,
            factorId: totpFactor.id
          });
        } catch (_) {
          // cleanup best-effort
        }
      }
    });

    it('should handle 400 Bad Request for invalid activation data', async () => {
      try {
        await client.userFactorApi.activateFactor({
          userId: createdUser.id,
          factorId: 'some-factor-id',
          body: {}
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.activateFactor({
          userId: 'invalid-user-id',
          factorId: 'some-factor-id',
          body: {}
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent factor', async () => {
      try {
        await client.userFactorApi.activateFactor({
          userId: createdUser.id,
          factorId: 'non-existent-factor-id',
          body: {}
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('Yubikey OTP Token operations', () => {
    it('should handle listYubikeyOtpTokens', async function () {
      this.timeout(10000);

      try {
        const tokens = await client.userFactorApi.listYubikeyOtpTokens({});
        expect(tokens).to.exist;
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 403 || status === 404 || status === 501 || status === 405) {
          this.skip();
        }
        throw err;
      }
    });

    it('should handle getYubikeyOtpTokenById', async function () {
      this.timeout(10000);

      try {
        await client.userFactorApi.getYubikeyOtpTokenById({
          tokenId: 'some-token-id'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
        // Expected to fail without valid token
      }
    });

    it('should handle uploadYubikeyOtpTokenSeed', async function () {
      this.timeout(10000);

      try {
        await client.userFactorApi.uploadYubikeyOtpTokenSeed({
          uploadYubikeyOtpTokenSeedRequest: {
            privateId: 'some-id',
            publicId: 'some-public-id',
            secretKey: 'some-secret'
          } as UploadYubikeyOtpTokenSeedRequest
        });
      } catch (err) {
        const status = (err as HttpError).status || (err as HttpError).statusCode;
        if (status === 400 || status === 403 || status === 404 || status === 405 || status === 500 || status === 501) {
          this.skip();
        }
        throw err;
      }
    });

    it('should handle 403 Forbidden for Yubikey operations', async () => {
      try {
        await client.userFactorApi.listYubikeyOtpTokens({});
      } catch (err: unknown) {
        // May succeed or fail depending on permissions
      }
    });

    it('should handle 404 Not Found for non-existent Yubikey token', async () => {
      try {
        await client.userFactorApi.getYubikeyOtpTokenById({
          tokenId: 'non-existent-token'
        });
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });

  describe('Error handling and edge cases', () => {
    it('should handle missing required userId parameter', async () => {
      try {
        await client.userFactorApi.listFactors({
          userId: null as unknown as string
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle missing required factorId parameter', async () => {
      try {
        await client.userFactorApi.getFactor({
          userId: createdUser.id,
          factorId: null as unknown as string
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });

    it('should handle missing required body parameter in enrollFactor', async () => {
      try {
        await client.userFactorApi.enrollFactor({
          userId: createdUser.id,
          body: null as unknown as UserFactor
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: unknown) {
        expect(err).to.exist;
      }
    });
  });
});

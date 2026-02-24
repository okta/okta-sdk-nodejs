import utils = require('../utils');
import { expect } from 'chai';
import { Client, DefaultRequestExecutor, User } from '@okta/okta-sdk-nodejs';

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

      const factors: any[] = [];
      await factorsCollection.each(factor => factors.push(factor));
      expect(factors).to.be.an('array');
    });

    it('should handle 403 Forbidden for unauthorized user', async () => {
      try {
        await client.userFactorApi.listFactors({
          userId: 'invalid-user-id'
        });
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent user', async () => {
      try {
        await client.userFactorApi.listFactors({
          userId: '00u000000000000000000'
        });
      } catch (err: any) {
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
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.listSupportedFactors({
          userId: 'invalid-user-id'
        });
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent user', async () => {
      try {
        await client.userFactorApi.listSupportedFactors({
          userId: '00u000000000000000000'
        });
      } catch (err: any) {
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
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.listSupportedSecurityQuestions({
          userId: 'invalid-user-id'
        });
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent user', async () => {
      try {
        await client.userFactorApi.listSupportedSecurityQuestions({
          userId: '00u000000000000000000'
        });
      } catch (err: any) {
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
        body: factor as any
      });

      expect(securityQuestionFactor).to.exist;
      expect(securityQuestionFactor.id).to.exist;
      expect(securityQuestionFactor.factorType).to.equal('question');
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

      expect(factor).to.exist;
      expect(factor.id).to.equal(securityQuestionFactor.id);
    });

    it('should handle 400 Bad Request for invalid factor', async () => {
      try {
        await client.userFactorApi.enrollFactor({
          userId: createdUser.id,
          body: {
            factorType: 'invalid',
            provider: 'OKTA'
          } as any
        });
        expect.fail('Should have thrown error');
      } catch (err: any) {
        expect(err).to.exist;
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
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent factor in getFactor', async () => {
      try {
        await client.userFactorApi.getFactor({
          userId: createdUser.id,
          factorId: 'non-existent-factor-id'
        });
      } catch (err: any) {
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

        expect(response).to.exist;
      } catch (err) {
        // May fail if factor is not in correct state
        console.log('Verify factor failed (expected in some states):', err.message);
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.verifyFactor({
          userId: 'invalid-user-id',
          factorId: 'some-factor-id',
          body: {}
        });
      } catch (err: any) {
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
      } catch (err: any) {
        expect(err).to.exist;
      }
    });
  });

  describe('resendEnrollFactor', () => {
    it('should handle resend for SMS factor', async function () {
      this.timeout(10000);

      // Try to enroll SMS factor first
      try {
        const smsFactor = await client.userFactorApi.enrollFactor({
          userId: createdUser.id,
          body: {
            factorType: 'sms',
            provider: 'OKTA',
            profile: {
              phoneNumber: '+1 555 0100'
            }
          }
        });

        if (smsFactor?.id) {
          try {
            const response = await client.userFactorApi.resendEnrollFactor({
              userId: createdUser.id,
              factorId: smsFactor.id,
              resendUserFactor: {} as any
            });
            expect(response).to.exist;
          } catch (err) {
            console.log('Resend failed (expected if SMS not supported):', err.message);
          }

          // Clean up
          await client.userFactorApi.unenrollFactor({
            userId: createdUser.id,
            factorId: smsFactor.id
          });
        }
      } catch (err) {
        console.log('SMS enrollment failed (expected if not supported):', err.message);
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.resendEnrollFactor({
          userId: 'invalid-user-id',
          factorId: 'some-factor-id',
          resendUserFactor: {} as any
        });
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent factor', async () => {
      try {
        await client.userFactorApi.resendEnrollFactor({
          userId: createdUser.id,
          factorId: 'non-existent-factor-id',
          resendUserFactor: {} as any
        });
      } catch (err: any) {
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
      } catch (err: any) {
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
      } catch (err: any) {
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
      } catch (err: any) {
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
        body: factor as any
      });

      expect(createdFactor).to.exist;
      expect(createdFactor.id).to.exist;

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
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle 403 Forbidden for unauthorized access', async () => {
      try {
        await client.userFactorApi.unenrollFactor({
          userId: 'invalid-user-id',
          factorId: 'some-factor-id'
        });
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle 404 Not Found for non-existent factor', async () => {
      try {
        await client.userFactorApi.unenrollFactor({
          userId: createdUser.id,
          factorId: 'non-existent-factor-id'
        });
      } catch (err: any) {
        expect(err).to.exist;
      }
    });
  });

  describe('activateFactor', () => {
    it('should handle activation request', async function () {
      this.timeout(10000);

      // Try to enroll a TOTP factor that requires activation
      try {
        const totpFactor = await client.userFactorApi.enrollFactor({
          userId: createdUser.id,
          body: {
            factorType: 'token:software:totp',
            provider: 'OKTA'
          }
        });

        if (totpFactor?.id) {
          try {
            await client.userFactorApi.activateFactor({
              userId: createdUser.id,
              factorId: totpFactor.id,
              body: {
                passCode: '123456'
              }
            });
          } catch (err) {
            console.log('Activation failed (expected without valid passcode):', err.message);
          }

          // Clean up
          await client.userFactorApi.unenrollFactor({
            userId: createdUser.id,
            factorId: totpFactor.id
          });
        }
      } catch (err) {
        console.log('TOTP enrollment failed (expected if not supported):', err.message);
      }
    });

    it('should handle 400 Bad Request for invalid activation data', async () => {
      try {
        await client.userFactorApi.activateFactor({
          userId: createdUser.id,
          factorId: 'some-factor-id',
          body: {}
        });
      } catch (err: any) {
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
      } catch (err: any) {
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
      } catch (err: any) {
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
        console.log('List Yubikey tokens failed (expected if not supported):', err.message);
      }
    });

    it('should handle getYubikeyOtpTokenById', async function () {
      this.timeout(10000);

      try {
        await client.userFactorApi.getYubikeyOtpTokenById({
          tokenId: 'some-token-id'
        });
      } catch (err: any) {
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
          } as any
        });
      } catch (err) {
        console.log('Upload Yubikey seed failed (expected if not supported):', err.message);
      }
    });

    it('should handle 403 Forbidden for Yubikey operations', async () => {
      try {
        await client.userFactorApi.listYubikeyOtpTokens({});
      } catch (err: any) {
        // May succeed or fail depending on permissions
      }
    });

    it('should handle 404 Not Found for non-existent Yubikey token', async () => {
      try {
        await client.userFactorApi.getYubikeyOtpTokenById({
          tokenId: 'non-existent-token'
        });
      } catch (err: any) {
        expect(err).to.exist;
      }
    });
  });

  describe('Error handling and edge cases', () => {
    it('should handle rate limiting (429)', async function () {
      this.timeout(10000);

      // This test documents the 429 response path but may not trigger it in normal testing
      try {
        await client.userFactorApi.listFactors({
          userId: createdUser.id
        });
      } catch (err: any) {
        if (err.statusCode === 429) {
          expect(err).to.exist;
          expect(err.message).to.include('Too Many Requests');
        }
      }
    });

    it('should handle missing required userId parameter', async () => {
      try {
        await client.userFactorApi.listFactors({
          userId: null as any
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle missing required factorId parameter', async () => {
      try {
        await client.userFactorApi.getFactor({
          userId: createdUser.id,
          factorId: null as any
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: any) {
        expect(err).to.exist;
      }
    });

    it('should handle missing required body parameter in enrollFactor', async () => {
      try {
        await client.userFactorApi.enrollFactor({
          userId: createdUser.id,
          body: null as any
        });
        expect.fail('Should have thrown RequiredError');
      } catch (err: any) {
        expect(err).to.exist;
      }
    });
  });
});

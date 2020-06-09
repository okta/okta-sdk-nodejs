const expect = require('chai').expect;
const okta = require('../../');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockApplication = require('./mocks/application-oidc.json');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-grant`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Application OAuth2 grant API', () => {
  let application;
  let grant;
  beforeEach(async () => {
    application = await client.createApplication(mockApplication);
  });
  afterEach(async () => {
    await application.deactivate();
    await application.delete();
  });

  describe('Grant consent', () => {
    it('should grant consent to scope', async () => {
      grant = await application.grantConsentToScope({
        issuer: client.baseUrl,
        scopeId: 'okta.users.manage'
      });
      expect(grant).to.be.instanceOf(models.OAuth2ScopeConsentGrant);
      expect(grant.issuer).to.equal(client.baseUrl);
    });
  });

  describe('List scope consent grants', () => {
    beforeEach(async () => {
      grant = await application.grantConsentToScope({
        issuer: client.baseUrl,
        scopeId: 'okta.users.manage'
      });
    });
    afterEach(async () => {
      await application.revokeScopeConsentGrant(grant.id);
    });

    it('should return a collection of OAuth2ScopeConsentGrant', async () => {
      const grants = await application.listScopeConsentGrants({
        applicationId: application.id
      });
      expect(grants).to.be.instanceOf(Collection);
      await grants.each(grantFromCollection => {
        expect(grantFromCollection).to.be.instanceOf(models.OAuth2ScopeConsentGrant);
        expect(grantFromCollection.id).to.equal(grant.id);
      });
    });
  });

  describe('Get scope consent grant', () => {
    beforeEach(async () => {
      grant = await application.grantConsentToScope({
        issuer: client.baseUrl,
        scopeId: 'okta.users.manage'
      });
    });
    afterEach(async () => {
      await application.revokeScopeConsentGrant(grant.id);
    });

    it('should get grant by id', async () => {
      const grantFromGet = await application.getScopeConsentGrant(grant.id);
      expect(grantFromGet).to.be.exist;
      expect(grantFromGet).to.be.instanceOf(models.OAuth2ScopeConsentGrant);
    });
  });

  describe('Revoke grant', () => {
    beforeEach(async () => {
      grant = await application.grantConsentToScope({
        issuer: client.baseUrl,
        scopeId: 'okta.users.manage'
      });
    });

    it('should revoke grant', async () => {
      const res = await application.revokeScopeConsentGrant(grant.id);
      expect(res.status).to.equal(204);
      try {
        await application.getScopeConsentGrant(grant.id);
      } catch (err) {
        expect(err.status).to.equal(404);
      }
    });
  });
});

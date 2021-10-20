import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  OAuth2ScopeConsentGrant } from '@okta/okta-sdk-nodejs';
import getMockApplication = require('./mocks/application-oidc');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-grant`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application OAuth2 grant API', () => {
  let application;
  let grant;
  beforeEach(async () => {
    application = await client.createApplication(getMockApplication());
  });
  afterEach(async () => {
    await client.deactivateApplication(application.id);
    await client.deleteApplication(application.id);
  });

  describe('Grant consent', () => {
    it('should grant consent to scope', async () => {
      grant = await application.grantConsentToScope({
        issuer: orgUrl,
        scopeId: 'okta.users.manage'
      });
      expect(grant).to.be.instanceOf(OAuth2ScopeConsentGrant);
      expect(grant.issuer).to.equal(orgUrl);
      expect(grant.scopeId).to.equal('okta.users.manage');
    });
  });

  describe('List scope consent grants', () => {
    beforeEach(async () => {
      grant = await application.grantConsentToScope({
        issuer: orgUrl,
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
      expect(grants).not.to.equal(null);
      grants.forEach(grantFromCollection => {
        expect(grantFromCollection).to.be.instanceOf(OAuth2ScopeConsentGrant);
        expect(grantFromCollection.id).to.equal(grant.id);
      });
    });
  });

  describe('Get scope consent grant', () => {
    beforeEach(async () => {
      grant = await application.grantConsentToScope({
        issuer: orgUrl,
        scopeId: 'okta.users.manage'
      });
    });
    afterEach(async () => {
      await application.revokeScopeConsentGrant(grant.id);
    });

    it('should get grant by id', async () => {
      const grantFromGet = await application.getScopeConsentGrant(grant.id);
      expect(grantFromGet).to.be.exist;
      expect(grantFromGet).to.be.instanceOf(OAuth2ScopeConsentGrant);
    });
  });

  describe('Revoke grant', () => {
    beforeEach(async () => {
      grant = await application.grantConsentToScope({
        issuer: orgUrl,
        scopeId: 'okta.users.manage'
      });
    });

    it('should revoke grant', async () => {
      const res = await application.revokeScopeConsentGrant(grant.id);
      expect(res.statusCode).to.equal(204);
      try {
        await application.getScopeConsentGrant(grant.id);
      } catch (err) {
        expect(err.status).to.equal(404);
      }
    });
  });
});

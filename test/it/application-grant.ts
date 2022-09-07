import { expect } from 'chai';
import {
  Collection,
  DefaultRequestExecutor,
  OAuth2ScopeConsentGrant,
} from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import getMockApplication = require('./mocks/application-oidc');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
const issuer = orgUrl.replace(/\/$/, '');

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-grant`;
}

const client: V2Client = utils.getV2Client({
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
      grant = await client.grantConsentToScope(application.id, {
        issuer,
        scopeId: 'okta.users.manage'
      });
      expect(grant).to.be.instanceOf(OAuth2ScopeConsentGrant);
      expect(grant.issuer).to.equal(issuer);
      expect(grant.scopeId).to.equal('okta.users.manage');
    });
  });

  describe('List scope consent grants', () => {
    beforeEach(async () => {
      grant = await client.grantConsentToScope(application.id, {
        issuer,
        scopeId: 'okta.users.manage'
      });
    });
    afterEach(async () => {
      await client.revokeScopeConsentGrant(application.id, grant.id);
    });

    it('should return a collection of OAuth2ScopeConsentGrant', async () => {
      const grants = await client.listScopeConsentGrants(application.id);
      expect(grants).to.be.instanceOf(Collection);
      await grants.each(grantFromCollection => {
        expect(grantFromCollection).to.be.instanceOf(OAuth2ScopeConsentGrant);
        expect(grantFromCollection.id).to.equal(grant.id);
      });
    });
  });

  describe('Get scope consent grant', () => {
    beforeEach(async () => {
      grant = await client.grantConsentToScope(application.id, {
        issuer,
        scopeId: 'okta.users.manage'
      });
    });
    afterEach(async () => {
      await client.revokeScopeConsentGrant(application.id, grant.id);
    });

    it('should get grant by id', async () => {
      const grantFromGet = await client.getScopeConsentGrant(application.id, grant.id);
      expect(grantFromGet).to.be.exist;
      expect(grantFromGet).to.be.instanceOf(OAuth2ScopeConsentGrant);
    });
  });

  describe('Revoke grant', () => {
    beforeEach(async () => {
      grant = await client.grantConsentToScope(application.id, {
        issuer,
        scopeId: 'okta.users.manage'
      });
    });

    it('should revoke grant', async () => {
      await client.revokeScopeConsentGrant(application.id, grant.id);
      try {
        await client.getScopeConsentGrant(application.id, grant.id);
      } catch (err) {
        expect(err.status).to.equal(404);
      }
    });
  });
});

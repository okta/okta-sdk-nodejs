import { expect } from 'chai';
import {
  ApiClient,
  Application,
  Collection,
  DefaultRequestExecutor,
  OAuth2ScopeConsentGrant,
} from '@okta/okta-sdk-nodejs';
import getMockApplication = require('./mocks/application-oidc');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
const issuer = orgUrl.replace(/\/$/, '');

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-grant`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application OAuth2 grant API', () => {
  let application: Application;
  let grant: OAuth2ScopeConsentGrant;
  beforeEach(async () => {
    application = await client.applicationApi.createApplication({application: getMockApplication()});
  });
  afterEach(async () => {
    await client.applicationApi.deactivateApplication({appId: application.id});
    await client.applicationApi.deleteApplication({appId: application.id});
  });

  describe('Grant consent', () => {
    it('should grant consent to scope', async () => {
      grant = await client.applicationApi.grantConsentToScope({appId: application.id,
        oAuth2ScopeConsentGrant: {
          issuer,
          scopeId: 'okta.users.manage'
        }
      });
      expect(grant).to.be.instanceOf(OAuth2ScopeConsentGrant);
      expect(grant.issuer).to.equal(issuer);
      expect(grant.scopeId).to.equal('okta.users.manage');
    });
  });

  describe('List scope consent grants', () => {
    beforeEach(async () => {
      grant = await client.applicationApi.grantConsentToScope({appId: application.id,
        oAuth2ScopeConsentGrant: {
          issuer,
          scopeId: 'okta.users.manage'
        }
      });
    });
    afterEach(async () => {
      await client.applicationApi.revokeScopeConsentGrant({appId: application.id, grantId: grant.id});
    });

    it('should return a collection of OAuth2ScopeConsentGrant', async () => {
      const grants = await client.applicationApi.listScopeConsentGrants({appId: application.id});
      expect(grants).to.be.instanceOf(Collection);
      await grants.each(grantFromCollection => {
        expect(grantFromCollection).to.be.instanceOf(OAuth2ScopeConsentGrant);
        expect(grantFromCollection.id).to.equal(grant.id);
      });
    });
  });

  describe('Get scope consent grant', () => {
    beforeEach(async () => {
      grant = await client.applicationApi.grantConsentToScope({appId: application.id,
        oAuth2ScopeConsentGrant: {
          issuer,
          scopeId: 'okta.users.manage'
        }
      });
    });
    afterEach(async () => {
      await client.applicationApi.revokeScopeConsentGrant({appId: application.id, grantId: grant.id});
    });

    it('should get grant by id', async () => {
      const grantFromGet = await client.applicationApi.getScopeConsentGrant({appId: application.id, grantId: grant.id});
      expect(grantFromGet).to.be.exist;
      expect(grantFromGet).to.be.instanceOf(OAuth2ScopeConsentGrant);
    });
  });

  describe('Revoke grant', () => {
    beforeEach(async () => {
      grant = await client.applicationApi.grantConsentToScope({appId: application.id,
        oAuth2ScopeConsentGrant: {
          issuer,
          scopeId: 'okta.users.manage'
        }
      });
    });

    it('should revoke grant', async () => {
      await client.applicationApi.revokeScopeConsentGrant({appId: application.id, grantId: grant.id});
      try {
        await client.applicationApi.getScopeConsentGrant({appId: application.id, grantId: grant.id});
      } catch (err) {
        expect(err.status).to.equal(404);
      }
    });
  });
});

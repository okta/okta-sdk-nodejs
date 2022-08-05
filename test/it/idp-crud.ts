import { expect } from 'chai';
import { spy } from 'sinon';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  IdentityProvider,
} from '@okta/okta-sdk-nodejs';
import getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
import getMockFacebookIdp = require('./mocks/facebook-idp.js');
import getMockGoogleIdp = require('./mocks/google-idp.js');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-crud`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Idp Crud API', () => {
  describe('List idps', () => {
    const idps = [];
    before(async () => {
      const mockIdps = [
        getMockGenericOidcIdp(),
        getMockGenericOidcIdp(),
        getMockFacebookIdp(),
        getMockGoogleIdp()
      ];
      for (const mockIdp of mockIdps) {
        const idp = await client.createIdentityProvider(mockIdp);
        idps.push(idp);
      }
    });

    after(async () => {
      await Promise.all(idps.map(async idp =>
        await client.deleteIdentityProvider(idp.id)
      ));
    });

    it('should return a Collection of IdentityProvider', async () => {
      const idps = await client.listIdentityProviders();
      expect(idps).to.be.instanceOf(Collection);
      await idps.each(idp => {
        expect(idp).to.be.instanceOf(IdentityProvider);
      });
    });

    it('should return a collection with pagination', async () => {
      const listIds = new Set();
      const collection = await client.listIdentityProviders({
        limit: 2
      });
      const pageSpy = spy(collection, 'getNextPage');
      await collection.each(idp => {
        expect(listIds.has(idp.id)).to.be.false;
        listIds.add(idp.id);
      });
      expect(listIds.size).to.be.greaterThanOrEqual(4);
      expect(pageSpy.getCalls().length).to.be.greaterThanOrEqual(2);
    });

    // TODO: OKTA-515269 - Filter by type does not work correctly
    xit('should filter idps by type', async () => {
      await (await client.listIdentityProviders({ type: 'FACEBOOK' })).each(idp => {
        expect(idp.type).to.equal('FACEBOOK');
      });
      await (await client.listIdentityProviders({ type: 'GOOGLE' })).each(idp => {
        expect(idp.type).to.equal('GOOGLE');
      });
      await (await client.listIdentityProviders({ type: 'OIDC' })).each(idp => {
        expect(idp.type).to.equal('OIDC');
      });
    });

    // TODO: OKTA-515269 - Filter with q does not work correctly
    xit('should search idps with q', async () => {
      await (await client.listIdentityProviders({ q: 'node-sdk: Facebook' })).each(idp => {
        expect(idp.type).to.equal('FACEBOOK');
      });
      await (await client.listIdentityProviders({ q: 'node-sdk: Google' })).each(idp => {
        expect(idp.type).to.equal('GOOGLE');
      });
      await (await client.listIdentityProviders({ q: 'node-sdk: OIDC' })).each(idp => {
        expect(idp.type).to.equal('OIDC');
      });
    });
  });

  describe('Create idp', () => {
    let idp;
    afterEach(async () => {
      await client.deleteIdentityProvider(idp.id);
    });

    it('should create instance of IdentityProvider', async () => {
      const mockGenericOidcIdp = getMockGenericOidcIdp();
      idp = await client.createIdentityProvider(mockGenericOidcIdp);
      expect(idp).to.be.instanceOf(IdentityProvider);
      expect(idp).to.have.property('id');
      expect(idp.name).to.equal(mockGenericOidcIdp.name);
      expect(typeof idp.type).to.equal('string');
      expect(idp.type).to.equal('OIDC');
    });
  });

  describe('Get idp', () => {
    let idp;
    beforeEach(async () => {
      idp = await client.createIdentityProvider(getMockGenericOidcIdp());
    });

    afterEach(async () => {
      await client.deleteIdentityProvider(idp.id);
    });

    it('should get IdentityProvider by id', async () => {
      const idpFromGet = await client.getIdentityProvider(idp.id);
      expect(idpFromGet).to.be.instanceOf(IdentityProvider);
      expect(idpFromGet.name).to.equal(idp.name);
    });
  });

  describe('Update idp', () => {
    let idp;
    let updatedIdp;
    beforeEach(async () => {
      idp = await client.createIdentityProvider(getMockGenericOidcIdp());
    });

    afterEach(async () => {
      await client.deleteIdentityProvider(idp.id);
    });

    it('should update all properties in template', async () => {
      const mockName = 'Mock update idp';
      idp.name = mockName;
      updatedIdp = await client.updateIdentityProvider(idp.id, idp);
      expect(updatedIdp.id).to.equal(idp.id);
      expect(updatedIdp.name).to.equal(mockName);
    });
  });

  describe('Delete idp', () => {
    let idp;
    beforeEach(async () => {
      idp = await client.createIdentityProvider(getMockGenericOidcIdp());
    });

    it('should not get idp after deletion', async () => {
      await client.deleteIdentityProvider(idp.id);
      try {
        await client.getIdentityProvider(idp.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

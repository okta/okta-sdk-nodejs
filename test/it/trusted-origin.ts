import { expect } from 'chai';
import {
  v3,
  Client,
  Collection,
  DefaultRequestExecutor
} from '@okta/okta-sdk-nodejs';
import getMockTrustedOrigin = require('./mocks/trusted-origin');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-crud`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Trusted Origin API', () => {
  describe('Create Trusted Origin', () => {
    let trustedOrigin: v3.TrustedOrigin;
    afterEach(async () => {
      await client.deactivateOrigin(trustedOrigin.id);
      await client.deleteOrigin(trustedOrigin.id);
    });

    it('should return correct model', async () => {
      const mockTrustedOrigin = getMockTrustedOrigin();
      trustedOrigin = await client.createOrigin(mockTrustedOrigin);
      expect(trustedOrigin).to.be.instanceOf(v3.TrustedOrigin);
      expect(trustedOrigin.id).to.be.exist;
      expect(trustedOrigin.name).to.be.equal(mockTrustedOrigin.name);
      expect(trustedOrigin.origin).to.be.equal(mockTrustedOrigin.origin);
    });
  });

  describe('List Trusted Origins', () => {
    let trustedOrigin: v3.TrustedOrigin;
    beforeEach(async () => {
      trustedOrigin = await client.createOrigin(getMockTrustedOrigin());
    });
    afterEach(async () => {
      await client.deactivateOrigin(trustedOrigin.id);
      await client.deleteOrigin(trustedOrigin.id);
    });

    it('should return a collection of TrustedOrigin', async () => {
      const collection = await client.listOrigins();
      expect(collection).to.be.instanceOf(Collection);
      const trustedOrigins = await collection.getNextPage();
      expect(trustedOrigins).to.be.an('array').that.is.not.empty;
      const trustedOriginFromCollection = trustedOrigins.find(as => as.name === trustedOrigin.name);
      expect(trustedOriginFromCollection).to.be.exist;
    });
  });

  describe('Get Trusted Origin', () => {
    let trustedOrigin: v3.TrustedOrigin;
    beforeEach(async () => {
      trustedOrigin = await client.createOrigin(getMockTrustedOrigin());
    });
    afterEach(async () => {
      await client.deactivateOrigin(trustedOrigin.id);
      await client.deleteOrigin(trustedOrigin.id);
    });

    it('should get trusted origin by id', async () => {
      const trustedOriginFromGet = await client.getOrigin(trustedOrigin.id);
      expect(trustedOriginFromGet).to.be.instanceOf(v3.TrustedOrigin);
      expect(trustedOriginFromGet.name).to.equal(trustedOrigin.name);
    });
  });

  describe('Update Trusted Origin', () => {
    let trustedOrigin: v3.TrustedOrigin;
    beforeEach(async () => {
      trustedOrigin = await client.createOrigin(getMockTrustedOrigin());
    });
    afterEach(async () => {
      await client.deactivateOrigin(trustedOrigin.id);
      await client.deleteOrigin(trustedOrigin.id);
    });

    it('should update name for created trusted origin', async () => {
      const mockName = 'Mock update trusted origin';
      trustedOrigin.name = mockName;
      const updatedTrustedOrigin = await client.updateOrigin(trustedOrigin.id, trustedOrigin);
      expect(updatedTrustedOrigin.id).to.equal(trustedOrigin.id);
      expect(updatedTrustedOrigin.name).to.equal(mockName);
    });

    it('should update origin for created trusted origin', async () => {
      const mockOrigin = 'https://example.com/';
      trustedOrigin.origin = mockOrigin;
      const updatedTrustedOrigin = await client.updateOrigin(trustedOrigin.id, trustedOrigin);
      expect(updatedTrustedOrigin.id).to.equal(trustedOrigin.id);
      expect(updatedTrustedOrigin.origin).to.equal(mockOrigin);
    });

    it('should update scopes for created trusted origin', async () => {
      const mockScopes = [
        {
          type: 'REDIRECT',
        }
      ] as Array<v3.TrustedOriginScope>;
      trustedOrigin.scopes = mockScopes;
      const updatedTrustedOrigin = await client.updateOrigin(trustedOrigin.id, trustedOrigin);
      expect(updatedTrustedOrigin.id).to.equal(trustedOrigin.id);
      expect(updatedTrustedOrigin.scopes.length).to.eq(1);
      expect(updatedTrustedOrigin.scopes[0].type).to.eq(mockScopes[0].type);
    });
  });

  describe('Activate and deactivate Trusted Origin', () => {
    let trustedOrigin: v3.TrustedOrigin;
    beforeEach(async () => {
      trustedOrigin = await client.createOrigin(getMockTrustedOrigin());
    });
    afterEach(async () => {
      await client.deactivateOrigin(trustedOrigin.id);
      await client.deleteOrigin(trustedOrigin.id);
    });

    it('should be active by default, can be deactivated and activated', async () => {
      expect(trustedOrigin.status).to.equal('ACTIVE');

      // deactivate
      let response = await client.deactivateOrigin(trustedOrigin.id);
      expect(response.status).to.equal('INACTIVE');
      let updatedtrustedOrigin = await client.getOrigin(trustedOrigin.id);
      expect(updatedtrustedOrigin.status).to.equal('INACTIVE');

      // activate
      response = await client.activateOrigin(trustedOrigin.id);
      expect(response.status).to.equal('ACTIVE');
      updatedtrustedOrigin = await client.getOrigin(trustedOrigin.id);
      expect(updatedtrustedOrigin.status).to.equal('ACTIVE');
    });
  });

  describe('Delete Trusted Origin', () => {
    let trustedOrigin: v3.TrustedOrigin;
    beforeEach(async () => {
      trustedOrigin = await client.createOrigin(getMockTrustedOrigin());
    });

    it('should not get trusted origin after deletion', async () => {
      await client.deactivateOrigin(trustedOrigin.id);
      const res = await client.deleteOrigin(trustedOrigin.id);
      expect(res).to.equal(undefined);
      try {
        await client.getOrigin(trustedOrigin.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

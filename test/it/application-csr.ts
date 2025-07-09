import { expect } from 'chai';
import utils = require('../utils');
import forge = require('node-forge');
import getMockApplication = require('./mocks/application-oidc');
import {
  Client,
  Application,
  Collection,
  Csr,
  DefaultRequestExecutor,
  JsonWebKey,
} from '@okta/okta-sdk-nodejs';
import mockCsr = require('./mocks/csr.json');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-csr`;
}

const client = new Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application CSR API', () => {
  let app: Application;
  let csr, keys;

  before(async () => {
    app = await client.applicationApi.createApplication({application: getMockApplication()});
  });
  after(async () => {
    await client.applicationApi.deactivateApplication({appId: app.id});
    await client.applicationApi.deleteApplication({appId: app.id});
  });

  describe('Generate signing csr', () => {
    afterEach(async () => {
      await client.applicationApi.revokeCsrFromApplication({appId: app.id, csrId: csr.id});
    });

    it('should generate csr', async () => {
      csr = await client.applicationApi.generateCsrForApplication({appId: app.id, metadata: mockCsr});
      expect(csr).to.be.exist;
    });
  });

  describe('List signing csrs', () => {
    beforeEach(async () => {
      csr = await client.applicationApi.generateCsrForApplication({appId: app.id, metadata: mockCsr});
    });
    afterEach(async () => {
      await client.applicationApi.revokeCsrFromApplication({appId: app.id, csrId: csr.id});
    });

    it('should return a Collection', async () => {
      const csrs = await client.applicationApi.listCsrsForApplication({appId: app.id});
      expect(csrs).to.be.instanceOf(Collection);
    });

    it('should resolve CSR in collection', async () => {
      await (await client.applicationApi.listCsrsForApplication({appId: app.id})).each(csr => {
        expect(csr).to.be.instanceOf(Csr);
      });
    });
  });

  describe('Delete signing csr', () => {
    beforeEach(async () => {
      csr = await client.applicationApi.generateCsrForApplication({appId: app.id, metadata: mockCsr});
    });

    it('should delete csr', async () => {
      await client.applicationApi.revokeCsrFromApplication({appId: app.id, csrId: csr.id});
      try {
        csr = await client.applicationApi.getCsrForApplication({appId: app.id, csrId: csr.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

  describe('Publish signing csr', () => {
    beforeEach(async () => {
      keys = forge.pki.rsa.generateKeyPair(2048);
      csr = await client.applicationApi.generateCsrForApplication({appId: app.id, metadata: mockCsr});
    });

    it('should publish cert and remove csr (DER base64)', async () => {
      const certF = utils.createCertFromCsr(csr, keys);
      const b64 = utils.certToBase64(certF);
      const n = utils.csrToN(csr);

      const key = await client.applicationApi.publishCsrFromApplication({
        appId: app.id,
        csrId: csr.id,
        body: {
          data: Buffer.from(b64),
          name: 'csr.der'
        }
      });
      expect(key).to.be.instanceOf(JsonWebKey);
      expect(key.n).to.equal(n);
      expect(key.x5c[0]).to.equal(b64);

      try {
        csr = await client.applicationApi.getCsrForApplication({appId: app.id, csrId: csr.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });

    it('should publish cert and remove csr (PEM)', async () => {
      const certF = utils.createCertFromCsr(csr, keys);
      const b64 = utils.certToBase64(certF);
      const pem = utils.certToPem(certF);
      const n = utils.csrToN(csr);

      const key = await client.applicationApi.publishCsrFromApplication({
        appId: app.id,
        csrId: csr.id,
        body: {
          data: Buffer.from(pem),
          name: 'csr.pem'
        }
      });
      expect(key).to.be.instanceOf(JsonWebKey);
      expect(key.n).to.equal(n);
      expect(key.x5c[0]).to.equal(b64);

      try {
        csr = await client.applicationApi.getCsrForApplication({appId: app.id, csrId: csr.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });

    it('should publish cert and remove csr (DER)', async () => {
      const certF = utils.createCertFromCsr(csr, keys);
      const der = utils.certToDer(certF);
      const b64 = utils.certToBase64(certF);
      const n = utils.csrToN(csr);

      const key = await client.applicationApi.publishCsrFromApplication({
        appId: app.id,
        csrId: csr.id,
        body: {
          data: Buffer.from(der),
          name: 'csr.der'
        }
      });
      expect(key).to.be.instanceOf(JsonWebKey);
      expect(key.n).to.equal(n);
      expect(key.x5c[0]).to.equal(b64);

      try {
        csr = await client.applicationApi.getCsrForApplication({appId: app.id, csrId: csr.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });

});

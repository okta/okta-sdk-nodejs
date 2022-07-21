import { expect } from 'chai';

import utils = require('../utils');
import forge = require('node-forge');
import getMockApplication = require('./mocks/application-oidc');
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
import mockCsr = require('./mocks/csr.json');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-clone-key`;
}

const client = new Client({
  scopes: ['okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Application CSR API', () => {
  let app;
  let csr, keys;

  before(async () => {
    app = await client.createApplication(getMockApplication());
  });
  after(async () => {
    await client.deactivateApplication(app.id);
    await client.deleteApplication(app.id);
  });

  describe('Generate signing csr', () => {
    afterEach(async () => {
      await client.revokeCsrFromApplication(app.id, csr.id);
    });

    it('should generate csr', async () => {
      csr = await client.generateCsrForApplication(app.id, mockCsr);
      expect(csr).to.be.exist;
    });
  });

  describe('List signing csrs', () => {
    beforeEach(async () => {
      csr = await client.generateCsrForApplication(app.id, mockCsr);
    });
    afterEach(async () => {
      await client.revokeCsrFromApplication(app.id, csr.id);
    });

    it('should return a Collection', async () => {
      const csrs = await client.listCsrsForApplication(app.id);
      expect(csrs).to.be.instanceOf(Collection);
    });

    it('should resolve CSR in collection', async () => {
      await (await client.listCsrsForApplication(app.id)).each(csr => {
        expect(csr).to.be.instanceOf(v3.Csr);
      });
    });
  });

  describe('Delete signing csr', () => {
    beforeEach(async () => {
      csr = await client.generateCsrForApplication(app.id, mockCsr);
    });

    it('should delete csr', async () => {
      await client.revokeCsrFromApplication(app.id, csr.id);
      try {
        csr = await client.getCsrForApplication(app.id, csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });

    describe('Publish signing csr', () => {
      beforeEach(async () => {
        keys = forge.pki.rsa.generateKeyPair(2048);
        csr = await client.generateCsrForApplication(app.id, mockCsr);
      });

      it('should publish cert and remove csr (DER base64)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const b64 = utils.certToBase64(certF);
        const n = utils.csrToN(csr);

        const key = await client.publishCerCert(app.id, csr.id, b64);
        expect(key).to.be.instanceOf(v3.JsonWebKey);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.getCsrForApplication(app.id, csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });

      it('should publish cert and remove csr (PEM)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const b64 = utils.certToBase64(certF);
        const pem = utils.certToPem(certF);
        const n = utils.csrToN(csr);

        const key = await client.publishCerCert(app.id, csr.id, pem);
        expect(key).to.be.instanceOf(v3.JsonWebKey);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.getCsrForApplication(app.id, csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });

      it('should publish cert and remove csr (DER)', async () => {
        const certF = utils.createCertFromCsr(csr, keys);
        const der = utils.certToDer(certF);
        const b64 = utils.certToBase64(certF);
        const n = utils.csrToN(csr);

        const key = await client.publishCerCert(app.id, csr.id, der);
        expect(key).to.be.instanceOf(v3.JsonWebKey);
        expect(key.n).to.equal(n);
        expect(key.x5c[0]).to.equal(b64);

        try {
          csr = await client.getCsrForApplication(app.id, csr.id);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });

});

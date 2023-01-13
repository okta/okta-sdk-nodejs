import {
  DefaultRequestExecutor,
  Client,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.logs.read'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});


describe('Domains API', () => {

  afterEach(async () => {
    const list = await client.customDomainApi.listCustomDomains();
    list.domains.forEach(async (domain) => {
      await client.customDomainApi.deleteCustomDomain({
        domainId: domain.id
      });
    });
    await utils.delay(3000);
  });

  it('can create, list and get domains by id', async function () {
    try {
      const createdDomain = await client.customDomainApi.createCustomDomain({
        domain: {
          domain: 'login.example.com',
          certificateSourceType: 'MANUAL',
        }
      });
      expect(createdDomain.dnsRecords.length).to.be.greaterThanOrEqual(1);

      const domainsList = await client.customDomainApi.listCustomDomains()
      expect(domainsList.domains.length).to.equal(1);

      const fetchedDomain = await client.customDomainApi.getCustomDomain({
        domainId: createdDomain.id
      });
      expect(fetchedDomain.id).to.equal(createdDomain.id);
    } catch (e) {
      expect(e.status).to.equal(429);
      expect(e.message).to.contain('API call exceeded rate limit due to too many requests');
      this.skip();
    }
  });

  it('fails to create certificate for unverified domain', async function () {
    try {
      const createdDomain = await client.customDomainApi.createCustomDomain({
        domain: {
          domain: 'login2.example.com',
          certificateSourceType: 'MANUAL',
        }
      });
      try {
        await client.customDomainApi.upsertCertificate({
          domainId: createdDomain.id,
          certificate: {
            certificate: 'cert',
            privateKey: 'pk',
          }
        });
      } catch (err) {
        expect(err.status).to.equal(403);
      }
    } catch (e) {
      expect(e.status).to.equal(429);
      expect(e.message).to.contain('API call exceeded rate limit due to too many requests');
      this.skip();
    }
  });

  it('can initiate domain verification', async function () {
    try {
      const createdDomain = await client.customDomainApi.createCustomDomain({
        domain: {
          domain: 'login3.example.com',
          certificateSourceType: 'MANUAL',
        }
      });
      expect(createdDomain.validationStatus).to.equal('NOT_STARTED');

      await client.customDomainApi.verifyDomain({
        domainId: createdDomain.id
      });
      const verifiedDomain = await client.customDomainApi.getCustomDomain({
        domainId: createdDomain.id
      });
      expect(verifiedDomain.validationStatus).to.equal('FAILED_TO_VERIFY');
    } catch (e) {
      expect(e.status).to.equal(429);
      expect(e.message).to.contain('API call exceeded rate limit due to too many requests');
      this.skip();
    }
  });
});

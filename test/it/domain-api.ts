import {
  DefaultRequestExecutor,
  ApiClient,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;

const client = new ApiClient({
  scopes: ['okta.clients.manage', 'okta.logs.read'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});


describe('Domains API', () => {
  const deleteCustomDomains = async () => {
    const domains = await client.customDomainApi.listCustomDomains();
    for (const domain of domains.domains) {
      const canDelete = domain.certificateSourceType === 'MANUAL';
      if (canDelete) {
        await client.customDomainApi.deleteCustomDomain({
          domainId: domain.id
        });
      }
    }

    const brands = await client.customizationApi.listBrands();
    const brandIdsToDelete = [];
    await brands.each(brand => {
      if (brand.name.match(/^.+\.example\.com$/)) {
        brandIdsToDelete.push(brand.id);
      }
    });
    for (const brandId of brandIdsToDelete) {
      await client.customizationApi.deleteBrand({ brandId });
    }

    await utils.delay(3000);
  };

  // clear out custom domains before attempting any tests in case
  // afterEach hook failed to run in a previous run due to test abort/timeout
  before(deleteCustomDomains);
  afterEach(deleteCustomDomains);

  it('can create, list and get domains by id', async function () {
    try {
      const createdDomain = await client.customDomainApi.createCustomDomain({
        domain: {
          domain: 'login.example.com',
          certificateSourceType: 'MANUAL',
        }
      });
      expect(createdDomain.dnsRecords.length).to.be.greaterThanOrEqual(1);

      const domainsList = await client.customDomainApi.listCustomDomains();
      const customDomains = domainsList.domains
        .filter(domain => domain.certificateSourceType === 'MANUAL');
      expect(customDomains.length).to.equal(1);

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
            certificateChain: 'chain',
            type: 'PEM'
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

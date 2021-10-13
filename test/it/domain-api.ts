import {
  Client,
  DomainValidationStatus,
  DomainCertificateSourceType,
} from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';


const client = new Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Domains API', () => {
  afterEach(async () => {
    (await client.listDomains()).domains.forEach(domain => client.deleteDomain(domain.id));
  });

  it('can create, list and get domains by id', async () => {
    const createdDomain = await client.createDomain({
      domain: 'login.example.com',
      certificateSourceType: DomainCertificateSourceType.MANUAL,
    });
    expect(createdDomain.dnsRecords.length).to.be.greaterThanOrEqual(1);

    const domainsList = await client.listDomains();
    expect(domainsList.domains.length).to.equal(1);

    const fetchedDomain = await client.getDomain(createdDomain.id);
    expect(fetchedDomain.id).to.equal(createdDomain.id);
  });

  it('fails to create certificate for unverified domain', async () => {
    const createdDomain = await client.createDomain({
      domain: 'login2.example.com',
      certificateSourceType: DomainCertificateSourceType.MANUAL,
    });
    try {
      await client.createCertificate(createdDomain.id, {
        certificate: 'cert',
        privateKey: 'pk',
      });
    } catch (err) {
      expect(err.status).to.equal(403);
    }
  });

  it('can initiate domain verification', async () => {
    const createdDomain = await client.createDomain({
      domain: 'login3.example.com',
      certificateSourceType: DomainCertificateSourceType.MANUAL,
    });
    expect(createdDomain.validationStatus).to.equal(DomainValidationStatus.NOT_STARTED);

    await client.verifyDomain(createdDomain.id);
    const verifiedDomain = await client.getDomain(createdDomain.id);
    expect(verifiedDomain.validationStatus).to.equal('FAILED_TO_VERIFY');
  });
});

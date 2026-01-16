import {
  Client,
  DefaultRequestExecutor,
  DomainResponse,
  EmailDomainResponse,
  EmailDomainResponseWithEmbedded,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import { expect } from 'chai';

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.brands.read',
    'okta.brands.manage',
    'okta.emailDomains.read',
    'okta.emailDomains.manage',
    'okta.domains.read',
    'okta.domains.manage'
  ]
});

describe('EmailDomainApi', () => {
  let customDomain: DomainResponse;
  let emailDomain: EmailDomainResponse;

  before(async () => {
    const domainName = `${faker.internet.domainWord()}.acme.com`;
    customDomain = await client.customDomainApi.createCustomDomain({
      domain: {
        domain: domainName,
        certificateSourceType: 'MANUAL',
      }
    });
  });

  after(async () => {
    if (emailDomain) {
      await client.emailDomainApi.deleteEmailDomain({
        emailDomainId: emailDomain.id,
      });
    }
    if (customDomain) {
      await client.customDomainApi.deleteCustomDomain({
        domainId: customDomain.id
      });
    }
    if (customDomain?.brandId) {
      await client.customizationApi.deleteBrand({
        brandId: customDomain.brandId
      });
    }
  });

  it('Create', async () => {
    const displayName = `node-sdk: EmailDomain ${faker.random.word()}`.substring(0, 49);
    const userName = `nodesdk_user_${faker.random.word()}`;
    emailDomain = await client.emailDomainApi.createEmailDomain({
      emailDomain: {
        brandId: customDomain.brandId,
        domain: customDomain.domain,
        displayName,
        userName,
      }
    });
    expect(emailDomain.domain).to.contain('acme.com');
    expect(emailDomain.userName).to.equal(userName);
    expect(emailDomain.displayName).to.equal(displayName);
  });

  it('Get', async () => {
    const emailDomainFromGet = await client.emailDomainApi.getEmailDomain({
      emailDomainId: emailDomain.id,
    });
    expect(emailDomainFromGet.displayName).to.equal(emailDomain.displayName);
  });

  it('Update', async () => {
    const displayName = `node-sdk: EmailDomain ${faker.random.word()}`.substring(0, 49);
    const userName = `nodesdk_user_${faker.random.word()}`;
    emailDomain = await client.emailDomainApi.replaceEmailDomain({
      emailDomainId: emailDomain.id,
      updateEmailDomain: {
        userName,
        displayName,
      }
    });
    expect(emailDomain.displayName).to.equal(displayName);
  });

  it('Delete', async () => {
    await client.emailDomainApi.deleteEmailDomain({
      emailDomainId: emailDomain.id,
    });

    const emailDomainCollection = await client.emailDomainApi.listEmailDomains();
    const emailDomains: EmailDomainResponseWithEmbedded[] = [];
    await emailDomainCollection.each(ed => {
      if (ed.validationStatus !== 'DELETED') {
        emailDomains.push(ed);
      }
    });
    expect(emailDomains.map(ed => ed.displayName)).to.not.include(emailDomain.displayName);
  });
});

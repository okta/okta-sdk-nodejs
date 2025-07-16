import {
  Client,
  DefaultRequestExecutor,
  SecurityEventsProviderResponse,
  SecurityEventsProviderRequest,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import { expect } from 'chai';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-token`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.apps.read',
    'okta.apps.manage'
  ]
});

describe('SSFReceiverApi', () => {
  let provider: SecurityEventsProviderResponse;

  it('Create provider with well-known URL', async () => {
    const name = `node-sdk: SecEvProvider ${faker.random.word()}`.substring(0, 49);
    const well_known_url = 'https://bolt.okta.com/.well-known/ssf-configuration';
    provider = await client.ssfReceiverApi.createSecurityEventsProviderInstance({
      instance: {
        name,
        type: 'okta',
        settings: {
          well_known_url
        }
      }
    });
    expect(provider.name).to.equal(name);
    expect(provider.type).to.equal('okta');
    expect(provider.settings.well_known_url).to.equal(well_known_url);
  });

  it('List', async () => {
    const collection = await client.ssfReceiverApi.listSecurityEventsProviderInstances({});
    const providers: SecurityEventsProviderResponse[] = [];
    await collection.each(pr => providers.push(pr));
    expect(providers.length).to.be.greaterThanOrEqual(1);
    expect(providers.map(pr => pr.name)).to.include(provider.name);
  });

  it('Deactivate', async () => {
    provider = await client.ssfReceiverApi.deactivateSecurityEventsProviderInstance({
      securityEventProviderId: provider.id
    });
    expect(provider.status).to.equal('INACTIVE');
  });

  it('Activate', async () => {
    provider = await client.ssfReceiverApi.activateSecurityEventsProviderInstance({
      securityEventProviderId: provider.id
    });
    expect(provider.status).to.equal('ACTIVE');
  });

  it('Update', async () => {
    const name = `node-sdk: SecEvProvider ${faker.random.word()}`.substring(0, 49);
    const well_known_url = provider.settings.well_known_url;
    provider = await client.ssfReceiverApi.replaceSecurityEventsProviderInstance({
      securityEventProviderId: provider.id,
      instance: {
        name,
        type: 'okta',
        settings: {
          well_known_url
        }
      }
    });
    expect(provider.name).to.equal(name);
    expect(provider.settings.well_known_url).to.equal(well_known_url);
  });

  it('Delete', async () => {
    await client.ssfReceiverApi.deleteSecurityEventsProviderInstance({
      securityEventProviderId: provider.id
    });

    try {
      provider = await client.ssfReceiverApi.getSecurityEventsProviderInstance({
        securityEventProviderId: provider.id
      });
    } catch (e) {
      expect(e.status).to.equal(404);
      provider = undefined;
    }
    expect(provider).to.be.undefined;
  });
});

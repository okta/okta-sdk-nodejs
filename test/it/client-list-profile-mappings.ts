import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  ProfileMapping,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-profile-mappings`;
}

const client = new Client({
  scopes: ['okta.clients.read'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.listProfileMappings()', () => {
  // OKTA-397861: update org configuration to enable the test
  xit('should return a collection', async () => {
    const collection = await client.profileMappingApi.listProfileMappings();
    const profileMappings: ProfileMapping[] = [];
    await collection.each(profileMapping => profileMappings.push(profileMapping));
    expect(profileMappings).to.be.an('array').that.is.not.empty;
  });
});

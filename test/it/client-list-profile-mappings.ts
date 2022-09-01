import { expect } from 'chai';
import {
  DefaultRequestExecutor,
  ProfileMapping,
} from '@okta/okta-sdk-nodejs';
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-profile-mappings`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.clients.read'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.listProfileMappings()', () => {
  // OKTA-397861: update org configuration to enable the test
  xit('should return a collection', async () => {
    const collection = await client.listProfileMappings();
    const profileMappings: ProfileMapping[] = [];
    await collection.each(profileMapping => profileMappings.push(profileMapping));
    expect(profileMappings).to.be.an('array').that.is.not.empty;
  });
});

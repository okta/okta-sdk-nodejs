import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  PerClientRateLimitSettings,
} from '@okta/okta-sdk-nodejs';

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Rate Limit Settings API', () => {
  it('Get per-client rate limit settings', async () => {
    const rateLimitSettings = await client.rateLimitSettingsApi.getRateLimitSettingsPerClient({});
    expect(rateLimitSettings).to.be.instanceOf(PerClientRateLimitSettings);
  });
});

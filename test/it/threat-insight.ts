import { expect } from 'chai';
import {
  DefaultRequestExecutor,
  ThreatInsightConfiguration,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;
if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/threat-insight`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Threat Insight API', () => {
  afterEach(async () => {
    await client.updateConfiguration({
      action: 'none'
    });
  });

  beforeEach(async () => {
    await client.updateConfiguration({
      action: 'none'
    });
  });

  it('gets configuration', async () => {
    const configuration = await client.getCurrentConfiguration();
    expect(configuration).to.be.instanceOf(ThreatInsightConfiguration);
  });

  it('updates configuration', async () => {
    const configuration = await client.updateConfiguration({
      action: 'audit'
    });
    expect(configuration).to.be.instanceOf(ThreatInsightConfiguration);
    expect(configuration.action).to.equal('audit');
  });
});

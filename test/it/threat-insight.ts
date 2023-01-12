import { expect } from 'chai';
import {
  DefaultRequestExecutor,
  ThreatInsightConfiguration,
  Client
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
    await client.threatInsightApi.updateConfiguration({
      threatInsightConfiguration: {
        action: 'none'
      }
    });
  });

  beforeEach(async () => {
    await client.threatInsightApi.updateConfiguration({
      threatInsightConfiguration: {
        action: 'none'
      }
    });
  });

  it('gets configuration', async () => {
    const configuration = await client.threatInsightApi.getCurrentConfiguration();
    expect(configuration).to.be.instanceOf(ThreatInsightConfiguration);
  });

  it('updates configuration', async () => {
    const configuration = await client.threatInsightApi.updateConfiguration({
      threatInsightConfiguration: {
        action: 'audit'
      }
    });
    expect(configuration).to.be.instanceOf(ThreatInsightConfiguration);
    expect(configuration.action).to.equal('audit');
  });
});

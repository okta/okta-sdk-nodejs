import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/agent-pools`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Agent Pools API', () => {
  describe('List Agent Pools', () => {
    it('should return a Collection', async () => {
      const agentPools = await client.agentPoolsApi.getAgentPools();
      expect(agentPools).to.be.instanceOf(Collection);
      await agentPools.each(ap => {
        expect(ap).to.be.instanceOf(v3.AgentPool);
      });
    });
  });
});

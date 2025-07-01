import { expectType } from 'tsd';
import { ApiClient } from '../../src/types/client';
import { AgentPoolUpdate } from '../../src/types/generated/models/AgentPoolUpdate';
import { AgentPoolUpdateSetting } from '../../src/types/generated/models/AgentPoolUpdateSetting';
import { AgentPool } from '../../src/types/generated/models/AgentPool';
import { Agent } from '../../src/types/generated/models/Agent';

const client = new ApiClient();
(async function () {

  const agent: Agent = {
    id: 'testAgentId',
    name: 'testAgent',
    type: 'AD',
    isHidden: false,
    isLatestGAedVersion: true,
    lastConnection: new Date(),
    operationalStatus: 'OPERATIONAL',
    poolId: 'testPoolId',
    updateMessage: 'testMessage',
    updateStatus: 'Success',
    version: '1.0.0',
  };

  const agentPoolUpdate: AgentPoolUpdate = {
    name: 'testUpdate',
    agentType: 'AD',
    agents: [
      agent
    ],
    enabled: true,
    notifyAdmin: true,
    reason: 'testReason',
    schedule: {
      delay: 1,
      duration: 5,
    },
    sortOrder: -1,
    status: 'Paused',
    targetVersion: '1.0.0',
  };

  const agentPoolUpdateSetting: AgentPoolUpdateSetting = {
    agentType: 'AD',
    continueOnError: true,
    latestVersion: '1.0.0',
    minimalSupportedVersion: '1.0.0',
    poolId: 'testPoolId',
    poolName: 'testPool',
    releaseChannel: 'GA',
  };

  const { value: pool } = await (await client.agentPoolsApi.listAgentPools({
    limitPerPoolType: 5,
    poolType: 'AD',
    after: 'testCursorId',
  })).next();
  expectType<AgentPool | null>(pool);

  const { value: upd } = await (await client.agentPoolsApi.listAgentPoolsUpdates({
    poolId: 'testPoolId',
    scheduled: false,
  })).next();
  expectType<AgentPoolUpdate | null>(upd);

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.createAgentPoolsUpdate({
    poolId: 'testPoolId',
    agentPoolUpdate: agentPoolUpdate,
  }));

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.updateAgentPoolsUpdate({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
    agentPoolUpdate: agentPoolUpdate,
  }));

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.activateAgentPoolsUpdate({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
  }));

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.deactivateAgentPoolsUpdate({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
  }));

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.pauseAgentPoolsUpdate({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
  }));

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.resumeAgentPoolsUpdate({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
  }));

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.retryAgentPoolsUpdate({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
  }));

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.stopAgentPoolsUpdate({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
  }));

  expectType<void>(await client.agentPoolsApi.deleteAgentPoolsUpdate({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
  }));

  expectType<AgentPoolUpdate>(await client.agentPoolsApi.getAgentPoolsUpdateInstance({
    poolId: 'testPoolId',
    updateId: 'testUpdateId',
  }));

  expectType<AgentPoolUpdateSetting>(await client.agentPoolsApi.getAgentPoolsUpdateSettings({
    poolId: 'testPoolId',
  }));

  expectType<AgentPoolUpdateSetting>(await client.agentPoolsApi.updateAgentPoolsUpdateSettings({
    poolId: 'testPoolId',
    agentPoolUpdateSetting: agentPoolUpdateSetting,
  }));

}());

import { expect } from 'chai';
import {
  AuthorizationServer,
  AuthorizationServerPolicy,
  AuthorizationServerPolicyRule,
  AuthorizationServerPolicyRuleActions,
  AuthorizationServerPolicyRuleConditions,
  Client,
  Collection,
  DefaultRequestExecutor,
  TokenAuthorizationServerPolicyRuleAction
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import getMockPolicy = require('./mocks/policy-oauth-authorization');
import getMockPolicyRule = require('./mocks/authz-server-policy-rule');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-policy`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Policies API', () => {
  let authServer: AuthorizationServer;
  before(async () => {
    authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
    expect(authServer?.id).to.not.be.undefined;
  });
  after(async () => {
    await client.authorizationServerApi.deactivateAuthorizationServer({authServerId: authServer.id});
    await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
  });

  describe('Authorization Server Policy Rules API', () => {
    let policy: AuthorizationServerPolicy;
    let policyRule: AuthorizationServerPolicyRule;
    beforeEach(async () => {
      policy = await client.authorizationServerApi.createAuthorizationServerPolicy({authServerId: authServer.id, policy: getMockPolicy()});
      expect(policy?.id).to.not.be.undefined;
      policyRule = await client.authorizationServerApi.createAuthorizationServerPolicyRule({policyId: policy.id, authServerId: authServer.id, policyRule: getMockPolicyRule()});
      expect(policyRule?.id).to.not.be.undefined;
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
    });

    it('should return a collection of policies rules', async () => {
      const policyFromGet = await client.authorizationServerApi.getAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
      const policyRules: AuthorizationServerPolicyRule[] = [];
      const collection = await client.authorizationServerApi.listAuthorizationServerPolicyRules({policyId: policyFromGet.id, authServerId: authServer.id});
      await collection.each(policyRule => policyRules.push(policyRule));
      expect(policyRules).is.not.empty;
    });

    it('should get policy rule from auth server with created policy rule id', async () => {
      const policyFromGet = await client.authorizationServerApi.getAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
      const policyRuleFromGet = await client.authorizationServerApi.getAuthorizationServerPolicyRule({policyId: policyFromGet.id, authServerId: authServer.id, ruleId: policyRule.id});

      expect(policyRuleFromGet.actions).to.be.instanceof(AuthorizationServerPolicyRuleActions);
      expect(policyRuleFromGet.actions.token).to.be.instanceof(TokenAuthorizationServerPolicyRuleAction);
      expect(policyRuleFromGet.conditions).to.be.instanceof(AuthorizationServerPolicyRuleConditions);
    });

    it('should delete policy rule', async () => {
      const policyFromGet = await client.authorizationServerApi.getAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
      await client.authorizationServerApi.deleteAuthorizationServerPolicyRule({policyId: policyFromGet.id, authServerId: authServer.id, ruleId: policyRule.id});
      try {
        await client.authorizationServerApi.getAuthorizationServerPolicyRule({policyId: policyFromGet.id, authServerId: authServer.id, ruleId: policyRule.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });

    it('should update policy rule', async () => {
      const policyFromGet = await client.authorizationServerApi.getAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
      let policyRuleFromGet = await client.authorizationServerApi.getAuthorizationServerPolicyRule({policyId: policyFromGet.id, authServerId: authServer.id, ruleId: policyRule.id});
      expect(policyRuleFromGet.actions.token.accessTokenLifetimeMinutes).to.equal(5);

      policyRuleFromGet.actions.token.accessTokenLifetimeMinutes = 360;
      const updatedPolicyRule = await client.authorizationServerApi.replaceAuthorizationServerPolicyRule({policyId: policy.id, authServerId: authServer.id, ruleId: policyRuleFromGet.id, policyRule: policyRuleFromGet});
      policyRuleFromGet = await client.authorizationServerApi.getAuthorizationServerPolicyRule({policyId: policyFromGet.id, authServerId: authServer.id, ruleId: policyRule.id});
      expect(updatedPolicyRule.actions.token.accessTokenLifetimeMinutes).to.equal(360);
      expect(policyRuleFromGet.actions.token.accessTokenLifetimeMinutes).to.equal(360);
    });

    it('should deactivate/activate policy rule', async () => {
      const policyFromGet = await client.authorizationServerApi.getAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
      let policyRuleFromGet = await client.authorizationServerApi.getAuthorizationServerPolicyRule({policyId: policyFromGet.id, authServerId: authServer.id, ruleId: policyRule.id});
      expect(policyRuleFromGet.status).to.equal('ACTIVE');

      let response = await client.authorizationServerApi.deactivateAuthorizationServerPolicyRule({authServerId: authServer.id, policyId: policy.id, ruleId: policyRuleFromGet.id});
      expect(response).to.equal(undefined);
      policyRuleFromGet = await client.authorizationServerApi.getAuthorizationServerPolicyRule({policyId: policyFromGet.id, authServerId: authServer.id, ruleId: policyRule.id});
      expect(policyRuleFromGet.status).to.equal('INACTIVE');

      response = await client.authorizationServerApi.activateAuthorizationServerPolicyRule({authServerId: authServer.id, policyId: policy.id, ruleId: policyRuleFromGet.id});
      expect(response).to.equal(undefined);
      policyRuleFromGet = await client.authorizationServerApi.getAuthorizationServerPolicyRule({policyId: policyFromGet.id, authServerId: authServer.id, ruleId: policyRule.id});
      expect(policyRuleFromGet.status).to.equal('ACTIVE');
    });
  });

  describe('List all policies', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.authorizationServerApi.createAuthorizationServerPolicy({authServerId: authServer.id, policy:getMockPolicy()});
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
    });

    it('should return a collection of policies', async () => {
      const collection = await client.authorizationServerApi.listAuthorizationServerPolicies({authServerId: authServer.id});
      expect(collection).to.be.instanceOf(Collection);
      const policies: AuthorizationServerPolicy[] = [];
      await collection.each((p: AuthorizationServerPolicy) => policies.push(p));
      expect(policies).is.not.empty;
      const policyFindByName = policies.find(p => p.name === policy.name);
      expect(policyFindByName).to.be.exist;
      expect(policyFindByName).to.be.instanceOf(AuthorizationServerPolicy);
    });
  });


  describe('Create a Policy', () => {
    let policy;
    afterEach(async () => {
      await client.authorizationServerApi.deleteAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
    });

    it('should get policy from auth server with created policy id', async () => {
      const mockPolicy = getMockPolicy();
      policy = await client.authorizationServerApi.createAuthorizationServerPolicy({authServerId: authServer.id, policy: mockPolicy});
      expect(policy).to.be.exist;
      expect(policy.name).to.equal(mockPolicy.name);
    });
  });

  describe('Get a policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.authorizationServerApi.createAuthorizationServerPolicy({authServerId: authServer.id, policy:getMockPolicy()});
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
    });

    it('should get policy from auth server by id', async () => {
      const policyFromGet = await client.authorizationServerApi.getAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
      expect(policyFromGet).to.be.instanceOf(AuthorizationServerPolicy);
      expect(policyFromGet.id).to.equal(policy.id);
    });
  });

  describe('Update policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.authorizationServerApi.createAuthorizationServerPolicy({authServerId: authServer.id, policy:getMockPolicy()});
    });
    afterEach(async () => {
      await client.authorizationServerApi.deleteAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
    });

    it('should update name for created policy', async () => {
      const mockName = 'Mock update policy';
      policy.name = mockName;
      const updatedPolicy = await client.authorizationServerApi.replaceAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id, policy});
      expect(updatedPolicy.id).to.equal(policy.id);
      expect(updatedPolicy.name).to.equal(mockName);
    });
  });

  describe('Delete policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.authorizationServerApi.createAuthorizationServerPolicy({authServerId: authServer.id, policy:getMockPolicy()});
    });

    it('should not get policy after deletion', async () => {
      const res = await client.authorizationServerApi.deleteAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
      expect(res).to.equal(undefined);
      try {
        await client.authorizationServerApi.getAuthorizationServerPolicy({authServerId: authServer.id, policyId: policy.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

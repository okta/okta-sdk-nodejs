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
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
    expect(authServer?.id).to.not.be.undefined;
  });
  after(async () => {
    await client.deactivateAuthorizationServer(authServer.id);
    await client.deleteAuthorizationServer(authServer.id);
  });

  describe('Authorization Server Policy Rules API', () => {
    let policy: AuthorizationServerPolicy;
    let policyRule: AuthorizationServerPolicyRule;
    beforeEach(async () => {
      policy = await client.createAuthorizationServerPolicy(authServer.id, getMockPolicy());
      expect(policy?.id).to.not.be.undefined;
      policyRule = await client.createAuthorizationServerPolicyRule(policy.id, authServer.id, getMockPolicyRule());
      expect(policyRule?.id).to.not.be.undefined;
    });
    afterEach(async () => {
      await client.deleteAuthorizationServerPolicy(authServer.id, policy.id);
    });

    it('should return a collection of policies rules', async () => {
      const policyFromGet = await client.getAuthorizationServerPolicy(authServer.id, policy.id);
      const policyRules: AuthorizationServerPolicyRule[] = [];
      const collection = await client.listAuthorizationServerPolicyRules(policyFromGet.id, authServer.id);
      await collection.each(policyRule => policyRules.push(policyRule));
      expect(policyRules).is.not.empty;
    });

    it('should get policy rule from auth server with created policy rule id', async () => {
      const policyFromGet = await client.getAuthorizationServerPolicy(authServer.id, policy.id);
      const policyRuleFromGet = await client.getAuthorizationServerPolicyRule(policyFromGet.id, authServer.id, policyRule.id);

      expect(policyRuleFromGet.actions).to.be.instanceof(AuthorizationServerPolicyRuleActions);
      expect(policyRuleFromGet.actions.token).to.be.instanceof(TokenAuthorizationServerPolicyRuleAction);
      expect(policyRuleFromGet.conditions).to.be.instanceof(AuthorizationServerPolicyRuleConditions);
    });

    it('should delete policy rule', async () => {
      const policyFromGet = await client.getAuthorizationServerPolicy(authServer.id, policy.id);
      await client.deleteAuthorizationServerPolicyRule(policyFromGet.id, authServer.id, policyRule.id);
      try {
        await client.getAuthorizationServerPolicyRule(policyFromGet.id, authServer.id, policyRule.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });

    it('should update policy rule', async () => {
      const policyFromGet = await client.getAuthorizationServerPolicy(authServer.id, policy.id);
      let policyRuleFromGet = await client.getAuthorizationServerPolicyRule(policyFromGet.id, authServer.id, policyRule.id);
      expect(policyRuleFromGet.actions.token.accessTokenLifetimeMinutes).to.equal(5);

      policyRuleFromGet.actions.token.accessTokenLifetimeMinutes = 360;
      const updatedPolicyRule = await client.updateAuthorizationServerPolicyRule(policy.id, authServer.id, policyRuleFromGet.id, policyRuleFromGet);
      policyRuleFromGet = await client.getAuthorizationServerPolicyRule(policyFromGet.id, authServer.id, policyRule.id);
      expect(updatedPolicyRule.actions.token.accessTokenLifetimeMinutes).to.equal(360);
      expect(policyRuleFromGet.actions.token.accessTokenLifetimeMinutes).to.equal(360);
    });

    it('should deactivate/activate policy rule', async () => {
      const policyFromGet = await client.getAuthorizationServerPolicy(authServer.id, policy.id);
      let policyRuleFromGet = await client.getAuthorizationServerPolicyRule(policyFromGet.id, authServer.id, policyRule.id);
      expect(policyRuleFromGet.status).to.equal('ACTIVE');

      let response = await client.deactivateAuthorizationServerPolicyRule(authServer.id, policy.id, policyRuleFromGet.id);
      expect(response).to.equal(undefined);
      policyRuleFromGet = await client.getAuthorizationServerPolicyRule(policyFromGet.id, authServer.id, policyRule.id);
      expect(policyRuleFromGet.status).to.equal('INACTIVE');

      response = await client.activateAuthorizationServerPolicyRule(authServer.id, policy.id, policyRuleFromGet.id);
      expect(response).to.equal(undefined);
      policyRuleFromGet = await client.getAuthorizationServerPolicyRule(policyFromGet.id, authServer.id, policyRule.id);
      expect(policyRuleFromGet.status).to.equal('ACTIVE');
    });
  });

  describe('List all policies', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.createAuthorizationServerPolicy(authServer.id, getMockPolicy());
    });
    afterEach(async () => {
      await client.deleteAuthorizationServerPolicy(authServer.id, policy.id);
    });

    it('should return a collection of policies', async () => {
      const collection = await client.listAuthorizationServerPolicies(authServer.id);
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
      await client.deleteAuthorizationServerPolicy(authServer.id, policy.id);
    });

    it('should get policy from auth server with created policy id', async () => {
      const mockPolicy = getMockPolicy();
      policy = await client.createAuthorizationServerPolicy(authServer.id, mockPolicy);
      expect(policy).to.be.exist;
      expect(policy.name).to.equal(mockPolicy.name);
    });
  });

  describe('Get a policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.createAuthorizationServerPolicy(authServer.id, getMockPolicy());
    });
    afterEach(async () => {
      await client.deleteAuthorizationServerPolicy(authServer.id, policy.id);
    });

    it('should get policy from auth server by id', async () => {
      const policyFromGet = await client.getAuthorizationServerPolicy(authServer.id, policy.id);
      expect(policyFromGet).to.be.instanceOf(AuthorizationServerPolicy);
      expect(policyFromGet.id).to.equal(policy.id);
    });
  });

  describe('Update policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.createAuthorizationServerPolicy(authServer.id, getMockPolicy());
    });
    afterEach(async () => {
      await client.deleteAuthorizationServerPolicy(authServer.id, policy.id);
    });

    it('should update name for created policy', async () => {
      const mockName = 'Mock update policy';
      policy.name = mockName;
      const updatedPolicy = await client.updateAuthorizationServerPolicy(authServer.id, policy.id, policy);
      expect(updatedPolicy.id).to.equal(policy.id);
      expect(updatedPolicy.name).to.equal(mockName);
    });
  });

  describe('Delete policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await client.createAuthorizationServerPolicy(authServer.id, getMockPolicy());
    });

    it('should not get policy after deletion', async () => {
      const res = await client.deleteAuthorizationServerPolicy(authServer.id, policy.id);
      expect(res).to.equal(undefined);
      try {
        await client.getAuthorizationServerPolicy(authServer.id, policy.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

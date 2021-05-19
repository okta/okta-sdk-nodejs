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
  TokenAuthorizationServerPolicyRuleAction} from '@okta/okta-sdk-nodejs';
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
  });
  after(async () => {
    await authServer.deactivate();
    await authServer.delete();
  });

  describe('Authorization Server Policy Rules API', () => {
    let policy: AuthorizationServerPolicy;
    let policyRule: AuthorizationServerPolicyRule;
    beforeEach(async () => {
      policy = await authServer.createPolicy(getMockPolicy());
      policyRule = await policy.createPolicyRule(authServer.id, getMockPolicyRule());
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should return a collection of policies rules', async () => {
      const policyFromGet = await authServer.getPolicy(policy.id);
      const policyRules: AuthorizationServerPolicyRule[] = [];
      const collection = policyFromGet.listPolicyRules(authServer.id);
      await collection.each(policyRule => policyRules.push(policyRule));
      expect(policyRules).is.not.empty;
    });

    it('should get policy rule from auth server with created policy rule id', async () => {
      const policyFromGet = await authServer.getPolicy(policy.id);
      const policyRuleFromGet = await policyFromGet.getPolicyRule(authServer.id, policyRule.id);

      expect(policyRuleFromGet.actions).to.be.instanceof(AuthorizationServerPolicyRuleActions);
      expect(policyRuleFromGet.actions.token).to.be.instanceof(TokenAuthorizationServerPolicyRuleAction);
      expect(policyRuleFromGet.conditions).to.be.instanceof(AuthorizationServerPolicyRuleConditions);
    });

    it('should delete policy rule', async () => {
      const policyFromGet = await authServer.getPolicy(policy.id);
      policyFromGet.deletePolicyRule(authServer.id, policyRule.id);
      try {
        await policyFromGet.getPolicyRule(authServer.id, policyRule.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });

    it('should update policy rule', async () => {
      const policyFromGet = await authServer.getPolicy(policy.id);
      let policyRuleFromGet = await policyFromGet.getPolicyRule(authServer.id, policyRule.id);
      expect(policyRuleFromGet.actions.token.accessTokenLifetimeMinutes).to.equal(5);

      policyRuleFromGet.actions.token.accessTokenLifetimeMinutes = 360;
      const updatedPolicyRule = await policyRuleFromGet.update(policy.id, authServer.id);
      policyRuleFromGet = await policyFromGet.getPolicyRule(authServer.id, policyRule.id);
      expect(updatedPolicyRule.actions.token.accessTokenLifetimeMinutes).to.equal(360);
      expect(policyRuleFromGet.actions.token.accessTokenLifetimeMinutes).to.equal(360);
    });

    it('should deactivate/activate policy rule', async () => {
      const policyFromGet = await authServer.getPolicy(policy.id);
      let policyRuleFromGet = await policyFromGet.getPolicyRule(authServer.id, policyRule.id);
      expect(policyRuleFromGet.status).to.equal('ACTIVE');

      let response = await policyRuleFromGet.deactivate(policy.id);
      expect(response.status).to.equal(204);
      policyRuleFromGet = await policyFromGet.getPolicyRule(authServer.id, policyRule.id);
      expect(policyRuleFromGet.status).to.equal('INACTIVE');

      response = await policyRuleFromGet.deactivate(policy.id);
      expect(response.status).to.equal(204);
      policyRuleFromGet = await policyFromGet.getPolicyRule(authServer.id, policyRule.id);
      expect(policyRuleFromGet.status).to.equal('ACTIVE');
    });
  });

  xdescribe('List all policies', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(getMockPolicy());
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should return a collection of policies', async () => {
      const collection = authServer.listPolicies();
      expect(collection).to.be.instanceOf(Collection);
      const policies: AuthorizationServerPolicy[] = [];
      await collection.each((p: AuthorizationServerPolicy) => policies.push(p));
      expect(policies).is.not.empty;
      const policyFindByName = policies.find(p => p.name === policy.name);
      expect(policyFindByName).to.be.exist;
      expect(policyFindByName).to.be.instanceOf(AuthorizationServerPolicy);
    });
  });


  xdescribe('Create a Policy', () => {
    let policy;
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should get policy from auth server with created policy id', async () => {
      const mockPolicy = getMockPolicy();
      policy = await authServer.createPolicy(mockPolicy);
      expect(policy).to.be.exist;
      expect(policy.name).to.equal(mockPolicy.name);
    });
  });

  xdescribe('Get a policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(getMockPolicy());
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should get policy from auth server by id', async () => {
      const policyFromGet = await authServer.getPolicy(policy.id);
      expect(policyFromGet).to.be.instanceOf(AuthorizationServerPolicy);
      expect(policyFromGet.id).to.equal(policy.id);
    });
  });

  xdescribe('Update policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(getMockPolicy());
    });
    afterEach(async () => {
      await authServer.deletePolicy(policy.id);
    });

    it('should update name for created policy', async () => {
      const mockName = 'Mock update policy';
      policy.name = mockName;
      const updatedPolicy = await authServer.updatePolicy(policy.id, policy);
      expect(updatedPolicy.id).to.equal(policy.id);
      expect(updatedPolicy.name).to.equal(mockName);
    });
  });

  xdescribe('Delete policy', () => {
    let policy;
    beforeEach(async () => {
      policy = await authServer.createPolicy(getMockPolicy());
    });

    it('should not get policy after deletion', async () => {
      const res = await authServer.deletePolicy(policy.id);
      expect(res.status).to.equal(204);
      try {
        await authServer.getPolicy(policy.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

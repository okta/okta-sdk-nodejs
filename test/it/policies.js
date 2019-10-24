const utils = require('../utils');
const okta = require('../../src');
const models = require('../../src/models');
const expect = require('chai').expect;
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policies`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Policy Scenarios', () => {

  it('can create a sign on policy', async () => {
    const policy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: 'node-sdk: CreateOktaSignOnPolicy',
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policy, client);
    const createdPolicy = await client.createPolicy(oktaSignOnPolicy);
    await client.deletePolicy(createdPolicy.id);

    expect(createdPolicy).to.not.be.undefined;
    expect(createdPolicy.name).to.equal(policy.name);
    expect(createdPolicy.type).to.equal(policy.type);
    expect(createdPolicy.status).to.equal(policy.status);
    expect(createdPolicy.description).to.equal(policy.description);
  });

  it('can get a policy', async () => {
    const policy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: 'node-sdk: GetPolicy',
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policy, client);
    const createdPolicy = await client.createPolicy(oktaSignOnPolicy);
    const retrievedPolicy = await client.getPolicy(createdPolicy.id);
    await client.deletePolicy(createdPolicy.id);

    expect(retrievedPolicy).to.not.be.undefined;
    expect(retrievedPolicy.name).to.equal(policy.name);
    expect(retrievedPolicy.type).to.equal(policy.type);
    expect(retrievedPolicy.status).to.equal(policy.status);
    expect(retrievedPolicy.description).to.equal(policy.description);
  });

  it('create sign on policy with group condition', async () => {
      // 1. Create a new group
    const newGroup = {
      profile: {
        name: 'Get Test Group'
      }
    };

    // Cleanup the group if it exists
    await utils.cleanup(client, null, newGroup);

    const createdGroup = await client.createGroup(newGroup);
    utils.validateGroup(createdGroup, newGroup);

    // 2. Set Up Policy JSON
    const policy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: 'node-sdk: CreateOktaSignOnPolicyWithConditions',
      description: 'The default policy applies in all situations if no other policy applies.',
      conditions: {
        people: {
          groups: {
            include: [
              createdGroup.id
            ]
          }
        }
      }
    };
    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policy, client);
    const createdPolicy = await client.createPolicy(oktaSignOnPolicy);
    await client.deletePolicy(createdPolicy.id);

    expect(createdPolicy).to.not.be.undefined;
    expect(createdPolicy.name).to.equal(policy.name);
    expect(createdPolicy.type).to.equal(policy.type);
    expect(createdPolicy.status).to.equal(policy.status);
    expect(createdPolicy.description).to.equal(policy.description);
    expect(createdPolicy.conditions.people.groups.include).to.not.be.empty;
    expect(createdPolicy.conditions.people.groups.include[0]).to.equal(createdGroup.id);
  });

  it('can get policy by type', async () => {
    const policy1 = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: 'node-sdk: Sign On GetAllPoliciesByType ',
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const policy2 = {
      type: 'PASSWORD',
      status: 'ACTIVE',
      name: 'node-sdk: Password GetAllPoliciesByType',
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const oktaSignOnPolicy1 = new models.OktaSignOnPolicy(policy1, client);
    const createdPolicy1 = await client.createPolicy(oktaSignOnPolicy1);

    const oktaSignOnPolicy2 = new models.OktaSignOnPolicy(policy2, client);
    const createdPolicy2 = await client.createPolicy(oktaSignOnPolicy2);

    let signonCount = 0;
    await client.listPolicies({type: 'OKTA_SIGN_ON'}).each(policy => {
      if (policy.name !== 'Default Policy') {
        expect(policy.name).to.equal(createdPolicy1.name);
        expect(policy.type).to.equal(createdPolicy1.type);
        expect(policy.status).to.equal(createdPolicy1.status);
        expect(policy.description).to.equal(createdPolicy1.description);
        signonCount++;
      }
    });
    expect(signonCount).to.be.equal(1);
    

    let passwordCount = 0;
    await client.listPolicies({type: 'PASSWORD'}).each(policy => {
      if (policy.name !== 'Default Policy') {
        expect(policy.name).to.equal(createdPolicy2.name);
        expect(policy.type).to.equal(createdPolicy2.type);
        expect(policy.status).to.equal(createdPolicy2.status);
        expect(policy.description).to.equal(createdPolicy2.description);
        passwordCount++;
      }
    });
    expect(passwordCount).to.be.equal(1);

    await client.deletePolicy(createdPolicy1.id);
    await client.deletePolicy(createdPolicy2.id);
  });

  it('can delete a policy', async () => {
    const policyobj = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: 'node-sdk: DeletePolicy',
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policyobj, client);
    const createdPolicy = await client.createPolicy(oktaSignOnPolicy);
    const retrievedPolicy = await client.getPolicy(createdPolicy.id);
    expect(retrievedPolicy).to.not.be.undefined;

    const response = await retrievedPolicy.delete()

    expect(response.status).to.equal(204);
    let policy;
    try {
      policy = await client.getPolicy(createdPolicy.id);
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(policy).to.be.undefined;

  });

  it('can update a policy', async () => {
    const policy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: 'node-sdk: UpdatePolicy',
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policy, client);
    const createdPolicy = await client.createPolicy(oktaSignOnPolicy);

    createdPolicy.name = 'node-sdk: Updated UpdatePolicy';

    await createdPolicy.update();

    let retrievedPolicy = await client.getPolicy(createdPolicy.id);
    await client.deletePolicy(createdPolicy.id);

    expect(retrievedPolicy.name).to.equal('node-sdk: Updated UpdatePolicy');
  });

  it('can deactivate and activate a policy', async () => {
    const policy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: 'node-sdk: DeactivateAndActivatePolicy',
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policy, client);
    let createdPolicy = await client.createPolicy(oktaSignOnPolicy);

    expect(createdPolicy.status).to.be.equal('ACTIVE');

    await createdPolicy.deactivate();
    createdPolicy = await client.getPolicy(createdPolicy.id);

    expect(createdPolicy.status).to.be.equal('INACTIVE');

    await createdPolicy.activate();
    createdPolicy = await client.getPolicy(createdPolicy.id);

    expect(createdPolicy.status).to.be.equal('ACTIVE');

    await createdPolicy.delete();

  });

  it('can create policy with rule', async () => {
    const policy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: 'node-sdk: CreatePolicyWithRule',
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policy, client);
    const createdPolicy = await client.createPolicy(oktaSignOnPolicy);

    const policyRuleActionSignOn = {
      access: 'DENY',
      requireFactor: false
    };
    const policyRuleAction = {
      signon: policyRuleActionSignOn
    };
    const policyRule = {
      name: 'node-sdk: PolicyRule',
      type: 'SIGN_ON',
      actions: policyRuleAction
    };

    const createdPolicyRule = await createdPolicy.createRule(policyRule);

    expect(createdPolicyRule).to.not.be.undefined;
    expect(createdPolicyRule.name).to.be.equal('node-sdk: PolicyRule');

    await createdPolicy.delete();
  });

});

const utils = require('../utils');
const okta = require('../../src');
const models = require('../../src/models');
const faker = require('faker');
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
      name: `node-sdk: CreateSignOnPolicy ${faker.random.word()}`.substring(0, 49), // policy name length is limited to 50 characters
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
      name: `node-sdk: GetPolicy ${faker.random.word()}`.substring(0, 49),
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
        name: `Get Test Group ${faker.random.word()}`.substring(0, 49)
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
      name: `node-sdk: PolicyWithConditions ${faker.random.word()}`.substring(0, 49),
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
    await client.deleteGroup(createdGroup.id);

    expect(createdPolicy).to.not.be.undefined;
    expect(createdPolicy.name).to.equal(policy.name);
    expect(createdPolicy.type).to.equal(policy.type);
    expect(createdPolicy.status).to.equal(policy.status);
    expect(createdPolicy.description).to.equal(policy.description);
    expect(createdPolicy.conditions.people.groups.include).to.not.be.empty;
    expect(createdPolicy.conditions.people.groups.include[0]).to.equal(createdGroup.id);
  });

  it('can get policy by type', async () => {
    const policy1Name = `node-sdk: PoliciesByType ${faker.random.word()}`.substring(0, 49);
    const policy1 = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: policy1Name,
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const policy2Name = `node-sdk: Password PoliciesByType ${faker.random.word()}`.substring(0, 49);
    const policy2 = {
      type: 'PASSWORD',
      status: 'ACTIVE',
      name: policy2Name,
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const oktaSignOnPolicy1 = new models.OktaSignOnPolicy(policy1, client);
    const createdPolicy1 = await client.createPolicy(oktaSignOnPolicy1);

    const oktaSignOnPolicy2 = new models.PasswordPolicy(policy2, client);
    const createdPolicy2 = await client.createPolicy(oktaSignOnPolicy2);

    let signonCount = 0;
    await client.listPolicies({type: 'OKTA_SIGN_ON'}).each(policy => {
      if (policy.name === policy1Name) {
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
      if (policy.name === policy2Name) {
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
      name: `node-sdk: DeletePolicy ${faker.random.word()}`.substring(0, 49),
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policyobj, client);
    const createdPolicy = await client.createPolicy(oktaSignOnPolicy);
    const retrievedPolicy = await client.getPolicy(createdPolicy.id);
    expect(retrievedPolicy).to.not.be.undefined;

    const response = await retrievedPolicy.delete();

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
    const policyName = `node-sdk: UpdatePolicy ${faker.random.word()}`.substring(0, 49);
    const policy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: policyName,
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const oktaSignOnPolicy = new models.OktaSignOnPolicy(policy, client);
    const createdPolicy = await client.createPolicy(oktaSignOnPolicy);

    createdPolicy.name = `node-sdk: Updated ${faker.random.word()}`.substring(0, 49);

    await createdPolicy.update();

    let retrievedPolicy = await client.getPolicy(createdPolicy.id);
    await client.deletePolicy(createdPolicy.id);

    expect(retrievedPolicy.name).to.contains(createdPolicy.name);
  });

  it('can deactivate and activate a policy', async () => {
    const policy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: `node-sdk: ActivatePolicy ${faker.random.word()}`.substring(0, 49),
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
      name: `node-sdk: PolicyWithRule ${faker.random.word()}`.substring(0, 49),
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

    const policyRuleName = `node-sdk: PolicyRule ${faker.random.word()}`.substring(0, 49);
    const policyRule = {
      name: policyRuleName,
      type: 'SIGN_ON',
      actions: policyRuleAction
    };

    const createdPolicyRule = await createdPolicy.createRule(policyRule);

    expect(createdPolicyRule).to.not.be.undefined;
    expect(createdPolicyRule.name).to.equal(policyRuleName);

    await createdPolicy.delete();
  });

});

import utils = require('../utils');
import {
  Client,
  DefaultRequestExecutor,
  OktaSignOnPolicy,
  OktaSignOnPolicyRule,
  OktaSignOnPolicyRuleActions,
  OktaSignOnPolicyRuleSignonActions,
  PasswordPolicy,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import { expect } from 'chai';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policies`;
}

const client = new Client({
  scopes: ['okta.policies.manage', 'okta.groups.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Policy Scenarios', () => {

  it('can create a sign on policy', async () => {
    const policy: OktaSignOnPolicy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: `node-sdk: CreateSignOnPolicy ${faker.random.word()}`.substring(0, 49), // policy name length is limited to 50 characters
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const createdPolicy = await client.policyApi.createPolicy({policy});
    await client.policyApi.deletePolicy({policyId: createdPolicy.id});

    expect(createdPolicy).to.not.be.undefined;
    expect(createdPolicy.name).to.equal(policy.name);
    expect(createdPolicy.type).to.equal(policy.type);
    expect(createdPolicy.status).to.equal(policy.status);
    expect(createdPolicy.description).to.equal(policy.description);
  });

  it('can get a policy', async () => {
    const policy: OktaSignOnPolicy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: `node-sdk: GetPolicy ${faker.random.word()}`.substring(0, 49),
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const createdPolicy = await client.policyApi.createPolicy({policy});
    const retrievedPolicy = await client.policyApi.getPolicy({policyId: policy.id});
    await client.policyApi.deletePolicy({policyId: createdPolicy.id});

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
        name: `node-sdk: Get Test Group ${faker.random.word()}`.substring(0, 49)
      }
    };

    // Cleanup the group if it exists
    await utils.cleanup(client, null, newGroup);

    const createdGroup = await client.groupApi.createGroup({group: newGroup});
    utils.validateGroup(createdGroup, newGroup);

    // 2. Set Up Policy JSON
    const policy: OktaSignOnPolicy = {
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
    const createdPolicy: OktaSignOnPolicy = await client.policyApi.createPolicy({policy});
    await client.policyApi.deletePolicy({policyId: createdPolicy.id});
    await client.groupApi.deleteGroup({groupId: createdGroup.id});

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
    const policy1: OktaSignOnPolicy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: policy1Name,
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const policy2Name = `node-sdk: Password PoliciesByType ${faker.random.word()}`.substring(0, 49);
    const policy2: PasswordPolicy = {
      type: 'PASSWORD',
      status: 'ACTIVE',
      name: policy2Name,
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const createdPolicy1 = await client.createPolicy(policy1);

    const createdPolicy2 = await client.createPolicy(policy2);

    let signonCount = 0;
    await (await client.listPolicies({type: 'OKTA_SIGN_ON'})).each(policy => {
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
    await (await client.listPolicies({type: 'PASSWORD'})).each(policy => {
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
    const policyobj: OktaSignOnPolicy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: `node-sdk: DeletePolicy ${faker.random.word()}`.substring(0, 49),
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const createdPolicy = await client.createPolicy(policyobj);
    const retrievedPolicy = await client.policyApi.getPolicy({policyId: policy.id});
    expect(retrievedPolicy).to.not.be.undefined;

    const response = await client.deletePolicy(retrievedPolicy.id);

    expect(response).to.be.undefined;
    let policy;
    try {
      policy = await client.policyApi.getPolicy({policyId: policy.id});
    } catch (e) {
      expect(e.status).to.equal(404);
    }
    expect(policy).to.be.undefined;

  });

  it('can update a policy', async () => {
    const policyName = `node-sdk: UpdatePolicy ${faker.random.word()}`.substring(0, 49);
    const policy: OktaSignOnPolicy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: policyName,
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    const createdPolicy = await client.policyApi.createPolicy({policy});

    createdPolicy.name = `node-sdk: Updated ${faker.random.word()}`.substring(0, 49);

    await client.updatePolicy(createdPolicy.id, createdPolicy);

    const retrievedPolicy = await client.policyApi.getPolicy({policyId: policy.id});
    await client.policyApi.deletePolicy({policyId: createdPolicy.id});

    expect(retrievedPolicy.name).to.contains(createdPolicy.name);
  });

  it('can deactivate and activate a policy', async () => {
    const policy: OktaSignOnPolicy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: `node-sdk: ActivatePolicy ${faker.random.word()}`.substring(0, 49),
      description: 'The default policy applies in all situations if no other policy applies.',
    };

    let createdPolicy = await client.policyApi.createPolicy({policy});

    expect(createdPolicy.status).to.be.equal('ACTIVE');

    await client.deactivatePolicy(createdPolicy.id);
    createdPolicy = await client.policyApi.getPolicy({policyId: policy.id});

    expect(createdPolicy.status).to.be.equal('INACTIVE');

    await client.activatePolicy(createdPolicy.id);
    createdPolicy = await client.policyApi.getPolicy({policyId: policy.id});

    expect(createdPolicy.status).to.be.equal('ACTIVE');

    await client.policyApi.deletePolicy({policyId: createdPolicy.id});

  });

  it('can create policy with rule', async () => {
    const policy: OktaSignOnPolicy = {
      type: 'OKTA_SIGN_ON',
      status: 'ACTIVE',
      name: `node-sdk: PolicyWithRule ${faker.random.word()}`.substring(0, 49),
      description: 'The default policy applies in all situations if no other policy applies.',
    };
    const createdPolicy = await client.policyApi.createPolicy({policy});
    const policyRuleActionSignOn: OktaSignOnPolicyRuleSignonActions = {
      access: 'DENY',
      requireFactor: false
    };
    const policyRuleAction: OktaSignOnPolicyRuleActions = {
      signon: policyRuleActionSignOn
    };

    const policyRuleName = `node-sdk: PolicyRule ${faker.random.word()}`.substring(0, 49);
    const policyRule: OktaSignOnPolicyRule = {
      name: policyRuleName,
      type: 'SIGN_ON',
      actions: policyRuleAction
    };

    const createdPolicyRule: OktaSignOnPolicyRule = await client.createPolicyRule(createdPolicy.id, policyRule);

    expect(createdPolicyRule).to.not.be.undefined;
    expect(createdPolicyRule.name).to.equal(policyRuleName);

    await client.policyApi.deletePolicy({policyId: createdPolicy.id});
  });

});

import { DefaultRequestExecutor, Policy } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticators-active`;
}

const client: V2Client = utils.getV2Client({
  scopes: ['okta.authenticators.read', 'okta.authenticators.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authenticators API tests', () => {
  // do not run these tests in a non-OIE context
  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }
    const authenticatorPolicies: Policy[] = [];
    for await (const policy of await client.listPolicies({type: 'MFA_ENROLL'})) {
      authenticatorPolicies.push(policy);
    }
    const defaultPolicy = authenticatorPolicies.find(policy => policy.name === 'Default Policy');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore MAR 2022: MFA_ENROLL policy is not added to SDK
    defaultPolicy.settings.authenticators = [{
      key: 'security_question',
      enroll: {self: 'NOT_ALLOWED'}
    }, {
      key: 'okta_password',
      enroll: {self: 'REQUIRED'}
    }];
    await client.updatePolicy(defaultPolicy.id, defaultPolicy);
  });

  it('should deactivate an active Authenticator', async () => {
    const authenticators = await client.listAuthenticators();   // returns Collection<Authenticator>

    await authenticators.each(async (item) => {
      if (item.type === 'security_question') {
        // access Security Question Authenticator (this is not a part of the Default Authenticator Policy)
        let sqAuthenticator = item;
        expect(sqAuthenticator).to.include({type: 'security_question', name: 'Security Question', status: 'ACTIVE'});

        sqAuthenticator = await client.deactivateAuthenticator(sqAuthenticator.id);
        expect(sqAuthenticator).to.include({type: 'security_question', name: 'Security Question', status: 'INACTIVE'});

        // return to previous state
        sqAuthenticator = await client.activateAuthenticator(sqAuthenticator.id);
        expect(sqAuthenticator).to.include({type: 'security_question', name: 'Security Question', status: 'ACTIVE'});
      }
    });
  });
});

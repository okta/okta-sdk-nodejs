import * as okta from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import { AuthenticatorStatus } from '../../src/types/v3/models';
import utils = require('../utils');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticators-active`;
}

const client = new okta.Client({
  scopes: ['okta.authenticators.read', 'okta.authenticators.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Authenticators API tests', () => {
  // do not run these tests in a non-OIE context
  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }
  });

  it('should deactivate an active Authenticator', async () => {
    const authenticators = client.listAuthenticators();   // returns Collection<Authenticator>

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

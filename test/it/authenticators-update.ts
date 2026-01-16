import { expect } from 'chai';
import utils = require('../utils');
import { Client, AuthenticatorKeyEmail } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticators-update`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Authenticators API tests', () => {
  // do not run these tests in a non-OIE context
  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }
  });

  it('should update Authenticator', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let authenticator: AuthenticatorKeyEmail;
    await authenticators.each(a => {
      if (a.type === 'email') {
        authenticator = a;
      }
    });

    // change `name`
    let updatedAuthenticator: AuthenticatorKeyEmail = await client.authenticatorApi.replaceAuthenticator({authenticatorId: authenticator.id,
      authenticator: {
        name: `${authenticator.name}1`,
      }
    });
    updatedAuthenticator = await client.authenticatorApi.getAuthenticator({ authenticatorId: authenticator.id });
    expect(updatedAuthenticator.name).to.equal(`${authenticator.name}1`);

    // change `allowedFor` - should be requested with correct class instance instead of object
    let updateAuthenticatorData = new AuthenticatorKeyEmail();
    updateAuthenticatorData.name = authenticator.name;
    updateAuthenticatorData.settings = {
      allowedFor: 'any'
    };
    updatedAuthenticator = await client.authenticatorApi.replaceAuthenticator({
      authenticatorId: authenticator.id,
      authenticator: updateAuthenticatorData
    });
    expect(updatedAuthenticator.settings.allowedFor).to.equal('any');

    // revert `allowedFor`
    updateAuthenticatorData = new AuthenticatorKeyEmail();
    updateAuthenticatorData.name = authenticator.name;
    updateAuthenticatorData.settings = {
      allowedFor: 'recovery'
    };
    updatedAuthenticator = await client.authenticatorApi.replaceAuthenticator({
      authenticatorId: authenticator.id,
      authenticator: updateAuthenticatorData
    });
    expect(updatedAuthenticator.settings.allowedFor).to.equal('recovery');
  });
});

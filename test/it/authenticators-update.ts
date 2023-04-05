import { expect } from 'chai';
import utils = require('../utils');
import { Client } from '@okta/okta-sdk-nodejs';

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
    const { value: authenticator} = await (await client.authenticatorApi.listAuthenticators()).next();

    let updatedAuthenticator = await client.authenticatorApi.replaceAuthenticator({authenticatorId: authenticator.id,
      authenticator: {
        name: authenticator.name,
        settings: {
          allowedFor: 'any'
        }
      }
    });
    expect(updatedAuthenticator.settings.allowedFor).to.equal('any');
    updatedAuthenticator = await client.authenticatorApi.replaceAuthenticator({ authenticatorId: authenticator.id,
      authenticator: {
        name: authenticator.name,
        settings: {
          allowedFor: 'recovery'
        }
      }
    });
    expect(updatedAuthenticator.settings.allowedFor).to.equal('recovery');
  });
});

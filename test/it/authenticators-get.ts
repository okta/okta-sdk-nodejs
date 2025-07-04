import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticators-get`;
}

const client = new Client({
  scopes: ['okta.authenticators.read'],
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
  });

  it('should get the Authenticator by id', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();   // returns Collection<Authenticator>

    const { value: email } = await authenticators.next();       // access the first item of the collect
    const emailAuthenticator = await client.authenticatorApi.getAuthenticator({authenticatorId: email.id});

    const expectedPayload = {type: 'email', id: email.id, status: 'ACTIVE'};
    expect(emailAuthenticator).to.include(expectedPayload);
  });
});

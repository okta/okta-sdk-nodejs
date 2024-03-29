import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/list-authenticators`;
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

  it('should list all available Authenticators', async () => {
    const authenticators = await client.authenticatorApi.listAuthenticators();
    const expectedAuthenticators = ['email', 'app', 'password', 'phone'];
    await authenticators.each(a => {
      if (expectedAuthenticators.length) {
        expect(a.type).to.equal(expectedAuthenticators.shift());
      }
    });
  });
});

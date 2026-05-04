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
    const expectedTypes = new Set(['email', 'app', 'password', 'phone']);
    const foundTypes = new Set<string>();
    await authenticators.each(a => {
      if (a.type && expectedTypes.has(a.type)) {
        foundTypes.add(a.type);
      }
    });
    for (const type of expectedTypes) {
      expect(foundTypes.has(type), `Expected authenticator type '${type}' to be present`).to.be.true;
    }
  });
});

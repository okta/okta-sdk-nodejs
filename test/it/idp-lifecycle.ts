import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-lifecycle`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Idp Lifecycle API', () => {
  let idp;
  beforeEach(async () => {
    idp = await client.createIdentityProvider(getMockGenericOidcIdp());
  });

  afterEach(async () => {
    await client.deleteIdentityProvider(idp.id);
  });

  it('should activate idp', async () => {
    idp = await client.activateIdentityProvider(idp.id);
    expect(idp.status).to.equal('ACTIVE');
  });

  it('should deactive idp', async () => {
    idp = await client.deactivateIdentityProvider(idp.id);
    expect(idp.status).to.equal('INACTIVE');
  });
});

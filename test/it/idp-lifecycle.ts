import { IdentityProvider } from './../../src/models/identityProvider';
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
    //await idp.delete();
  });

  it('should activate idp', async () => {
    idp = await client.activateIdentityProvider(idp.id);
    // idp = await idp.activate();
    expect(idp.status).to.equal(IdentityProvider.StatusEnum.Active);
  });

  it('should deactive idp', async () => {
    idp = await client.deactivateIdentityProvider(idp.id);
    // idp = await idp.deactivate();
    expect(idp.status).to.equal(IdentityProvider.StatusEnum.Inactive);
  });
});

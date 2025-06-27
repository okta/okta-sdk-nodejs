import { expect } from 'chai';
import getMockGenericOidcIdp = require('./mocks/generic-oidc-idp');
import { ApiClient, IdentityProvider, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/idp-lifecycle`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Idp Lifecycle API', () => {
  let idp: IdentityProvider;
  beforeEach(async () => {
    idp = await client.identityProviderApi.createIdentityProvider({identityProvider: getMockGenericOidcIdp()});
  });

  afterEach(async () => {
    await client.identityProviderApi.deleteIdentityProvider({idpId: idp.id});
  });

  it('should activate idp', async () => {
    idp = await client.identityProviderApi.activateIdentityProvider({idpId: idp.id});
    expect(idp.status).to.equal('ACTIVE');
  });

  it('should deactive idp', async () => {
    idp = await client.identityProviderApi.deactivateIdentityProvider({idpId: idp.id});
    expect(idp.status).to.equal('INACTIVE');
  });
});

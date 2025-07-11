import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  OpenIdConnectApplication,
  OAuth2ClientJsonWebKey,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-token`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('ApplicationSSOCredentialOAuth2ClientAuthApi', () => {
  let application: OpenIdConnectApplication;

  before(async () => {
    application = await client.applicationApi.createApplication({
      application: utils.getOIDCApplication()
    }) as OpenIdConnectApplication;
  });

  after(async () => {
    if (application) {
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
    }
  });

  it('Add JWK', async () => {
    const oAuth2ClientJsonWebKeyRequestBody = await utils.makeOAuth2ClientJsonWebKeyRequestBody();
    const jwk: OAuth2ClientJsonWebKey = await client.applicationApi.addJwk({
      appId: application.id,
      oAuth2ClientJsonWebKeyRequestBody
    });
    expect(jwk.alg).to.equal('RS256');
  });

  it('List JWK', async () => {
    const jwkList = await client.applicationApi.listJwk({
      appId: application.id
    });
    expect(jwkList.keys.length).to.be.greaterThanOrEqual(1);
    expect(jwkList.keys[0].alg).to.equal('RS256');
  });
});

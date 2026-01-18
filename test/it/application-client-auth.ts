import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  OpenIdConnectApplication,
  OAuth2ClientJsonWebKey,
  OAuth2ClientSecret,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.apps.read',
    'okta.apps.manage'
  ]
});

describe('ApplicationSSOCredentialOAuth2ClientAuthApi', () => {
  let application: OpenIdConnectApplication;
  let jwk: OAuth2ClientJsonWebKey;
  let secret: OAuth2ClientSecret;

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

  describe.skip('JWK', () => {
    it('Add', async () => {
      const oAuth2ClientJsonWebKeyRequestBody = await utils.makeOAuth2ClientJsonWebKeyRequestBody();
      jwk = await client.applicationApi.addJwk({
        appId: application.id,
        oAuth2ClientJsonWebKeyRequestBody
      });
      expect(jwk.alg).to.equal('RS256');
    });

    it('List', async () => {
      const jwkList = await client.applicationApi.listJwk({
        appId: application.id
      });
      expect(jwkList.keys.length).to.be.greaterThanOrEqual(1);
      expect(jwkList.keys[0].alg).to.equal('RS256');
    });

    it('Get', async () => {
      const jwkFromGet = await client.applicationApi.getJwk({
        appId: application.id,
        keyId: jwk.id
      });
      expect(jwkFromGet.alg).to.equal('RS256');
    });

    it('Deactivate', async () => {
      await client.applicationApi.deactivateOAuth2ClientJsonWebKey({
        appId: application.id,
        keyId: jwk.id
      });
      const jwkFromGet = await client.applicationApi.getJwk({
        appId: application.id,
        keyId: jwk.id
      });
      expect(jwkFromGet.status).to.equal('INACTIVE');
    });

    it('Activate', async () => {
      await client.applicationApi.activateOAuth2ClientJsonWebKey({
        appId: application.id,
        keyId: jwk.id
      });
      const jwkFromGet = await client.applicationApi.getJwk({
        appId: application.id,
        keyId: jwk.id
      });
      expect(jwkFromGet.status).to.equal('ACTIVE');
    });

    it('Delete', async () => {
      await client.applicationApi.deactivateOAuth2ClientJsonWebKey({
        appId: application.id,
        keyId: jwk.id
      });
      await client.applicationApi.deletejwk({
        appId: application.id,
        keyId: jwk.id
      });
      const jwkList = await client.applicationApi.listJwk({
        appId: application.id
      });
      expect(jwkList.keys).to.equal(null);
    });
  });

  describe.skip('Secrets', () => {
    it('Add', async () => {
      secret = await client.applicationApi.createOAuth2ClientSecret({
        appId: application.id,
        oAuth2ClientSecretRequestBody: {
          client_secret: 'SecretSecretSecret'
        }
      });
      expect(secret.client_secret).to.equal('SecretSecretSecret');
    });

    it('List', async () => {
      const secretCollection = await client.applicationApi.listOAuth2ClientSecrets({
        appId: application.id
      });
      const secretList: OAuth2ClientSecret[] = [];
      await secretCollection.each(s => secretList.push(s));
      expect(secretList.length).to.be.greaterThanOrEqual(1);
      expect(secretList.map(s => s.client_secret)).to.include('SecretSecretSecret');
    });

    it('Deactivate', async () => {
      await client.applicationApi.deactivateOAuth2ClientSecret({
        appId: application.id,
        secretId: secret.id
      });
      const secretFromGet = await client.applicationApi.getOAuth2ClientSecret({
        appId: application.id,
        secretId: secret.id
      });
      expect(secretFromGet.status).to.equal('INACTIVE');
    });

    it('Activate', async () => {
      await client.applicationApi.activateOAuth2ClientSecret({
        appId: application.id,
        secretId: secret.id
      });
      const secretFromGet = await client.applicationApi.getOAuth2ClientSecret({
        appId: application.id,
        secretId: secret.id
      });
      expect(secretFromGet.status).to.equal('ACTIVE');
    });

    it('Delete', async () => {
      await client.applicationApi.deactivateOAuth2ClientSecret({
        appId: application.id,
        secretId: secret.id
      });
      await client.applicationApi.deleteOAuth2ClientSecret({
        appId: application.id,
        secretId: secret.id
      });

      const secretCollection = await client.applicationApi.listOAuth2ClientSecrets({
        appId: application.id
      });
      const secretList: OAuth2ClientSecret[] = [];
      await secretCollection.each(s => secretList.push(s));
      expect(secretList.map(s => s.client_secret)).not.to.include('SecretSecretSecret');
    });
  });
});

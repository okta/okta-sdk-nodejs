import { expect } from 'chai';
import {
  AuthorizationServer,
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  AuthorizationServerJsonWebKey as JsonWebKey,
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-credential`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Credential API', () => {
  let authServer: AuthorizationServer;
  before(async () => {
    authServer = await client.authorizationServerApi.createAuthorizationServer({authorizationServer: getMockAuthorizationServer()});
  });
  after(async () => {
    await client.authorizationServerApi.deleteAuthorizationServer({authServerId: authServer.id});
  });

  describe('Get Authorization Server Keys', () => {
    it('should return a collection of JsonWebKey', async () => {
      const collection = await client.authorizationServerApi.listAuthorizationServerKeys({authServerId: authServer.id});
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(key => {
        expect(key).to.be.instanceOf(JsonWebKey);
      });
    });
  });

  describe('Rotate Authorization Server Keys', () => {
    it('should return a collection of JsonWebKey', async () => {
      const collection = await client.authorizationServerApi.rotateAuthorizationServerKeys({authServerId: authServer.id, use: { use: 'sig' }});
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(key => {
        expect(key).to.be.instanceOf(JsonWebKey);
      });
    });
  });
});

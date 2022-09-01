import { expect } from 'chai';
import {
  AuthorizationServer,
  Collection,
  DefaultRequestExecutor,
  JsonWebKey,
} from '@okta/okta-sdk-nodejs';
import getMockAuthorizationServer = require('./mocks/authorization-server');
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-credential`;
}

const client: V2Client = utils.getV2Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authorization Server Credential API', () => {
  let authServer: AuthorizationServer;
  before(async () => {
    authServer = await client.createAuthorizationServer(getMockAuthorizationServer());
  });
  after(async () => {
    await client.deleteAuthorizationServer(authServer.id);
  });

  describe('Get Authorization Server Keys', () => {
    it('should return a collection of JsonWebKey', async () => {
      const collection = await client.listAuthorizationServerKeys(authServer.id);
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(key => {
        expect(key).to.be.instanceOf(JsonWebKey);
      });
    });
  });

  describe('Rotate Authorization Server Keys', () => {
    it('should return a collection of JsonWebKey', async () => {
      const collection = await client.rotateAuthorizationServerKeys(authServer.id, { use: 'sig' });
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(key => {
        expect(key).to.be.instanceOf(JsonWebKey);
      });
    });
  });
});

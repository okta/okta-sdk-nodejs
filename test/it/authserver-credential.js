const expect = require('chai').expect;
const okta = require('../../src');
const Collection = require('../../src/collection');
const models = require('../../src/models');
const mockAuthorizationServer = require('./mocks/authorization-server.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authserver-credential`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Authorization Server Credential API', () => {
  let authServer;
  before(async () => {
    authServer = await client.createAuthorizationServer(mockAuthorizationServer);
  });
  after(async () => {
    await authServer.delete();
  });

  describe('Get Authorization Server Keys', () => {
    it('should return a collection of JsonWebKey', async () => {
      const collection = await authServer.listKeys();
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(key => {
        expect(key).to.be.instanceOf(models.JsonWebKey);
      });
    });
  });

  describe('Rotate Authorization Server Keys', () => {
    it('should return a collection of JsonWebKey', async () => {
      const collection = await authServer.rotateKeys({ use: 'sig' });
      expect(collection).to.be.instanceOf(Collection);
      await collection.each(key => {
        expect(key).to.be.instanceOf(models.JsonWebKey);
      });
    });
  });
});

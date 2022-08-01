import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/api-tokens`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('API Tokens API', () => {
  describe('List API tokens', () => {
    it('should return a Collection', async () => {
      const tokens = await client.apiTokenApi.listApiTokens();
      expect(tokens).to.be.instanceOf(Collection);
      await tokens.each(token => {
        expect(token).to.be.instanceOf(v3.ApiToken);
      });
    });
  });

  describe('Get API token', () => {
    it('should get ApiToken by id', async () => {
      const tokens = await client.apiTokenApi.listApiTokens();
      const { value: { id, name } } = await tokens.next(); // get first item

      const token = await client.apiTokenApi.getApiToken({
        apiTokenId: id
      });
      expect(token).to.be.instanceOf(v3.ApiToken);
      expect(token.name).to.equal(name);
    });
  });
});

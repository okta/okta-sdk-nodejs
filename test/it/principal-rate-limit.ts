import { expect } from 'chai';
import { spy } from 'sinon';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/principal-rate-limit`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Principal Rate Limit API', () => {
  describe('Create', () => {
    let prl;
    afterEach(async () => {
      await client.principalRateLimitApi.deletePrincipalRateLimitEntity({
        principalRateLimitId: prl.id,
      });
    });

    it('should create entity', async () => {
      const tokens = await client.apiTokenApi.listApiTokens();
      const { value: { id } } = await tokens.next(); // get first item
      const token = await client.apiTokenApi.getApiToken({
        apiTokenId: id
      });

      const mockPrl = {
        principalId: token.id,
        principalType: 'SSWS_TOKEN' as v3.PrincipalType,
        defaultPercentage: 50,
        defaultConcurrencyPercentage: 75,   
      };
      prl = await client.principalRateLimitApi.createPrincipalRateLimitEntity({
        entity: mockPrl,
      });
      console.log(1, prl);
      expect(prl).to.be.instanceOf(v3.PrincipalRateLimitEntity);
      expect(prl).to.have.property('id');
    });
  });


});

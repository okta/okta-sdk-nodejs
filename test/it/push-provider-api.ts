import { expect } from 'chai';
import {
  ApiClient, PushProvider,
} from '@okta/okta-sdk-nodejs';

const client = new ApiClient({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Push Provider  API', () => {
  it('lists push providers', async () => {
    try {
      const notificationServices = [];
      for await (const provider of await client.pushProviderApi.listPushProviders()) {
        expect(provider).to.be.instanceOf(PushProvider);
        notificationServices.push(provider);
      }
      expect(notificationServices).to.be.empty;
    } catch (e) {
      expect(e.status).to.equal(403);
      expect(e.errorSummary).to.contain('You do not have permission');
    }
  });
});

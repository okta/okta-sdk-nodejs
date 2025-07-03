import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockInlineHook = require('./mocks/inlinehook');
import { ApiClient } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/inlinehook-lifecycle`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Inline Hook Lifecycle API', () => {
  let inlineHook;
  beforeEach(async () => {
    inlineHook = await client.inlineHookApi.createInlineHook({inlineHook: getMockInlineHook()});
  });

  afterEach(async () => {
    await client.inlineHookApi.deactivateInlineHook({inlineHookId: inlineHook.id});
    await client.inlineHookApi.deleteInlineHook({inlineHookId: inlineHook.id});
  });

  it('should activate inline hook', async () => {
    const res = await client.inlineHookApi.activateInlineHook({inlineHookId: inlineHook.id});
    expect(res.status).to.equal('ACTIVE');
  });

  it('should deactive inline hook', async () => {
    const res = await client.inlineHookApi.deactivateInlineHook({inlineHookId: inlineHook.id});
    expect(res.status).to.equal('INACTIVE');
  });
});

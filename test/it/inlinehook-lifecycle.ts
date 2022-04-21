import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockInlineHook = require('./mocks/inlinehook');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/inlinehook-lifecycle`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Inline Hook Lifecycle API', () => {
  let inlineHook;
  beforeEach(async () => {
    inlineHook = await client.createInlineHook(getMockInlineHook());
  });

  afterEach(async () => {
    await client.deactivateInlineHook(inlineHook.id);
    await client.deleteInlineHook(inlineHook.id);
  });

  it('should activate inline hook', async () => {
    const res = await client.activateInlineHook(inlineHook.id);
    expect(res.status).to.equal('ACTIVE');
  });

  it('should deactive inline hook', async () => {
    const res = await client.deactivateInlineHook(inlineHook.id);
    expect(res.status).to.equal('INACTIVE');
  });
});

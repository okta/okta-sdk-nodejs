const expect = require('chai').expect;
const okta = require('../../src');
const mockInlineHook = require('./mocks/inlinehook.json');
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
    inlineHook = await client.createInlineHook(mockInlineHook);
  });
  afterEach(async () => {
    await inlineHook.deactivate();
    await inlineHook.delete();
  });

  it('should activate inline hook', async () => {
    const res = await inlineHook.activate();
    expect(res.status).to.equal('ACTIVE');
  });

  it('should deactive inline hook', async () => {
    const res = await inlineHook.deactivate();
    expect(res.status).to.equal('INACTIVE');
  });
});

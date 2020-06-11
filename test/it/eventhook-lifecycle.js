const expect = require('chai').expect;
const okta = require('../../src');
const mockEventHook = require('./mocks/eventhook.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/eventhook-lifecycle`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Event Hook Lifecycle API', () => {
  let eventHook;
  beforeEach(async () => {
    eventHook = await client.createEventHook(mockEventHook);
  });
  afterEach(async () => {
    await eventHook.deactivate();
    await eventHook.delete();
  });

  it('should activate event hook', async () => {
    const res = await eventHook.activate();
    expect(res.status).to.equal('ACTIVE');
  });

  it('should deactive event hook', async () => {
    const res = await eventHook.deactivate();
    expect(res.status).to.equal('INACTIVE');
  });

  // Since event hook verification need real hook endpoint to be setup
  // Here we only test on error response to make sure proper endpoint be hit
  // https://developer.okta.com/docs/reference/api/event-hooks/#verify-event-hook
  it('should get error response with status 400 and code E0000001', async () => {
    try {
      await eventHook.verify();
    } catch (err) {
      expect(err.status).to.equal(400);
      expect(err.errorCode).to.equal('E0000001');
    }
  });
});

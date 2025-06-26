import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockEventHook = require('./mocks/eventhook');
import { ApiClient } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/eventhook-lifecycle`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Event Hook Lifecycle API', () => {
  let eventHook;
  beforeEach(async () => {
    eventHook = await client.eventHookApi.createEventHook({eventHook: getMockEventHook()});
  });
  afterEach(async () => {
    await client.eventHookApi.deactivateEventHook({eventHookId: eventHook.id});
    await client.eventHookApi.deleteEventHook({eventHookId: eventHook.id});
  });

  it('should activate event hook', async () => {
    const res = await client.eventHookApi.activateEventHook({eventHookId: eventHook.id});
    expect(res.status).to.equal('ACTIVE');
  });

  it('should deactive event hook', async () => {
    const res = await client.eventHookApi.deactivateEventHook({eventHookId: eventHook.id});
    expect(res.status).to.equal('INACTIVE');
  });

  // Since event hook verification need real hook endpoint to be setup
  // Here we only test on error response to make sure proper endpoint be hit
  // https://developer.okta.com/docs/reference/api/event-hooks/#verify-event-hook
  it('should get error response with status 400 and code E0000001', async () => {
    try {
      await client.eventHookApi.verifyEventHook({eventHookId: eventHook.id});
    } catch (err) {
      expect(err.status).to.equal(400);
      expect(err.errorCode).to.equal('E0000001');
    }
  });
});

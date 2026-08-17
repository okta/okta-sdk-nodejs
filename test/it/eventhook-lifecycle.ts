import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockEventHook = require('./mocks/eventhook');
import { Client } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/eventhook-lifecycle`;
}

const client = new Client({
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

  // The mock hook can't answer Okta's verification challenge, so this always fails. Assert the
  // SDK contract — right endpoint, parsed OktaApiError — not the status, which Okta changed from
  // 400 E0000001 to 500 E0000009 in 2026-08.
  // https://developer.okta.com/docs/reference/api/event-hooks/#verify-event-hook
  it('should surface the API error from the verify endpoint', async () => {
    let caught: okta.OktaApiError;
    try {
      await client.eventHookApi.verifyEventHook({eventHookId: eventHook.id});
    } catch (err) {
      caught = err;
    }

    // Asserted outside the catch: inside, everything is skipped if the call unexpectedly succeeds.
    expect(caught, 'verifyEventHook should have rejected').to.be.an.instanceOf(okta.OktaApiError);
    expect(caught.url, 'should have called the verify lifecycle endpoint').to.match(
      new RegExp(`/api/v1/eventHooks/${eventHook.id}/lifecycle/verify$`)
    );
    expect(caught.status, 'should be an API error').to.be.at.least(400);
    // 401/403/404 would mean the request never reached the verify handler.
    expect([401, 403, 404], `unexpected ${caught.status} from verify endpoint`)
      .to.not.include(caught.status);
    // The error body must be parsed, not surfaced as a bare transport failure.
    expect(caught.errorCode, 'Okta errorCode should be parsed').to.match(/^E\d{7}$/);
    expect(caught.errorSummary, 'Okta errorSummary should be parsed').to.be.a('string').and.not.equal('');
    expect(caught.errorId, 'Okta errorId should be parsed').to.be.a('string').and.not.equal('');
  });
});

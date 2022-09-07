import { expect } from 'chai';
import * as okta from '@okta/okta-sdk-nodejs';
import getMockEventHook = require('./mocks/eventhook');
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/eventhook-lifecycle`;
}

const client: V2Client = utils.getV2Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Event Hook Lifecycle API', () => {
  let eventHook;
  beforeEach(async () => {
    eventHook = await client.createEventHook(getMockEventHook());
  });
  afterEach(async () => {
    await client.deactivateEventHook(eventHook.id);
    await client.deleteEventHook(eventHook.id);
  });

  it('should activate event hook', async () => {
    const res = await client.activateEventHook(eventHook.id);
    expect(res.status).to.equal('ACTIVE');
  });

  it('should deactive event hook', async () => {
    const res = await client.deactivateEventHook(eventHook.id);
    expect(res.status).to.equal('INACTIVE');
  });

  // Since event hook verification need real hook endpoint to be setup
  // Here we only test on error response to make sure proper endpoint be hit
  // https://developer.okta.com/docs/reference/api/event-hooks/#verify-event-hook
  it('should get error response with status 400 and code E0000001', async () => {
    try {
      await client.verifyEventHook(eventHook.id);
    } catch (err) {
      expect(err.status).to.equal(400);
      expect(err.errorCode).to.equal('E0000001');
    }
  });
});

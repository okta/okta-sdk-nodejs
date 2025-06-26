import { expect } from 'chai';
import {
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  EventHook,
} from '@okta/okta-sdk-nodejs';
import getMockEventHook = require('./mocks/eventhook');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/eventhook-crud`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Event Hook Crud API', () => {
  describe('Create Event hook', () => {
    let eventHook;
    afterEach(async () => {
      await client.eventHookApi.deactivateEventHook({eventHookId: eventHook.id});
      await client.eventHookApi.deleteEventHook({eventHookId: eventHook.id});
    });

    it('should return correct model', async () => {
      const mockEventHook = getMockEventHook();
      eventHook = await client.eventHookApi.createEventHook({eventHook: mockEventHook});
      expect(eventHook).to.be.instanceOf(EventHook);
      expect(eventHook.id).to.be.exist;
      expect(eventHook.name).to.be.equal(mockEventHook.name);
    });
  });

  describe('List Event Hooks', () => {
    let eventHook;
    beforeEach(async () => {
      eventHook = await client.eventHookApi.createEventHook({eventHook: getMockEventHook()});
    });
    afterEach(async () => {
      await client.eventHookApi.deactivateEventHook({eventHookId: eventHook.id});
      await client.eventHookApi.deleteEventHook({eventHookId: eventHook.id});
    });

    it('should return a collection of EventHooks', async () => {
      const collection = await client.eventHookApi.listEventHooks();
      expect(collection).to.be.instanceOf(Collection);
      let ehFound = false;
      await collection.each(eh => {
        expect(eh).to.be.instanceOf(EventHook);
        if (eh.name === eventHook.name) {
          ehFound = true;
          return false;
        }
      });
      expect(ehFound).to.equal(true);
    });
  });

  describe('Get EventHook', () => {
    let eventHook;
    beforeEach(async () => {
      eventHook = await client.eventHookApi.createEventHook({eventHook: getMockEventHook()});
    });
    afterEach(async () => {
      await client.eventHookApi.deactivateEventHook({eventHookId: eventHook.id});
      await client.eventHookApi.deleteEventHook({eventHookId: eventHook.id});
    });

    it('should get EventHook by id', async () => {
      const eventHookFromGet = await client.eventHookApi.getEventHook({eventHookId: eventHook.id});
      expect(eventHookFromGet).to.be.instanceOf(EventHook);
      expect(eventHookFromGet.name).to.equal(eventHook.name);
    });
  });

  describe('Update EventHook', () => {
    let eventHook;
    beforeEach(async () => {
      eventHook = await client.eventHookApi.createEventHook({eventHook: getMockEventHook()});
    });
    afterEach(async () => {
      await client.eventHookApi.deactivateEventHook({eventHookId: eventHook.id});
      await client.eventHookApi.deleteEventHook({eventHookId: eventHook.id});
    });

    it('should update name for created eventHook', async () => {
      const mockName = 'Mock update event hook';
      eventHook.name = mockName;
      const updatedEventHook = await client.eventHookApi.replaceEventHook({eventHookId: eventHook.id, eventHook});
      expect(updatedEventHook.id).to.equal(eventHook.id);
      expect(updatedEventHook.name).to.equal(mockName);
    });
  });

  describe('Delete EventHook', () => {
    let eventHook;
    beforeEach(async () => {
      eventHook = await client.eventHookApi.createEventHook({eventHook: getMockEventHook()});
    });

    it('should not get eventHook after deletion', async () => {
      await client.eventHookApi.deactivateEventHook({eventHookId: eventHook.id});
      const res = await client.eventHookApi.deleteEventHook({eventHookId: eventHook.id});
      expect(res).to.be.undefined;
      try {
        await client.eventHookApi.getEventHook({eventHookId: eventHook.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

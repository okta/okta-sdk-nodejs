import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3 } from '@okta/okta-sdk-nodejs';
import getMockEventHook = require('./mocks/eventhook');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/eventhook-crud`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Event Hook Crud API', () => {
  describe('Create Event hook', () => {
    let eventHook;
    afterEach(async () => {
      await client.deactivateEventHook(eventHook.id);
      await client.deleteEventHook(eventHook.id);
    });

    it('should return correct model', async () => {
      const mockEventHook = getMockEventHook();
      eventHook = await client.createEventHook(mockEventHook);
      expect(eventHook).to.be.instanceOf(v3.EventHook);
      expect(eventHook.id).to.be.exist;
      expect(eventHook.name).to.be.equal(mockEventHook.name);
    });
  });

  describe('List Event Hooks', () => {
    let eventHook;
    beforeEach(async () => {
      eventHook = await client.createEventHook(getMockEventHook());
    });
    afterEach(async () => {
      await client.deactivateEventHook(eventHook.id);
      await client.deleteEventHook(eventHook.id);
    });

    it('should return a collection of EventHooks', async () => {
      const collection = await client.listEventHooks();
      expect(collection).to.be.instanceOf(Collection);
      let ehFound = false;
      await collection.each(eh => {
        expect(eh).to.be.instanceOf(v3.EventHook);
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
      eventHook = await client.createEventHook(getMockEventHook());
    });
    afterEach(async () => {
      await client.deactivateEventHook(eventHook.id);
      await client.deleteEventHook(eventHook.id);
    });

    it('should get EventHook by id', async () => {
      const eventHookFromGet = await client.getEventHook(eventHook.id);
      expect(eventHookFromGet).to.be.instanceOf(v3.EventHook);
      expect(eventHookFromGet.name).to.equal(eventHook.name);
    });
  });

  describe('Update EventHook', () => {
    let eventHook;
    beforeEach(async () => {
      eventHook = await client.createEventHook(getMockEventHook());
    });
    afterEach(async () => {
      await client.deactivateEventHook(eventHook.id);
      await client.deleteEventHook(eventHook.id);
    });

    it('should update name for created eventHook', async () => {
      const mockName = 'Mock update event hook';
      eventHook.name = mockName;
      const updatedEventHook = await client.updateEventHook(eventHook.id, eventHook);
      expect(updatedEventHook.id).to.equal(eventHook.id);
      expect(updatedEventHook.name).to.equal(mockName);
    });
  });

  describe('Delete EventHook', () => {
    let eventHook;
    beforeEach(async () => {
      eventHook = await client.createEventHook(getMockEventHook());
    });

    it('should not get eventHook after deletion', async () => {
      await client.deactivateEventHook(eventHook.id);
      const res = await client.deleteEventHook(eventHook.id);
      expect(res).to.be.undefined;
      try {
        await client.getEventHook(eventHook.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

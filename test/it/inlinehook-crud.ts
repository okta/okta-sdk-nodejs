import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  InlineHook,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import getMockInlineHook = require('./mocks/inlinehook');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/inlinehook-crud`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Inline Hook Crud API', () => {
  describe('Create inline hook', () => {
    let inlineHook: InlineHook;
    afterEach(async () => {
      await client.deactivateInlineHook(inlineHook.id);
      await client.deleteInlineHook(inlineHook.id);
    });

    it('should return correct model', async () => {
      const mockInlineHook = getMockInlineHook();
      inlineHook = await client.createInlineHook(mockInlineHook);
      expect(inlineHook.id).to.be.exist;
      expect(inlineHook.name).to.be.equal(mockInlineHook.name);
    });
  });

  describe('List Inline Hooks', () => {
    let inlineHook;
    beforeEach(async () => {
      inlineHook = await client.createInlineHook(getMockInlineHook());
    });
    afterEach(async () => {
      await client.deactivateInlineHook(inlineHook.id);
      await client.deleteInlineHook(inlineHook.id);
    });

    it('should return a collection of InlineHooks', async () => {
      const collection = await client.listInlineHooks();
      expect(collection).to.be.instanceOf(Collection);
      const inlineHooks = [];
      await collection.each(ih => {
        inlineHooks.push(ih);
      });
      const inlineHookFromCollection = inlineHooks.find(ih => ih.name === inlineHook.name);
      expect(inlineHookFromCollection).to.be.exist;
    });
  });

  describe('Get InlineHook', () => {
    let inlineHook;
    beforeEach(async () => {
      inlineHook = await client.createInlineHook(getMockInlineHook());
    });
    afterEach(async () => {
      await client.deactivateInlineHook(inlineHook.id);
      await client.deleteInlineHook(inlineHook.id);
    });

    it('should get InlineHook by id', async () => {
      const inlineHookFromGet = await client.getInlineHook(inlineHook.id);
      expect(inlineHookFromGet.name).to.equal(inlineHook.name);
    });
  });

  describe('Update InlineHook', () => {
    let inlineHook;
    beforeEach(async () => {
      inlineHook = await client.createInlineHook(getMockInlineHook());
    });
    afterEach(async () => {
      await client.deactivateInlineHook(inlineHook.id);
      await client.deleteInlineHook(inlineHook.id);
    });

    it('should update name for created inlineHook', async () => {
      inlineHook.name = `node-sdk: Mock inline hook updated ${faker.random.word()}`.substring(0, 49);
      inlineHook.channel.config.headers[0].value = 'my-header-value-updated';
      inlineHook.channel.config.authScheme.value = 'my-shared-secret-updated';
      const updatedInlineHook = await client.updateInlineHook(inlineHook.id, inlineHook);
      expect(updatedInlineHook.id).to.equal(inlineHook.id);
      expect(updatedInlineHook.name).to.equal(inlineHook.name);
      expect(updatedInlineHook.channel.config.headers[0].value).to.equal('my-header-value-updated');
    });
  });

  describe('Delete InlineHook', () => {
    let inlineHook;
    beforeEach(async () => {
      inlineHook = await client.createInlineHook(getMockInlineHook());
    });

    it('should not get inlineHook after deletion', async () => {
      await client.deactivateInlineHook(inlineHook.id);
      await client.deleteInlineHook(inlineHook.id);
      try {
        await client.getInlineHook(inlineHook.id);
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

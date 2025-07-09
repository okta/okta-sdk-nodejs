import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  InlineHook,
  InlineHookChannelHttp,
  InlineHookChannelHttpCreate,
  InlineHookCreate,
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
      await client.inlineHookApi.deactivateInlineHook({inlineHookId: inlineHook.id});
      await client.inlineHookApi.deleteInlineHook({inlineHookId: inlineHook.id});
    });

    it('should return correct model', async () => {
      const mockInlineHook: InlineHookCreate = getMockInlineHook();
      inlineHook = await client.inlineHookApi.createInlineHook({inlineHook: mockInlineHook});
      expect(inlineHook.id).to.be.exist;
      expect(inlineHook.name).to.be.equal(mockInlineHook.name);
    });
  });

  describe('List Inline Hooks', () => {
    let inlineHook: InlineHook;
    beforeEach(async () => {
      inlineHook = await client.inlineHookApi.createInlineHook({inlineHook: getMockInlineHook()});
    });
    afterEach(async () => {
      await client.inlineHookApi.deactivateInlineHook({inlineHookId: inlineHook.id});
      await client.inlineHookApi.deleteInlineHook({inlineHookId: inlineHook.id});
    });

    it('should return a collection of InlineHooks', async () => {
      const collection = await client.inlineHookApi.listInlineHooks();
      expect(collection).to.be.instanceOf(Collection);
      const inlineHooks: InlineHook[] = [];
      await collection.each(ih => {
        inlineHooks.push(ih);
      });
      const inlineHookFromCollection = inlineHooks.find(ih => ih.name === inlineHook.name);
      expect(inlineHookFromCollection).to.be.exist;
    });
  });

  describe('Get InlineHook', () => {
    let inlineHook: InlineHook;
    beforeEach(async () => {
      inlineHook = await client.inlineHookApi.createInlineHook({inlineHook: getMockInlineHook()});
    });
    afterEach(async () => {
      await client.inlineHookApi.deactivateInlineHook({inlineHookId: inlineHook.id});
      await client.inlineHookApi.deleteInlineHook({inlineHookId: inlineHook.id});
    });

    it('should get InlineHook by id', async () => {
      const inlineHookFromGet = await client.inlineHookApi.getInlineHook({inlineHookId: inlineHook.id});
      expect(inlineHookFromGet.name).to.equal(inlineHook.name);
    });
  });

  describe('Update InlineHook', () => {
    let inlineHook: InlineHook;
    beforeEach(async () => {
      inlineHook = await client.inlineHookApi.createInlineHook({inlineHook: getMockInlineHook()});
    });
    afterEach(async () => {
      await client.inlineHookApi.deactivateInlineHook({inlineHookId: inlineHook.id});
      await client.inlineHookApi.deleteInlineHook({inlineHookId: inlineHook.id});
    });

    it('should update name for created inlineHook', async () => {
      inlineHook.name = `node-sdk: Mock inline hook updated ${faker.random.word()}`.substring(0, 49);
      (inlineHook.channel as InlineHookChannelHttpCreate).config.headers[0].value = 'my-header-value-updated';
      (inlineHook.channel as InlineHookChannelHttpCreate).config.authScheme.value = 'my-shared-secret-updated';
      const updatedInlineHook = await client.inlineHookApi.replaceInlineHook({inlineHookId: inlineHook.id, inlineHook});
      expect(updatedInlineHook.id).to.equal(inlineHook.id);
      expect(updatedInlineHook.name).to.equal(inlineHook.name);
      expect((updatedInlineHook.channel as InlineHookChannelHttp).config.headers[0].value).to.equal('my-header-value-updated');
    });
  });

  describe('Delete InlineHook', () => {
    let inlineHook: InlineHook;
    beforeEach(async () => {
      inlineHook = await client.inlineHookApi.createInlineHook({inlineHook: getMockInlineHook()});
    });

    it('should not get inlineHook after deletion', async () => {
      await client.inlineHookApi.deactivateInlineHook({inlineHookId: inlineHook.id});
      await client.inlineHookApi.deleteInlineHook({inlineHookId: inlineHook.id});
      try {
        await client.inlineHookApi.getInlineHook({inlineHookId: inlineHook.id});
      } catch (e) {
        expect(e.status).to.equal(404);
      }
    });
  });
});

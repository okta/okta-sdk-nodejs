import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  LinkedObject } from '@okta/okta-sdk-nodejs';
import getMockLinkedObject = require('./mocks/linked-object');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/linked-object`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Linked Object API', () => {
  describe('Link Definition Operations', () => {
    let linkedObject;
    describe('Add linked object definition', () => {
      afterEach(async () => {
        await linkedObject.delete(linkedObject.primary.name);
      });

      it('should return instance of LinkedObject model', async () => {
        const mockLinkedObject = getMockLinkedObject();
        linkedObject = await client.addLinkedObjectDefinition(mockLinkedObject);
        expect(linkedObject).to.be.instanceOf(LinkedObject);
        expect(linkedObject.primary.name).to.equal(mockLinkedObject.primary.name);
        expect(linkedObject.associated.name).to.equal(mockLinkedObject.associated.name);
      });
    });

    describe('Get a linked object definition by name', () => {
      let linkedObjectFromGet;
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(getMockLinkedObject());
      });
      afterEach(async () => {
        await linkedObject.delete(linkedObject.primary.name);
      });

      it('should return LinkedObject by primary name', async () => {
        linkedObjectFromGet = await client.getLinkedObjectDefinition(linkedObject.primary.name);
        expect(linkedObjectFromGet).to.be.instanceOf(LinkedObject);
        expect(linkedObjectFromGet.primary.name).to.equal(linkedObject.primary.name);
      });

      it('should return LinkedObject by associated name', async () => {
        linkedObjectFromGet = await client.getLinkedObjectDefinition(linkedObject.associated.name);
        expect(linkedObjectFromGet).to.be.instanceOf(LinkedObject);
        expect(linkedObjectFromGet.associated.name).to.equal(linkedObject.associated.name);
      });
    });

    describe('List all linked object definitions', () => {
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(getMockLinkedObject());
      });
      afterEach(async () => {
        await linkedObject.delete(linkedObject.primary.name);
      });

      it('should return a Collection', async () => {
        const linkedObjects = await client.listLinkedObjectDefinitions();
        expect(linkedObjects).not.to.equal(null);
      });

      it('should resolve LinkedObject in collection', async () => {
        (await client.listLinkedObjectDefinitions()).forEach(linkedObject => {
          expect(linkedObject).to.be.instanceOf(LinkedObject);
        });
      });
    });

    describe('Delete linked object definition', () => {
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(getMockLinkedObject());
      });

      it('should not get linkedObject after deletion', async () => {
        await linkedObject.delete(linkedObject.primary.name);
        try {
          await client.getLinkedObjectDefinition(linkedObject.primary.name);
        } catch (e) {
          expect(e.statusCode).to.equal(404);
        }
      });
    });
  });
});

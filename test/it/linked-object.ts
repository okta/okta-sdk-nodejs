import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3 } from '@okta/okta-sdk-nodejs';
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
    xdescribe('Add linked object definition', () => {
      afterEach(async () => {
        await client.deleteLinkedObjectDefinition(linkedObject.primary.name);
      });

      it('should return instance of LinkedObject model', async () => {
        const mockLinkedObject = getMockLinkedObject();
        linkedObject = await client.addLinkedObjectDefinition(mockLinkedObject);
        expect(linkedObject).to.be.instanceOf(v3.LinkedObject);
        expect(linkedObject.primary.name).to.equal(mockLinkedObject.primary.name);
        expect(linkedObject.associated.name).to.equal(mockLinkedObject.associated.name);
      });
    });

    xdescribe('Get a linked object definition by name', () => {
      let linkedObjectFromGet;
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(getMockLinkedObject());
      });
      afterEach(async () => {
        await client.deleteLinkedObjectDefinition(linkedObject.primary.name);
      });

      it('should return LinkedObject by primary name', async () => {
        linkedObjectFromGet = await client.getLinkedObjectDefinition(linkedObject.primary.name);
        expect(linkedObjectFromGet).to.be.instanceOf(v3.LinkedObject);
        expect(linkedObjectFromGet.primary.name).to.equal(linkedObject.primary.name);
      });

      it('should return LinkedObject by associated name', async () => {
        linkedObjectFromGet = await client.getLinkedObjectDefinition(linkedObject.associated.name);
        expect(linkedObjectFromGet).to.be.instanceOf(v3.LinkedObject);
        expect(linkedObjectFromGet.associated.name).to.equal(linkedObject.associated.name);
      });
    });

    describe('List all linked object definitions', () => {
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(getMockLinkedObject());
      });
      afterEach(async () => {
        await client.deleteLinkedObjectDefinition(linkedObject.primary.name);
      });

      xit('should return a Collection', async () => {
        const linkedObjects = await client.listLinkedObjectDefinitions();
        expect(linkedObjects).to.be.instanceOf(Collection);
      });

      it('should resolve LinkedObject in collection', async () => {
        await (await client.listLinkedObjectDefinitions()).each(linkedObject => {
          expect(linkedObject).to.be.instanceOf(v3.LinkedObject);
        });
      });
    });

    xdescribe('Delete linked object definition', () => {
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(getMockLinkedObject());
      });

      it('should not get linkedObject after deletion', async () => {
        await client.deleteLinkedObjectDefinition(linkedObject.primary.name);
        try {
          await client.getLinkedObjectDefinition(linkedObject.primary.name);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });
  });
});

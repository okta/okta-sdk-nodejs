const expect = require('chai').expect;
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockLinkedObject = require('./mocks/linked-object.json');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/linked-object`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Linked Object API', () => {
  describe('Link Definition Operations', () => {
    let linkedObject;
    describe('Add linked object definition', () => {
      afterEach(async () => {
        await linkedObject.delete(linkedObject.primary.name);
      });

      it('should return instance of LinkedObject model', async () => {
        linkedObject = await client.addLinkedObjectDefinition(mockLinkedObject);
        expect(linkedObject).to.be.instanceOf(models.LinkedObject);
        expect(linkedObject.primary.name).to.equal(mockLinkedObject.primary.name);
        expect(linkedObject.associated.name).to.equal(mockLinkedObject.associated.name);
      });
    });

    describe('Get a linked object definition by name', () => {
      let linkedObjectFromGet;
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(mockLinkedObject);
      });
      afterEach(async () => {
        await linkedObject.delete(linkedObject.primary.name);
      });

      it('should return LinkedObject by primary name', async () => {
        linkedObjectFromGet = await client.getLinkedObjectDefinition(linkedObject.primary.name);
        expect(linkedObjectFromGet).to.be.instanceOf(models.LinkedObject);
        expect(linkedObjectFromGet.primary.name).to.equal(mockLinkedObject.primary.name);
      });

      it('should return LinkedObject by associated name', async () => {
        linkedObjectFromGet = await client.getLinkedObjectDefinition(linkedObject.associated.name);
        expect(linkedObjectFromGet).to.be.instanceOf(models.LinkedObject);
        expect(linkedObjectFromGet.associated.name).to.equal(mockLinkedObject.associated.name);
      });
    });

    describe('List all linked object definitions', () => {
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(mockLinkedObject);
      });
      afterEach(async () => {
        await linkedObject.delete(linkedObject.primary.name);
      });

      it('should return a Collection', async () => {
        const linkedObjects = await client.listLinkedObjectDefinitions();
        expect(linkedObjects).to.be.instanceOf(Collection);
      });

      it('should resolve LinkedObject in collection', async () => {
        await client.listLinkedObjectDefinitions().each(linkedObject => {
          expect(linkedObject).to.be.instanceOf(models.LinkedObject);
        });
      });
    });

    describe('Delete linked object definition', () => {
      beforeEach(async () => {
        linkedObject = await client.addLinkedObjectDefinition(mockLinkedObject);
      });

      it('should not get linkedObject after deletion', async () => {
        await linkedObject.delete(linkedObject.primary.name);
        try {
          await client.getLinkedObjectDefinition(linkedObject.primary.name);
        } catch (e) {
          expect(e.status).to.equal(404);
        }
      });
    });
  });
});

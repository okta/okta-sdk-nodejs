import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import getMockLinkedObject = require('./mocks/linked-object');
import getMockUser = require('./mocks/user-without-credentials');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-linked-object`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User linked object API', () => {
  let primaryUser;
  let associateUser;
  let linkedObject;
  beforeEach(async () => {
    primaryUser = await client.createUser(getMockUser(), { activate: false });
    associateUser = await client.createUser(getMockUser(), { activate: false });
    linkedObject = await client.addLinkedObjectDefinition(getMockLinkedObject());
  });
  afterEach(async () => {
    linkedObject = await client.deleteLinkedObjectDefinition(linkedObject.primary.name);

    await utils.cleanupUser(client, primaryUser);
    await utils.cleanupUser(client, associateUser);
  });

  describe('Set linked object value for primary', () => {
    it('should return status 204', async () => {
      const res = await client.setLinkedObjectForUser(associateUser.id, linkedObject.primary.name, primaryUser.id);
      expect(res).to.be.undefined;
    });
  });

  describe('Get linked object value', () => {
    let links;
    beforeEach(async () => {
      await client.setLinkedObjectForUser(associateUser.id, linkedObject.primary.name, primaryUser.id);
    });

    it('should return primary linked object value', async () => {
      links = await client.getLinkedObjectsForUser(associateUser.id, linkedObject.primary.name);
      expect(links).to.be.instanceOf(Collection);
      await links.each(link => {
        // OKTA-512349: ResponseLinks is not specified in getLinkedObjectsForUser signature
        // expect(link).to.be.instanceOf(v3.ResponseLinks);
        expect(link._links.self.href).contains(primaryUser.id);
      });
    });

    it('should return associate linked object value', async () => {
      links = await client.getLinkedObjectsForUser(primaryUser.id, linkedObject.associated.name);
      expect(links).to.be.instanceOf(Collection);
      await links.each(link => {
        // expect(link).to.be.instanceOf(v3.ResponseLinks);
        expect(link._links.self.href).contains(associateUser.id);
      });
    });
  });

  describe('Delete linked object value', () => {
    beforeEach(async () => {
      await client.setLinkedObjectForUser(associateUser.id, linkedObject.primary.name, primaryUser.id);
    });

    it('should return 204 after deleting linked object', async () => {
      const res = await client.removeLinkedObjectForUser(associateUser.id, linkedObject.primary.name);
      expect(res).to.be.undefined;
    });
  });
});

import { expect } from 'chai';
import {
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  LinkedObject,
  User,
  ResponseLinks
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import getMockLinkedObject = require('./mocks/linked-object');
import getMockUser = require('./mocks/user-without-credentials');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-linked-object`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User linked object API', () => {
  let primaryUser: User;
  let associateUser: User;
  let linkedObject: LinkedObject;
  beforeEach(async () => {
    primaryUser = await client.userApi.createUser({
      body: getMockUser(),
      activate: false
    });
    associateUser = await client.userApi.createUser({
      body: getMockUser(),
      activate: false
    });
    linkedObject = await client.linkedObjectApi.createLinkedObjectDefinition({
      linkedObject: getMockLinkedObject()
    });
  });
  afterEach(async () => {
    await client.linkedObjectApi.deleteLinkedObjectDefinition({
      linkedObjectName: linkedObject.primary.name
    });

    await utils.cleanupUser(client, primaryUser);
    await utils.cleanupUser(client, associateUser);
  });

  describe('Set linked object value for primary', () => {
    it('should return status 204', async () => {
      const res = await client.userApi.assignLinkedObjectValueForPrimary({
        userIdOrLogin: associateUser.id,
        primaryRelationshipName: linkedObject.primary.name,
        primaryUserId: primaryUser.id,
      });
      expect(res).to.be.undefined;
    });
  });

  describe('Get linked object value', () => {
    let links: Collection<ResponseLinks>;
    beforeEach(async () => {
      await client.userApi.assignLinkedObjectValueForPrimary({
        userIdOrLogin: associateUser.id,
        primaryRelationshipName: linkedObject.primary.name,
        primaryUserId: primaryUser.id,
      });
    });

    it('should return primary linked object value', async () => {
      links = await client.userApi.listLinkedObjectsForUser({
        userIdOrLogin: associateUser.id,
        relationshipName: linkedObject.primary.name,
      });
      expect(links).to.be.instanceOf(Collection);
      await links.each(link => {
        expect(link).to.be.instanceOf(ResponseLinks);
        // OKTA-512349: ResponseLinks has empty schema
        expect(link['_links'].self.href).contains(primaryUser.id);
      });
    });

    it('should return associate linked object value', async () => {
      links = await client.userApi.listLinkedObjectsForUser({
        userIdOrLogin: primaryUser.id,
        relationshipName: linkedObject.primary.name,
      });
      expect(links).to.be.instanceOf(Collection);
      await links.each(link => {
        expect(link).to.be.instanceOf(ResponseLinks);
        expect(link['_links'].self.href).contains(associateUser.id);
      });
    });
  });

  describe('Delete linked object value', () => {
    beforeEach(async () => {
      await client.userApi.assignLinkedObjectValueForPrimary({
        userIdOrLogin: associateUser.id,
        primaryRelationshipName: linkedObject.primary.name,
        primaryUserId: primaryUser.id,
      });
    });

    it('should return 204 after deleting linked object', async () => {
      const res = await client.userApi.deleteLinkedObjectForUser({
        userIdOrLogin: associateUser.id,
        relationshipName: linkedObject.primary.name
      });
      expect(res).to.be.undefined;
    });
  });
});

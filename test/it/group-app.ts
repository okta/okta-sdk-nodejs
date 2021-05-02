import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  Application } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import getMockGroup = require('./mocks/group');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-app`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Group App API', () => {
  describe('List assigned applications', () => {
    let application;
    let group;
    let groupAssignment;
    beforeEach(async () => {
      const mockApplication = utils.getBookmarkApplication();
      application = await client.createApplication(mockApplication);
      group = await client.createGroup(getMockGroup());
      groupAssignment = await application.createApplicationGroupAssignment(group.id);
    });
    afterEach(async () => {
      await groupAssignment.delete(application.id);
      await application.deactivate();
      await application.delete();
      await group.delete();
    });

    it('should return a Collection', async () => {
      const applications = await group.listApplications();
      expect(applications).to.be.instanceOf(Collection);
    });

    it('should resolve Application in collection', async () => {
      await group.listApplications().each(application => {
        expect(application).to.be.instanceOf(Application);
      });
    });
  });
});

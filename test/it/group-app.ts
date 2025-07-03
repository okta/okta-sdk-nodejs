import { expect } from 'chai';
import {
  Application,
  ApiClient,
  Collection,
  DefaultRequestExecutor,
  Group,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import getMockGroup = require('./mocks/group');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-app`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Group App API', () => {
  describe('List assigned applications', () => {
    let application: Application;
    let group: Group;
    beforeEach(async () => {
      const mockApplication = utils.getBookmarkApplication();
      application = await client.applicationApi.createApplication({application: mockApplication});
      group = await client.groupApi.createGroup({group: getMockGroup()});
      await client.applicationApi.assignGroupToApplication({appId: application.id, groupId: group.id});
    });
    afterEach(async () => {
      await client.applicationApi.unassignApplicationFromGroup({appId: application.id, groupId: group.id});
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
      await client.groupApi.deleteGroup({groupId: group.id});
    });

    it('should return a Collection', async () => {
      const applications = await client.groupApi.listAssignedApplicationsForGroup({groupId: group.id});
      expect(applications).to.be.instanceOf(Collection);
    });

    it('should resolve Application in collection', async () => {
      await (await client.groupApi.listAssignedApplicationsForGroup({groupId: group.id})).each(application => {
        expect(application).to.be.instanceOf(Application);
      });
    });
  });
});

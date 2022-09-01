import { expect } from 'chai';
import {
  Application,
  Collection,
  DefaultRequestExecutor,
} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import getMockGroup = require('./mocks/group');
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-app`;
}

const client: V2Client = utils.getV2Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Group App API', () => {
  describe('List assigned applications', () => {
    let application;
    let group;
    beforeEach(async () => {
      const mockApplication = utils.getBookmarkApplication();
      application = await client.createApplication(mockApplication);
      group = await client.createGroup(getMockGroup());
      await client.createApplicationGroupAssignment(application.id, group.id);
    });
    afterEach(async () => {
      await client.deleteApplicationGroupAssignment(application.id, group.id);
      await client.deactivateApplication(application.id);
      await client.deleteApplication(application.id);
      await client.deleteGroup(group.id);
    });

    it('should return a Collection', async () => {
      const applications = await client.listAssignedApplicationsForGroup(group.id);
      expect(applications).to.be.instanceOf(Collection);
    });

    it('should resolve Application in collection', async () => {
      await (await client.listAssignedApplicationsForGroup(group.id)).each(application => {
        expect(application).to.be.instanceOf(Application);
      });
    });
  });
});

import { expect } from 'chai';
import {
  DefaultRequestExecutor,
  Role,
} from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import type { GeneratedApiClient as V2Client } from '../../src/types/generated-client';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-role`;
}

const client: V2Client = utils.getV2Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Group role API', () => {
  describe('Role assignment', () => {
    let group;
    beforeEach(async () => {
      group = await client.createGroup(getMockGroup());
    });
    afterEach(async () => {
      await client.deleteGroup(group.id);
    });

    it('should assign and unassign role to/from group', async () => {
      const role = await client.assignRoleToGroup(group.id, { type: 'APP_ADMIN' });
      if (role instanceof Role) {
        const res = await client.removeRoleFromGroup(group.id, role.id);
        expect(res).to.be.undefined;
      } else {
        const collection = await client.listGroupAssignedRoles(group.id);
        const roles: Role[] = [];
        for await (const role of collection) {
          roles.push(role);
        }
        expect(roles.some(role => role.type === 'APP_ADMIN')).to.be.true;
      }
    });
  });
});

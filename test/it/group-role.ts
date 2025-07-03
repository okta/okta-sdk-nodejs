import { expect } from 'chai';
import {
  ApiClient,
  DefaultRequestExecutor,
  StandardRole,
  Group,
} from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-role`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

// no group roles in v3?
describe('Group role API', () => {
  describe('Role assignment', () => {
    let group: Group;
    beforeEach(async () => {
      group = await client.groupApi.addGroup({group: getMockGroup()});
    });
    afterEach(async () => {
      await client.groupApi.deleteGroup({groupId: group.id});
    });

    it('should assign and unassign role to/from group', async () => {
      const role = await client.roleAssignmentApi.assignRoleToGroup({
        groupId: group.id,
        assignRoleRequest: {
          type: 'APP_ADMIN'
        }
      });
      if (role) {
        if (role.assignmentType === 'GROUP') {
          const collection = await client.roleAssignmentApi.listGroupAssignedRoles({
            groupId: group.id
          });
          const roles: StandardRole[] = [];
          for await (const role of collection) {
            roles.push(role);
          }
          expect(roles.some(role => role.type === 'APP_ADMIN')).to.be.true;
        } else {
          const resRole = await client.roleAssignmentApi.getGroupAssignedRole({
            groupId: group.id,
            roleAssignmentId: role.id
          });
          expect(resRole.id).to.not.be.undefined;
          const res = await client.roleAssignmentApi.unassignRoleFromGroup({
            groupId: group.id,
            roleAssignmentId: role.id
          });
          expect(res).to.be.undefined;
        }
      }
    });
  });
});

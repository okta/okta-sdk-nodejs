import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  Role } from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/group-role`;
}

const client = new Client({
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
      await group.delete();
    });

    it('should assign and unassign role to/from group', async () => {
      const role = await group.assignRole({ type: 'APP_ADMIN' });
      expect(role).to.be.instanceOf(Role);

      const res = await client.removeRoleFromGroup(group.id, role.id);
      expect(res.status).to.equal(204);
    });
  });
});

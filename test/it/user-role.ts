import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import getMockUser = require('./mocks/user-without-credentials');
import utils = require('../utils');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-role`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User role API', () => {
  let user;
  before(async () => {
    user = await client.createUser(getMockUser(), { activate: false });
  });
  after(async () => {
    await utils.cleanupUser(client, user);
  });

  describe('Role assignment', () => {
    let role;
    afterEach(async () => {
      await client.removeRoleFromUser(user.id, role.id);
    });

    it('should assign role to user', async () => {
      role = await client.assignRoleToUser(user.id, { type: 'APP_ADMIN' });
      expect(role).to.be.instanceOf(v3.Role);
      expect(role.id).to.be.exist;
      expect(role.type).to.equal('APP_ADMIN');
    });
  });

  describe('Role unassignment', () => {
    let role;
    beforeEach(async () => {
      role = await client.assignRoleToUser(user.id, { type: 'APP_ADMIN' });
    });

    it('should unassign role from user', async () => {
      const res = await client.removeRoleFromUser(user.id, role.id);
      expect(res).to.be.undefined;
    });
  });

  describe('List user assigned roles', () => {
    let role;
    beforeEach(async () => {
      role = await client.assignRoleToUser(user.id, { type: 'APP_ADMIN' });
    });
    afterEach(async () => {
      await client.removeRoleFromUser(user.id, role.id);
    });

    it('should return a Collection of roles', async () => {
      const roles = await client.listAssignedRolesForUser(user.id);
      expect(roles).to.be.instanceOf(Collection);
      await roles.each(roleFromCollection => {
        expect(roleFromCollection).to.be.instanceOf(v3.Role);
        expect(roleFromCollection.id).to.be.equal(role.id);
      });
    });
  });

  describe('App targets for admin role', () => {
    let role;
    let application;
    beforeEach(async () => {
      role = await client.assignRoleToUser(user.id, { type: 'APP_ADMIN' });
      const mockApplication = utils.getBookmarkApplication();
      application = await client.createApplication(mockApplication);
    });
    afterEach(async () => {
      await client.deactivateApplication(application.id);
      await client.deleteApplication(application.id);
      await client.removeRoleFromUser(user.id, role.id);
    });

    describe('Add app target', () => {
      it('should add app target to admin user', async () => {
        const res = await client.addApplicationTargetToAdminRoleForUser(user.id, role.id, application.name);
        expect(res).to.be.undefined;
      });
    });

    describe('List app targets', () => {
      beforeEach(async () => {
        await client.addApplicationTargetToAdminRoleForUser(user.id, role.id, application.name);
      });

      it('should return a Collection of CatalogApplications', async () => {
        const apps = await client.listApplicationTargetsForApplicationAdministratorRoleForUser(user.id, role.id);
        expect(apps).to.be.instanceOf(Collection);
        await apps.each(app => {
          expect(app).to.be.instanceOf(v3.CatalogApplication);
          expect(app.name).to.be.equal(application.name);
        });
      });
    });
  });

  describe('Group targets for admin role', () => {
    let role;
    let group;
    beforeEach(async () => {
      role = await client.assignRoleToUser(user.id, { type: 'USER_ADMIN' });
      group = await client.createGroup(getMockGroup());
    });
    afterEach(async () => {
      await client.removeRoleFromUser(user.id, role.id);
      await client.groupApi.deleteGroup({
        groupId: group.id
      });
    });

    describe('Add group target', () => {
      it('should add group target to admin user', async () => {
        const res = await client.addGroupTargetToRole(user.id, role.id, group.id);
        expect(res).to.be.undefined;
      });
    });

    describe('List group targets', () => {
      beforeEach(async () => {
        await client.addGroupTargetToRole(user.id, role.id, group.id);
      });

      it('should return a Collection of Groups', async () => {
        const groups = await client.listApplicationTargetsForApplicationAdministratorRoleForUser(user.id, role.id);
        expect(groups).to.be.instanceOf(Collection);
        await groups.each(groupFromCollection => {
          expect(groupFromCollection).to.be.instanceOf(v3.Group);
          expect(groupFromCollection.id).to.be.equal(group.id);
        });
      });
    });
  });
});

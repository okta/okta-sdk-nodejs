import { expect } from 'chai';
import {
  BookmarkApplication,
  CatalogApplication,
  Client,
  Collection,
  DefaultRequestExecutor,
  Group,
  User,
  StandardRole
} from '@okta/okta-sdk-nodejs';
import getMockGroup = require('./mocks/group');
import getMockUser = require('./mocks/user-without-credentials');
import * as utils from '../utils';

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
  let user: User;
  before(async () => {
    user = await client.userApi.createUser({
      body: getMockUser(),
      activate: false
    });
  });
  after(async () => {
    await utils.cleanupUser(client, user);
  });

  describe('Role assignment', () => {
    let role: StandardRole;
    afterEach(async () => {
      await client.roleAssignmentApi.unassignRoleFromUser({
        userId: user.id,
        roleId: role.id
      });
    });

    it('should assign role to user', async () => {
      role = await client.roleAssignmentApi.assignRoleToUser({
        userId: user.id,
        assignRoleRequest: { type: 'APP_ADMIN' }
      });
      expect(role).to.be.instanceOf(StandardRole);
      expect(role.id).to.be.exist;
      expect(role.type).to.equal('APP_ADMIN');
    });
  });

  describe('Role unassignment', () => {
    let role: StandardRole;
    beforeEach(async () => {
      role = await client.roleAssignmentApi.assignRoleToUser({
        userId: user.id,
        assignRoleRequest: { type: 'APP_ADMIN' }
      });
    });

    it('should unassign role from user', async () => {
      const res = await client.roleAssignmentApi.unassignRoleFromUser({
        userId: user.id,
        roleId: role.id
      });
      expect(res).to.be.undefined;
    });
  });

  describe('List user assigned roles', () => {
    let role: StandardRole;
    beforeEach(async () => {
      role = await client.roleAssignmentApi.assignRoleToUser({
        userId: user.id,
        assignRoleRequest: { type: 'APP_ADMIN' }
      });
    });
    afterEach(async () => {
      await client.roleAssignmentApi.unassignRoleFromUser({
        userId: user.id,
        roleId: role.id
      });
    });

    it('should return a Collection of roles', async () => {
      const roles = await client.roleAssignmentApi.listAssignedRolesForUser({
        userId: user.id
      });
      expect(roles).to.be.instanceOf(Collection);
      await roles.each(roleFromCollection => {
        expect(roleFromCollection).to.be.instanceOf(StandardRole);
        expect(roleFromCollection.id).to.be.equal(role.id);
      });
    });
  });

  describe('App targets for admin role', () => {
    let role: StandardRole;
    let application: BookmarkApplication;
    beforeEach(async () => {
      role = await client.roleAssignmentApi.assignRoleToUser({
        userId: user.id,
        assignRoleRequest: { type: 'APP_ADMIN' }
      });
      const mockApplication = utils.getBookmarkApplication();
      application = await client.applicationApi.createApplication({
        application: mockApplication
      }) as BookmarkApplication;
    });
    afterEach(async () => {
      await client.applicationApi.deactivateApplication({appId: application.id});
      await client.applicationApi.deleteApplication({appId: application.id});
      await client.roleAssignmentApi.unassignRoleFromUser({
        userId: user.id,
        roleId: role.id
      });
    });

    describe('Add app target', () => {
      it('should add app target to admin user', async () => {
        const res = await client.roleTargetApi.assignAppTargetToAdminRoleForUser({
          userId: user.id,
          roleId: role.id,
          appName: application.name
        });
        expect(res).to.be.undefined;
      });
    });

    describe('List app targets', () => {
      beforeEach(async () => {
        await client.roleTargetApi.assignAppTargetToAdminRoleForUser({
          userId: user.id,
          roleId: role.id,
          appName: application.name
        });
      });

      it('should return a Collection of CatalogApplications', async () => {
        const apps = await client.roleTargetApi.listApplicationTargetsForApplicationAdministratorRoleForUser({
          userId: user.id,
          roleId: role.id
        });
        expect(apps).to.be.instanceOf(Collection);
        await apps.each(app => {
          expect(app).to.be.instanceOf(CatalogApplication);
          expect(app.name).to.be.equal(application.name);
        });
      });
    });
  });

  describe('Group targets for admin role', () => {
    let role: StandardRole;
    let group: Group;
    beforeEach(async () => {
      role = await client.roleAssignmentApi.assignRoleToUser({
        userId: user.id,
        assignRoleRequest: { type: 'USER_ADMIN' }
      });
      group = await client.groupApi.createGroup({group: getMockGroup()});
    });
    afterEach(async () => {
      await client.roleAssignmentApi.unassignRoleFromUser({
        userId: user.id,
        roleId: role.id
      });
      await client.groupApi.deleteGroup({groupId: group.id});
    });

    describe('Add group target', () => {
      it('should add group target to admin user', async () => {
        const res = await client.roleTargetApi.assignGroupTargetToUserRole({
          userId: user.id,
          roleId: role.id,
          groupId: group.id,
        });
        expect(res).to.be.undefined;
      });
    });

    describe('List group targets', () => {
      beforeEach(async () => {
        await client.roleTargetApi.assignGroupTargetToUserRole({
          userId: user.id,
          roleId: role.id,
          groupId: group.id,
        });
      });

      it('should return a Collection of Groups', async () => {
        const groups = await client.roleTargetApi.listApplicationTargetsForApplicationAdministratorRoleForUser({
          userId: user.id,
          roleId: role.id,
        });
        expect(groups).to.be.instanceOf(Collection);
        await groups.each(groupFromCollection => {
          expect(groupFromCollection).to.be.instanceOf(Group);
          expect(groupFromCollection.id).to.be.equal(group.id);
        });
      });
    });
  });
});

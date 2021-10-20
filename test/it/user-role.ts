import { expect } from 'chai';
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  Role, CatalogApplication, Group, RoleType } from '@okta/okta-sdk-nodejs';
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
    user = await client.createUser(getMockUser(), false);
  });
  after(async () => {
    await utils.cleanupUser(client, user);
  });

  describe('Role assignment', () => {
    let role;
    afterEach(async () => {
      await client.removeRoleFromUser(user.id, role.id);
      //await user.removeRole(role.id);
    });

    it('should assign role to user', async () => {
      // role = await user.assignRole({ type: 'APP_ADMIN' });
      role = await client.assignRoleToUser(user.id, {type: RoleType.AppAdmin});
      expect(role).to.be.instanceOf(Role);
      expect(role.id).to.be.exist;
      expect(role.type).to.equal('APP_ADMIN');
    });
  });

  describe('Role unassignment', () => {
    let role;
    beforeEach(async () => {
      role = await client.assignRoleToUser(user.id, {type : RoleType.AppAdmin});
      //role = await user.assignRole({ type: 'APP_ADMIN' });
    });

    it('should unassign role from user', async () => {
      const res = await client.removeRoleFromUser(user.id, role.id);
      //const res = await user.removeRole(role.id);
      expect(res.statusCode).to.equal(204);
    });
  });

  describe('List user assigned roles', () => {
    let role;
    beforeEach(async () => {
      role = await client.assignRoleToUser(user.id, {type : RoleType.AppAdmin});
    });
    afterEach(async () => {
      await client.removeRoleFromUser(user.id, role.id);
    });

    it('should return a Collection of roles', async () => {
      const roles = await client.listAssignedRolesForUser(user.id);
      expect(roles).not.to.equal(null);
      await roles.forEach(roleFromCollection => {
        expect(roleFromCollection).to.be.instanceOf(Role);
        expect(roleFromCollection.id).to.be.equal(role.id);
      });
    });
  });

  describe('App targets for admin role', () => {
    let role;
    let application;
    beforeEach(async () => {
      role = await client.assignRoleToUser(user.id, {type : RoleType.AppAdmin});
      // role = await user.assignRole({ type: 'APP_ADMIN' });
      const mockApplication = utils.getBookmarkApplication();
      application = await client.createApplication(mockApplication);
    });
    afterEach(async () => {
      await client.deactivateApplication(application.id);
      await client.deleteApplication(application.id);
      await client.removeRoleFromUser(user.id, role.id);
      /* await application.deactivate();
      await application.delete();
      await user.removeRole(role.id); */
    });

    describe('Add app target', () => {
      it('should add app target to admin user', async () => {
        const res = await client.addApplicationTargetToAdminRoleForUser(user.id, role.id, application.name);
        // const res = await role.addAppTargetToAdminRoleForUser(user.id, application.name);
        expect(res.statusCode).to.equal(204);
      });
    });

    describe('List app targets', () => {
      beforeEach(async () => {
        await await client.addApplicationTargetToAdminRoleForUser(user.id, role.id, application.name);
      });

      it('should return a Collection of CatalogApplications', async () => {
        const apps = await client.listApplicationTargetsForApplicationAdministratorRoleForUser(user.id, role.id);
        expect(apps).not.to.equal(null);
        await apps.forEach(app => {
          expect(app).to.be.instanceOf(CatalogApplication);
          expect(app.name).to.be.equal(application.name);
        });
      });
    });
  });

  describe('Group targets for admin role', () => {
    let role;
    let group;
    beforeEach(async () => {
      role = await client.assignRoleToUser(user.id, { type: RoleType.UserAdmin });
      //role = await user.assignRole({ type: 'USER_ADMIN' });
      group = await client.createGroup(getMockGroup());
    });
    afterEach(async () => {
      await client.removeRoleFromUser(user.id, role.id);
      await client.deleteGroup(group.id);
      //await user.removeRole(role.id);
      //await group.delete();
    });

    describe('Add group target', () => {
      it('should add group target to admin user', async () => {
        const res = await client.addGroupTargetToRole(user.id, role.id, group.id);
        // const res = await user.addGroupTarget(role.id, group.id);
        expect(res.statusCode).to.equal(204);
      });
    });

    describe('List group targets', () => {
      beforeEach(async () => {
        await client.addGroupTargetToRole(user.id, role.id, group.id);
        //await user.addGroupTarget(role.id, group.id);
      });

      it('should return a Collection of Groups', async () => {
        const groups = await client.listApplicationTargetsForApplicationAdministratorRoleForUser(user.id, role.id);
        expect(groups).not.to.equal(null);
        await groups.forEach(groupFromCollection => {
          expect(groupFromCollection).to.be.instanceOf(Group);
          expect(groupFromCollection.id).to.be.equal(group.id);
        });
      });
    });
  });
});

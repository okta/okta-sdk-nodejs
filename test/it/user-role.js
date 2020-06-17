const expect = require('chai').expect;
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockGroup = require('./mocks/group.json');
const mockUser = require('./mocks/user-without-credentials.json');
const utils = require('../utils');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-role`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User role API', () => {
  let user;
  beforeEach(async () => {
    user = await client.createUser(mockUser, { activate: false });
  });
  afterEach(async () => {
    await utils.cleanupUser(client, user);
  });

  describe('Role assignment', () => {
    let role;
    afterEach(async () => {
      user.removeRole(role.id);
    });

    it('should assign role to user', async () => {
      role = await user.assignRole({ type: 'APP_ADMIN' });
      expect(role).to.be.instanceOf(models.Role);
      expect(role.id).to.be.exist;
      expect(role.type).to.equal('APP_ADMIN');
    });
  });

  describe('Role unassignment', () => {
    let role;
    beforeEach(async () => {
      role = await user.assignRole({ type: 'APP_ADMIN' });
    });

    it('should unassign role from user', async () => {
      const res = await user.removeRole(role.id);
      expect(res.status).to.equal(204);
    });
  });

  describe('List user assigned roles', () => {
    let role;
    beforeEach(async () => {
      role = await user.assignRole({ type: 'APP_ADMIN' });
    });
    afterEach(async () => {
      user.removeRole(role.id);
    });

    it('should return a Collection of roles', async () => {
      const roles = await user.listAssignedRoles();
      expect(roles).to.be.instanceOf(Collection);
      await roles.each(roleFromCollection => {
        expect(roleFromCollection).to.be.instanceOf(models.Role);
        expect(roleFromCollection.id).to.be.equal(role.id);
      });
    });
  });

  describe('App targets for admin role', () => {
    let role;
    let application;
    beforeEach(async () => {
      role = await user.assignRole({ type: 'APP_ADMIN' });
      const mockApplication = utils.getBookmarkApplication();
      application = await client.createApplication(mockApplication);
    });
    afterEach(async () => {
      await application.deactivate();
      await application.delete();
      await user.removeRole(role.id);
    });

    describe('Add app target', () => {
      it('should add app target to admin user', async () => {
        const res = await role.addAppTargetToAdminRoleForUser(user.id, application.name);
        expect(res.status).to.equal(204);
      });
    });

    describe('List app targets', () => {
      beforeEach(async () => {
        await role.addAppTargetToAdminRoleForUser(user.id, application.name);
      });

      it('should return a Collection of CatalogApplications', async () => {
        const apps = await client.listApplicationTargetsForApplicationAdministratorRoleForUser(user.id, role.id);
        expect(apps).to.be.instanceOf(Collection);
        await apps.each(app => {
          expect(app).to.be.instanceOf(models.CatalogApplication);
          expect(app.name).to.be.equal(application.name);
        });
      });
    });
  });

  describe('Group targets for admin role', () => {
    let role;
    let group;
    beforeEach(async () => {
      role = await user.assignRole({ type: 'USER_ADMIN' });
      group = await client.createGroup(mockGroup);
    });
    afterEach(async () => {
      await user.removeRole(role.id);
      await group.delete();
    });

    describe('Add group target', () => {
      it('should add group target to admin user', async () => {
        const res = await user.addGroupTarget(role.id, group.id);
        expect(res.status).to.equal(204);
      });
    });

    describe('List group targets', () => {
      beforeEach(async () => {
        await user.addGroupTarget(role.id, group.id);
      });

      it('should return a Collection of Groups', async () => {
        const groups = await client.listApplicationTargetsForApplicationAdministratorRoleForUser(user.id, role.id);
        expect(groups).to.be.instanceOf(Collection);
        await groups.each(groupFromCollection => {
          expect(groupFromCollection).to.be.instanceOf(models.Group);
          expect(groupFromCollection.id).to.be.equal(group.id);
        });
      });
    });
  });
});

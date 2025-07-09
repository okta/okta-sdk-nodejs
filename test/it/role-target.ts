import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  StandardRole,
  StandardRoleAssignmentSchema,
  User,
  Group,
  OpenIdConnectApplication,
  CatalogApplication,
  RoleTarget,
  OrgSetting,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import utils = require('../utils');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

const createOidcApp = async () => {
  const app = utils.getServiceApplication();
  await utils.removeAppByLabel(client, app.label);
  return await client.applicationApi.createApplication({application: app});
};

const appAdminUserData = {
  profile: utils.getMockProfile('role-target'),
  credentials: {
    password: { value: 'Abcd1234#@' }
  }
};

const appAdminGroupData = {
  profile: {
    name: `node-sdk: App Admin Group ${faker.random.word()}`.substring(0, 49)
  }
};

const userAdminGroupData = {
  profile: {
    name: `node-sdk: User Admin Group ${faker.random.word()}`.substring(0, 49)
  }
};

describe('Role Target Api', () => {
  let oidcApplication: OpenIdConnectApplication;
  let appAdminClientRole: StandardRole;
  let appAdminUser: User;
  let appAdminGroup: Group;
  let userAdminGroup: Group;
  let appAdminRole: StandardRole;
  let appAdminGroupRole: StandardRole;
  let userAdminGroupRole: StandardRole;
  let orgSettings: OrgSetting;

  before(async () => {
    orgSettings = await client.orgSettingApi.getOrgSettings();

    // create user
    appAdminUser = await client.userApi.createUser({
      body: appAdminUserData,
      activate: true
    });

    // create groups
    appAdminGroup = await client.groupApi.createGroup({
      group: appAdminGroupData
    });
    userAdminGroup = await client.groupApi.createGroup({
      group: userAdminGroupData
    });

    // assign role 'APP_ADMIN' to user
    appAdminRole = await client.roleAssignmentApi.assignRoleToUser({
      userId: appAdminUser.id,
      assignRoleRequest: {
        type: 'APP_ADMIN'
      }
    });

    // assign role 'APP_ADMIN' to group
    await client.roleAssignmentApi.assignRoleToGroup({
      groupId: appAdminGroup.id,
      assignRoleRequest: {
        type: 'APP_ADMIN'
      }
    });

    // assign role 'USER_ADMIN' to group
    await client.roleAssignmentApi.assignRoleToGroup({
      groupId: userAdminGroup.id,
      assignRoleRequest: {
        type: 'USER_ADMIN'
      }
    });

    // get group role 'APP_ADMIN'
    let groupRolesCollection = await client.roleAssignmentApi.listGroupAssignedRoles({
      groupId: appAdminGroup.id
    });
    await groupRolesCollection.each(r => {
      if (r.type === 'APP_ADMIN') {
        appAdminGroupRole = r;
        return false;
      }
    });

    // get group role 'USER_ADMIN'
    groupRolesCollection = await client.roleAssignmentApi.listGroupAssignedRoles({
      groupId: userAdminGroup.id
    });
    await groupRolesCollection.each(r => {
      if (r.type === 'USER_ADMIN') {
        userAdminGroupRole = r;
        return false;
      }
    });

    // create app
    oidcApplication = await createOidcApp() as OpenIdConnectApplication;

    // assign APP_ADMIN role to app
    appAdminClientRole = await client.roleAssignmentApi.assignRoleToClient({
      clientId: oidcApplication.id,
      assignRoleRequest: {
        type: 'APP_ADMIN'
      } as StandardRoleAssignmentSchema
    });
  });

  after(async () => {
    if (appAdminUser) {
      await utils.deleteUser(appAdminUser, client);
    }
    if (appAdminGroup) {
      await client.groupApi.deleteGroup({
        groupId: appAdminGroup.id,
      });
    }
    if (userAdminGroup) {
      await client.groupApi.deleteGroup({
        groupId: userAdminGroup.id,
      });
    }
    if (oidcApplication) {
      await client.applicationApi.deactivateApplication({appId: oidcApplication.id});
      await client.applicationApi.deleteApplication({appId: oidcApplication.id});
    }
  });

  describe('RoleBTargetAdmin', () => {
    it('Removing the last OIN app target from an APP_ADMIN role assignment should trigger exception', async () => {
      await client.roleTargetApi.assignAppTargetToAdminRoleForUser({
        userId: appAdminUser.id,
        roleId: appAdminRole.id,
        appName: 'facebook',
      });
      try {
        await client.roleTargetApi.unassignAppTargetFromAppAdminRoleForUser({
          userId: appAdminUser.id,
          roleId: appAdminRole.id,
          appName: 'facebook',
        });
      } catch (e) {
        expect(e.status).to.equal(400);
      }

      const appTargets: CatalogApplication[] = [];
      const appTargetCollection = await client.roleTargetApi.listApplicationTargetsForApplicationAdministratorRoleForUser({
        roleId: appAdminRole.id,
        userId: appAdminUser.id,
      });
      await appTargetCollection.each(appTarget => appTargets.push(appTarget));
      expect(appTargets.length).to.equal(1);
      expect(appTargets[0].name).to.equal('facebook');
    });

    it('Can assign and unassign app targets from an APP_ADMIN role assignment to an admin user', async () => {
      await client.roleTargetApi.assignAppTargetToAdminRoleForUser({
        userId: appAdminUser.id,
        roleId: appAdminRole.id,
        appName: 'facebook',
      });
      await client.roleTargetApi.assignAppTargetToAdminRoleForUser({
        userId: appAdminUser.id,
        roleId: appAdminRole.id,
        appName: 'google',
      });
      await client.roleTargetApi.assignAppTargetToAdminRoleForUser({
        userId: appAdminUser.id,
        roleId: appAdminRole.id,
        appName: 'github',
      });

      await client.roleTargetApi.unassignAppTargetFromAppAdminRoleForUser({
        userId: appAdminUser.id,
        roleId: appAdminRole.id,
        appName: 'facebook',
      });

      const appTargets: CatalogApplication[] = [];
      const appTargetCollection = await client.roleTargetApi.listApplicationTargetsForApplicationAdministratorRoleForUser({
        roleId: appAdminRole.id,
        userId: appAdminUser.id,
      });
      await appTargetCollection.each(appTarget => appTargets.push(appTarget));
      expect(appTargets.length).to.equal(2);
      expect(appTargets.map(a => a.name)).to.include('google');
      expect(appTargets.map(a => a.name)).to.include('github');

      const roleTargets: RoleTarget[] = [];
      const roleTargetCollection = await client.roleTargetApi.getRoleTargetsByUserIdAndRoleId({
        userId: appAdminUser.id,
        assignmentType: 'USER',
        roleIdOrEncodedRoleId: appAdminRole.id,
      });
      await roleTargetCollection.each(roleTarget => {
        roleTargets.push(roleTarget);
      });
      expect(roleTargets.length).to.equal(2);
      expect(roleTargets.map(a => a.orn)).to.include(`orn:oktapreview:idp:${orgSettings.id}:apps:google`);
      expect(roleTargets.map(a => a.orn)).to.include(`orn:oktapreview:idp:${orgSettings.id}:apps:github`);
    });
  });

  describe('RoleBTargetBGroup', () => {
    it('Can assign and unassign OIN app targets from an APP_ADMIN role assignment to a group', async () => {
      await client.roleTargetApi.assignAppTargetToAdminRoleForGroup({
        groupId: appAdminGroup.id,
        roleId: appAdminGroupRole.id,
        appName: 'facebook'
      });
      await client.roleTargetApi.assignAppTargetToAdminRoleForGroup({
        groupId: appAdminGroup.id,
        roleId: appAdminGroupRole.id,
        appName: 'google'
      });

      let appTargets: CatalogApplication[] = [];
      let appTargetCollection = await client.roleTargetApi.listApplicationTargetsForApplicationAdministratorRoleForGroup({
        roleId: appAdminGroupRole.id,
        groupId: appAdminGroup.id,
      });
      await appTargetCollection.each(appTarget => appTargets.push(appTarget));
      expect(appTargets.length).to.equal(2);
      expect(appTargets.map(a => a.name)).to.include('facebook');
      expect(appTargets.map(a => a.name)).to.include('google');

      await client.roleTargetApi.unassignAppTargetToAdminRoleForGroup({
        groupId: appAdminGroup.id,
        roleId: appAdminGroupRole.id,
        appName: 'google'
      });

      appTargets = [];
      appTargetCollection = await client.roleTargetApi.listApplicationTargetsForApplicationAdministratorRoleForGroup({
        roleId: appAdminGroupRole.id,
        groupId: appAdminGroup.id,
      });
      await appTargetCollection.each(appTarget => appTargets.push(appTarget));
      expect(appTargets.length).to.equal(1);
      expect(appTargets.map(a => a.name)).to.include('facebook');
    });

    it('Can assign a group target to a USER_ADMIN role assignment to a group', async () => {
      await client.roleTargetApi.assignGroupTargetToGroupAdminRole({
        groupId: userAdminGroup.id,
        targetGroupId: appAdminGroup.id,
        roleId: userAdminGroupRole.id,
      });

      const groupTargets: Group[] = [];
      const groupTargetCollection = await client.roleTargetApi.listGroupTargetsForGroupRole({
        groupId: userAdminGroup.id,
        roleId: userAdminGroupRole.id,
      });
      await groupTargetCollection.each(g => groupTargets.push(g));
      expect(groupTargets.length).to.equal(1);
      expect(groupTargets[0].id).to.equal(appAdminGroup.id);
    });
  });

  describe('RoleBTargetClient', () => {
    it('Can assign app target role to client', async () => {
      await client.roleTargetApi.assignAppTargetRoleToClient({
        appName: 'google',
        roleAssignmentId: appAdminClientRole.id,
        clientId: oidcApplication.id,
      });
      await client.roleTargetApi.assignAppTargetRoleToClient({
        appName: 'facebook',
        roleAssignmentId: appAdminClientRole.id,
        clientId: oidcApplication.id,
      });
      await client.roleTargetApi.removeAppTargetRoleFromClient({
        appName: 'google',
        roleAssignmentId: appAdminClientRole.id,
        clientId: oidcApplication.id,
      });

      const appTargets: CatalogApplication[] = [];
      const appTargetCollection = await client.roleTargetApi.listAppTargetRoleToClient({
        roleAssignmentId: appAdminClientRole.id,
        clientId: oidcApplication.id,
      });
      await appTargetCollection.each(a => appTargets.push(a));
      expect(appTargets.length).to.equal(1);
      expect(appTargets[0].name).to.equal('facebook');
    });

    it('Can assign group target role to client', async () => {
      await client.roleTargetApi.assignGroupTargetRoleForClient({
        clientId: oidcApplication.id,
        roleAssignmentId: userAdminGroupRole.id,
        groupId: userAdminGroup.id,
      });

      const groups: Group[] = [];
      const groupCollection = await client.roleTargetApi.listGroupTargetRoleForClient({
        roleAssignmentId: userAdminGroupRole.id,
        clientId: oidcApplication.id,
      });
      await groupCollection.each(g => groups.push(g));
      expect(groups.length).to.equal(1);
      expect(groups[0].id).to.equal(userAdminGroup.id);
    });
  });
});

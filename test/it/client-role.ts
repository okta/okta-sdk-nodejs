import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  Application,
  StandardRole,
  Collection,
  ListGroupAssignedRoles200ResponseInner,
  CreateIamRoleRequest,
  IamRole,
  CustomRoleAssignmentSchema,
  StandardRoleAssignmentSchema,
  CreateResourceSetRequest,
  ResourceSet,
  CustomRole,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');
import utils = require('../utils');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const issuer = orgUrl.replace(/\/$/, '');
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.roles.read',
    'okta.roles.manage',
    'okta.apps.read',
    'okta.apps.manage'
  ]
});

const createOidcApp = async () => {
  const app = utils.getServiceApplication();
  await utils.removeAppByLabel(client, app.label);
  return await client.applicationApi.createApplication({application: app});
};

describe('Role Assignment Client Api', () => {
  let oidcApplication: Application;
  let customRole: IamRole;
  let resourceSet: ResourceSet;

  before(async () => {
    oidcApplication = await createOidcApp();

    const customRoleLabel = `node-sdk: Custom role - ${faker.random.word()}`.substring(0, 49);
    const customRoleInstance: CreateIamRoleRequest = {
      label: customRoleLabel,
      description: customRoleLabel,
      permissions: [
        'okta.users.read',
        'okta.groups.read',
      ],
    };
    customRole = await client.customRoleApi.createRole({
      instance: customRoleInstance,
    });

    const label = `node-sdk: Resource set - ${faker.random.word()}`.substring(0, 49);
    const instance: CreateResourceSetRequest = {
      label,
      description: label,
      resources: [
        `${issuer}/api/v1/users`
      ],
    };
    resourceSet = await client.resourceSetApi.createResourceSet({ instance });
  });

  after(async () => {
    if (oidcApplication) {
      await client.applicationApi.deactivateApplication({appId: oidcApplication.id});
      await client.applicationApi.deleteApplication({appId: oidcApplication.id});
    }
    if (resourceSet) {
      await client.resourceSetApi.deleteResourceSet({
        resourceSetId: resourceSet.id
      });
    }
    if (customRole) {
      await client.customRoleApi.deleteRole({
        roleIdOrLabel: customRole.id
      });
    }
  });

  it('Assign and delete standard role', async () => {
    // assign
    let newRole = await client.roleAssignmentApi.assignRoleToClient({
      clientId: oidcApplication.id,
      assignRoleRequest: {
        type: 'HELP_DESK_ADMIN'
      } as StandardRoleAssignmentSchema
    });
    expect(newRole).to.be.instanceOf(StandardRole);
    expect(newRole.type).to.equal('HELP_DESK_ADMIN');

    // list
    let rolesCollection = await client.roleAssignmentApi.listRolesForClient({
      clientId: oidcApplication.id,
    });
    expect(rolesCollection).to.be.instanceOf(Collection);
    let roles: ListGroupAssignedRoles200ResponseInner[] = [];
    await rolesCollection.each(role => {
      roles.push(role);
    });
    expect(roles.length).to.be.equal(1);
    expect(roles[0]).to.be.instanceOf(StandardRole);
    expect(roles[0].type).to.equal('HELP_DESK_ADMIN');

    // retrieve
    newRole = await client.roleAssignmentApi.retrieveClientRole({
      clientId: oidcApplication.id,
      roleAssignmentId: newRole.id,
    });
    expect(newRole).to.be.instanceOf(StandardRole);
    expect(newRole.type).to.equal('HELP_DESK_ADMIN');

    // delete
    await client.roleAssignmentApi.deleteRoleFromClient({
      clientId: oidcApplication.id,
      roleAssignmentId: newRole.id,
    });

    // list
    rolesCollection = await client.roleAssignmentApi.listRolesForClient({
      clientId: oidcApplication.id,
    });
    roles = [];
    await rolesCollection.each(role => {
      roles.push(role);
    });
    expect(roles.length).to.be.equal(0);
  });

  it('Assign custom role', async () => {
    // assign
    let newRole = await client.roleAssignmentApi.assignRoleToClient({
      clientId: oidcApplication.id,
      assignRoleRequest: {
        type: 'CUSTOM',
        resource_set: resourceSet.id,
        role: customRole.id,
      } as CustomRoleAssignmentSchema
    });
    expect(newRole).to.be.instanceOf(CustomRole);
    expect(newRole.type).to.equal('CUSTOM');
    expect((newRole as CustomRole).role).to.equal(customRole.id);

    // retrieve
    newRole = await client.roleAssignmentApi.retrieveClientRole({
      clientId: oidcApplication.id,
      roleAssignmentId: newRole.id,
    });
    expect(newRole).to.be.instanceOf(CustomRole);
    expect(newRole.type).to.equal('CUSTOM');
    expect((newRole as CustomRole).role).to.equal(customRole.id);

    // list
    let rolesCollection = await client.roleAssignmentApi.listRolesForClient({
      clientId: oidcApplication.id,
    });
    expect(rolesCollection).to.be.instanceOf(Collection);
    let roles: ListGroupAssignedRoles200ResponseInner[] = [];
    await rolesCollection.each(role => {
      roles.push(role);
    });
    expect(roles.length).to.be.equal(1);
    expect(roles[0]).to.be.instanceOf(CustomRole);
    expect(roles[0].type).to.equal('CUSTOM');
    expect((roles[0] as CustomRole).role).to.equal(customRole.id);

    // delete
    await client.roleAssignmentApi.deleteRoleFromClient({
      clientId: oidcApplication.id,
      roleAssignmentId: newRole.id,
    });

    // list
    rolesCollection = await client.roleAssignmentApi.listRolesForClient({
      clientId: oidcApplication.id,
    });
    roles = [];
    await rolesCollection.each(role => {
      roles.push(role);
    });
    expect(roles.length).to.be.equal(0);
  });
});

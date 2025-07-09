import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  CreateIamRoleRequest,
  IamRole,
  CreateUpdateIamRolePermissionRequest,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Roles API', () => {
  it('Create / update / get / delete custom role', async () => {
    // create
    const customRoleLabel = `node-sdk: Custom role - ${faker.random.word()}`.substring(0, 49);
    const customRoleInstance: CreateIamRoleRequest = {
      label: customRoleLabel,
      description: customRoleLabel,
      permissions: [
        'okta.users.read',
        'okta.groups.read',
      ],
    };
    const customRole = await client.customRoleApi.createRole({
      instance: customRoleInstance,
    });

    // replace
    await client.customRoleApi.replaceRole({
      roleIdOrLabel: customRole.id,
      instance: {
        description: 'Updated description',
        label: customRole.label,
      }
    });

    // get
    const roleFromGet = await client.customRoleApi.getRole({
      roleIdOrLabel: customRole.id,
    });
    expect(roleFromGet.label).equal(customRole.label);
    expect(roleFromGet.description).equal('Updated description');

    // delete
    await client.customRoleApi.deleteRole({
      roleIdOrLabel: customRole.id,
    });
    try {
      await client.customRoleApi.getRole({ roleIdOrLabel: customRole.id });
    } catch (e) {
      expect(e.status).to.equal(404);
    }
  });

  describe('Permissions', () => {
    let customRole: IamRole;

    before(async () => {
      const customRoleLabel = `node-sdk: Custom role - ${faker.random.word()}`.substring(0, 49);
      const customRoleInstance: CreateIamRoleRequest = {
        label: customRoleLabel,
        description: customRoleLabel,
        permissions: [
          'okta.groups.read',
        ],
      };
      customRole = await client.customRoleApi.createRole({
        instance: customRoleInstance,
      });
    });

    after(async () => {
      if (customRole) {
        await client.customRoleApi.deleteRole({
          roleIdOrLabel: customRole.id,
        });
      }
    });

    it('Create / delete / list permissions', async () => {
      // create
      const instance: CreateUpdateIamRolePermissionRequest = {
        conditions: {
          include: {
            'okta:ResourceAttribute/User/Profile': [
              'city',
              'state'
            ]
          },
        }
      };
      await client.customRoleApi.createRolePermission({
        roleIdOrLabel: customRole.id,
        permissionType: 'okta.users.read',
        instance
      });

      // list
      let permissions = await client.customRoleApi.listRolePermissions({
        roleIdOrLabel: customRole.id,
      });
      expect(permissions.permissions.length).to.equal(2);
      expect(permissions.permissions.map(p => p.label)).to.include('okta.users.read');
      expect(permissions.permissions.map(p => p.label)).to.include('okta.groups.read');

      // delete
      await client.customRoleApi.deleteRolePermission({
        roleIdOrLabel: customRole.id,
        permissionType: 'okta.groups.read'
      });
      permissions = await client.customRoleApi.listRolePermissions({
        roleIdOrLabel: customRole.id,
      });
      expect(permissions.permissions.length).to.equal(1);
      expect(permissions.permissions[0].label).to.equal('okta.users.read');
      expect(Object.keys(permissions.permissions[0].conditions.include)).to.include('okta:ResourceAttribute/User/Profile');
    });
  });

});

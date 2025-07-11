import { expect } from 'chai';
import {
  Client,
  DefaultRequestExecutor,
  ResourceSet,
  HrefObjectResourceSetResourcesLink,
  CreateResourceSetRequest,
  ResourceSetResourcePostRequest,
  Group,
  ResourceSetBindingEditResponse,
  CustomRole,
  OrgSetting,
  ResourceSetBindingCreateRequest,
  CreateIamRoleRequest,
} from '@okta/okta-sdk-nodejs';
import faker = require('@faker-js/faker');

const orgUrl = process.env.OKTA_CLIENT_ORGURL;
const issuer = orgUrl.replace(/\/$/, '');
const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor(),
  scopes: [
    'okta.roles.read',
    'okta.roles.manage',
    'okta.orgs.read'
  ]
});

describe('Resource Sets API', () => {
  it('List resource sets', async () => {
    const resourceSets = await client.resourceSetApi.listResourceSets();
    expect(resourceSets.resource_sets).to.be.an.instanceOf(Array);
    for (const resourceSet of resourceSets.resource_sets) {
      expect(resourceSet).to.be.instanceOf(ResourceSet);
    }
  });

  it('Get a resource set', async () => {
    const resourceSet = await client.resourceSetApi.getResourceSet({ resourceSetId: 'WORKFLOWS_IAM_POLICY' });
    expect(resourceSet).to.be.an.instanceOf(ResourceSet);
    expect(resourceSet._links.resources).to.be.instanceOf(HrefObjectResourceSetResourcesLink);
  });

  it('Create / update / remove a resource set', async () => {
    // create
    const label = `node-sdk: Resource set - ${faker.random.word()}`.substring(0, 49);
    const instance: CreateResourceSetRequest = {
      label,
      description: label,
      resources: [
        `${issuer}/api/v1/users`
      ],
    };
    const resourceSet = await client.resourceSetApi.createResourceSet({ instance });
    expect(resourceSet).to.be.an.instanceOf(ResourceSet);

    // update
    instance.description = 'Updated description';
    const updatedResourceSet = await client.resourceSetApi.replaceResourceSet({
      resourceSetId: resourceSet.id,
      instance,
    });
    expect(updatedResourceSet.description).to.equal('Updated description');

    // delete
    await client.resourceSetApi.deleteResourceSet({
      resourceSetId: resourceSet.id
    });
    try {
      await client.resourceSetApi.getResourceSet({ resourceSetId: resourceSet.id });
    } catch (e) {
      expect(e.status).to.equal(404);
    }
  });

  describe('Resources', () => {
    let resourceSet: ResourceSet | undefined;
    let anyGroup: Group | undefined;
    let orgSettings: OrgSetting | undefined;

    before(async () => {
      orgSettings = await client.orgSettingApi.getOrgSettings();

      // create resource set
      const label = `node-sdk: Resource set - ${faker.random.word()}`.substring(0, 49);
      const instance: CreateResourceSetRequest = {
        label,
        description: label,
        resources: [
          `${issuer}/api/v1/users`
        ],
      };
      resourceSet = await client.resourceSetApi.createResourceSet({ instance });

      // get any group
      const groupsCollection = await client.groupApi.listGroups({});
      await groupsCollection.each(async gr => {
        anyGroup = gr;
        return false;
      });
    });

    after(async () => {
      if (resourceSet) {
        await client.resourceSetApi.deleteResourceSet({
          resourceSetId: resourceSet.id
        });
      }
    });

    it('Add / update / delete a resource, list resources', async () => {
      // add resource
      const instance: ResourceSetResourcePostRequest = {
        resourceOrnOrUrl: `${issuer}/api/v1/groups`,
        conditions: {
          Exclude: {
            okta_ORN: []
          }
        }
      };
      let newResource = await client.resourceSetApi.addResourceSetResource({
        resourceSetId: resourceSet.id,
        instance,
      });
      expect(newResource.orn).to.equal(`orn:oktapreview:directory:${orgSettings.id}:groups`);
      expect(newResource.conditions.Exclude.okta_ORN?.[0]).to.equal(undefined);

      // update
      newResource = await client.resourceSetApi.replaceResourceSetResource({
        resourceSetId: resourceSet.id,
        resourceId: newResource.id,
        resourceSetResourcePutRequest: {
          conditions: {
            Exclude: {
              okta_ORN: [
                `orn:oktapreview:directory:${orgSettings.id}:groups:${anyGroup.id}`
              ]
            }
          }
        }
      });
      expect(newResource.conditions.Exclude.okta_ORN?.[0]).to.equal(`orn:oktapreview:directory:${orgSettings.id}:groups:${anyGroup.id}`);

      // list resources
      let resources = await client.resourceSetApi.listResourceSetResources({
        resourceSetId: resourceSet.id,
      });
      expect(resources.resources.length).to.be.equal(2);

      // delete
      await client.resourceSetApi.deleteResourceSetResource({
        resourceSetId: resourceSet.id,
        resourceId: newResource.id,
      });
      resources = await client.resourceSetApi.listResourceSetResources({
        resourceSetId: resourceSet.id,
      });
      // TODO: delete doesn't work?
      // expect(resources.resources.length).to.be.equal(1);
    });

  });

  describe('Bindings', () => {
    let resourceSet: ResourceSet;
    let groups: Group[];
    let customRole: CustomRole;

    before(async () => {
      // create resource set
      const resourceSetLabel = `node-sdk: Resource set - ${faker.random.word()}`.substring(0, 49);
      const resourceSetInstance: CreateResourceSetRequest = {
        label: resourceSetLabel,
        description: resourceSetLabel,
        resources: [
          `${issuer}/api/v1/users`
        ],
      };
      resourceSet = await client.resourceSetApi.createResourceSet({ instance: resourceSetInstance });

      // create group
      const createGroupRequest = () => ({
        profile: {
          name: `node-sdk: Resource Set Binding ${faker.random.word()}`.substring(0, 49)
        }
      });
      groups = [
        await client.groupApi.createGroup({ group: createGroupRequest() }),
        await client.groupApi.createGroup({ group: createGroupRequest() })
      ];

      // create custom role
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
    });

    after(async () => {
      if (resourceSet) {
        await client.resourceSetApi.deleteResourceSet({
          resourceSetId: resourceSet.id
        });
      }
      if (customRole) {
        await client.customRoleApi.deleteRole({
          roleIdOrLabel: customRole.id,
        });
      }
      if (groups) {
        for (const group of groups) {
          await client.groupApi.deleteGroup({
            groupId: group.id,
          });
        }
      }
    });

    it('Create a binding, list bindings, manage members', async () => {
      // create
      const instance: ResourceSetBindingCreateRequest = {
        role: customRole.id,
        members: [
          `${issuer}/api/v1/groups/${groups[0].id}`
        ],
      };
      const bindingResponse = await client.resourceSetApi.createResourceSetBinding({
        resourceSetId: resourceSet.id,
        instance,
      });
      expect(bindingResponse).to.be.an.instanceOf(ResourceSetBindingEditResponse);

      // list
      const bindings = await client.resourceSetApi.listBindings({
        resourceSetId: resourceSet.id
      });
      expect(bindings.roles?.map(r => r.id)).to.include(customRole.id);

      // list members
      let members = await client.resourceSetApi.listMembersOfBinding({
        resourceSetId: resourceSet.id,
        roleIdOrLabel: customRole.id,
      });
      expect(members.members.length).to.equal(1);
      expect(members.members[0].id).not.to.equal(groups[0].id);
      expect(members.members[0]._links.self.href).to.include(groups[0].id);

      // get member
      const member = await client.resourceSetApi.getMemberOfBinding({
        resourceSetId: resourceSet.id,
        roleIdOrLabel: customRole.id,
        memberId: members.members[0].id,
      });
      expect(member._links.self.href).to.include(groups[0].id);

      // change members
      await client.resourceSetApi.unassignMemberFromBinding({
        resourceSetId: resourceSet.id,
        roleIdOrLabel: customRole.id,
        memberId: members.members[0].id,
      });
      members = await client.resourceSetApi.listMembersOfBinding({
        resourceSetId: resourceSet.id,
        roleIdOrLabel: customRole.id,
      });
      expect(members.members.length).to.equal(0);
      await client.resourceSetApi.addMembersToBinding({
        resourceSetId: resourceSet.id,
        roleIdOrLabel: customRole.id,
        instance: {
          additions: [
            `${issuer}/api/v1/groups/${groups[1].id}`,
            `${issuer}/api/v1/groups/${groups[0].id}`
          ]
        }
      });
      members = await client.resourceSetApi.listMembersOfBinding({
        resourceSetId: resourceSet.id,
        roleIdOrLabel: customRole.id,
      });
      expect(members.members.length).to.equal(2);
      expect(members.members.map(m => m._links.self.href)).to.include(`${issuer}/api/v1/groups/${groups[1].id}`);
      expect(members.members.map(m => m._links.self.href)).to.include(`${issuer}/api/v1/groups/${groups[0].id}`);
    });
  });

});


import {
  Client,
  DefaultRequestExecutor
} from '..';
import * as utils from './utils';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-get-user`;
}

const client = new Client({
  scopes: ['okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

async function cleanInlineHooks() {
  const collection = await client.inlineHookApi.listInlineHooks();
  await collection.each(async (inlineHook) => {
    await client.inlineHookApi.deactivateInlineHook({
      inlineHookId: inlineHook.id!
    });
    await client.inlineHookApi.deleteInlineHook({
      inlineHookId: inlineHook.id!
    });
  });
}

async function cleanAuthorizationServers() {
  await (await client.authorizationServerApi.listAuthorizationServers()).each(
    async authorizationServer => {
      await client.authorizationServerApi.deleteAuthorizationServer({
        authServerId: authorizationServer.id!
      });
    }
  );
}

async function cleanApplications() {
  await (await client.applicationApi.listApplications()).each(async application => {
    const canDelete = ![
      'Okta Admin Console',
      'Okta Dashboard',
      'Okta Browser Plugin',
      'Node SDK Service App',
      'Bacon Service Client'
    ].includes(application.label!) && application.label!.startsWith('node-sdk: ');
    if (canDelete) {
      try {
        await utils.removeAppByLabel(client, application.label!);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped application to remove ${application.label}`);
    }
  });
}

async function cleanTestUsers() {
  await (await client.userApi.listUsers()).each(async user => {
    const canDelete = !user.profile!.email!.endsWith('okta.com');
    if (canDelete) {
      try {
        await utils.deleteUser(user, client);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped user to remove ${user.profile!.email}`);
    }
  });
}

async function cleanTestGroups() {
  await (await client.groupApi.listGroups()).each(async (group) => {
    const canDelete = group.profile!.name !== 'Everyone' && group.profile!.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await utils.cleanupGroup(client, group);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped group to remove ${group.profile!.name}`);
    }
  });
}

async function cleanTestGroupRules() {
  await (await client.groupApi.listGroupRules()).each(async (rule) => {
    const canDelete = rule.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        if (rule.status !== 'INVALID') {
          await client.groupApi.deactivateGroupRule({ruleId: rule.id!});
        }
        await client.groupApi.deleteGroupRule({ruleId: rule.id!});
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped group rule to remove ${rule.name}`);
    }
  });
}

async function cleanTestPolicies() {
  await (await client.policyApi.listPolicies({ type: 'OKTA_SIGN_ON' })).each(async policy => {
    const canDelete = policy.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await client.policyApi.deletePolicy({
          policyId: policy.id!
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped policy to remove ${policy.name}`);
    }
  });
}

async function cleanTestIdps() {
  await (await client.identityProviderApi.listIdentityProviders()).each(async idp => {
    const canDelete = idp.name!.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await client.identityProviderApi.deactivateIdentityProvider({ idpId: idp.id! });
        await client.identityProviderApi.deleteIdentityProvider({ idpId: idp.id! });
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped IDP to remove ${idp.name}`);
    }
  });
}

async function getBrandId() {
  const { value: brand } = await (await client.customizationApi.listBrands()).next();
  return brand ? brand.id : null;
}

async function cleanEmailCustomizations() {
  const templateName = 'ForgotPassword';
  const brandId: string = await getBrandId() as string;

  const list = await client.customizationApi.listEmailCustomizations({
    brandId,
    templateName,
  });
  await list.each(async ec => {
    const canDelete = (ec.subject.includes('fake subject') || ec.subject.includes('updated subject')) && !ec.isDefault;
    if (canDelete) {
      try {
        await client.customizationApi.deleteEmailCustomization({
          customizationId: ec.id!,
          brandId,
          templateName
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped Email customization to remove ${ec.subject} for language ${ec.language}`);
    }
  });
}


describe('Clean', () => {
  it('all test resources', async () => {
    await cleanAuthorizationServers();
    await cleanTestUsers();
    await cleanTestGroupRules();
    await cleanTestGroups();
    await cleanApplications();
    await cleanInlineHooks();
    await cleanTestPolicies();
    await cleanTestIdps();
    await cleanEmailCustomizations();
  });
});

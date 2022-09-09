const okta = require('../');
const utils = require('./utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-get-user`;
}

const client = utils.getV2Client({
  scopes: ['okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

async function cleanInlineHooks() {
  const collection = await client.listInlineHooks();
  await collection.each(async (inlineHook) => {
    await client.deactivateInlineHook(inlineHook.id);
    await client.deleteInlineHook(inlineHook.id);
  });
}

async function cleanAuthorizationServers() {
  await (await client.listAuthorizationServers()).each(
    async authorizationServer => {
      await client.deleteAuthorizationServer(authorizationServer.id);
    }
  );
}

async function cleanApplications() {
  await (await client.listApplications()).each(async application => {
    const canDelete = ![
      'Okta Admin Console',
      'Okta Dashboard',
      'Okta Browser Plugin',
      'Node SDK Service App',
      'Bacon Service Client'
    ].includes(application.label) && application.label.startsWith('node-sdk: ');
    if (canDelete) {
      try {
        await utils.removeAppByLabel(client, application.label);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped application to remove ${application.label}`);
    }
  });
}

async function cleanTestUsers() {
  await (await client.listUsers()).each(async user => {
    const canDelete = !user.profile.email.endsWith('okta.com');
    if (canDelete) {
      try {
        await utils.deleteUser(user, client);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped user to remove ${user.profile.email}`);
    }
  });
}

async function cleanTestGroups() {
  await (await client.listGroups()).each(async (group) => {
    const canDelete = group.profile.name !== 'Everyone' && group.profile.name.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await utils.cleanupGroup(client, group);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped group to remove ${group.profile.name}`);
    }
  });
}

async function cleanTestPolicies() {
  await (await client.listPolicies({ type: 'OKTA_SIGN_ON' })).each(async policy => {
    const canDelete = policy.name.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await client.deletePolicy(policy.id);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped policy to remove ${policy.name}`);
    }
  });
}

async function cleanTestIdps() {
  await (await client.listIdentityProviders()).each(async idp => {
    const canDelete = idp.name.startsWith('node-sdk:');
    if (canDelete) {
      try {
        await client.deactivateIdentityProvider(idp.id);
        await client.deleteIdentityProvider(idp.id);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`Skipped IDP to remove ${idp.name}`);
    }
  });
}

describe('Clean', () => {
  it('all test resources', async () => {
    await cleanAuthorizationServers();
    await cleanTestUsers();
    await cleanTestGroups();
    await cleanApplications();
    await cleanInlineHooks();
    await cleanTestPolicies();
    await cleanTestIdps();
  });
});

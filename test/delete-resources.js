const okta = require('../');
const utils = require('./utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-get-user`;
}

const client = new okta.Client({
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
    try {
      [
        'Okta Admin Console',
        'Okta Dashboard',
        'Okta Browser Plugin',
        'Node SDK Service App',
        'Bacon Service Client'
      ].includes(application.label) ?
        console.log(`Skipped application to remove ${application.label}`) :
        await utils.removeAppByLabel(client, application.label);
    } catch (err) {
      console.error(err);
    }
  });
}

async function cleanTestUsers() {
  await (await client.listUsers()).each(async user => {
    try {
      (user.profile.email.endsWith('okta.com')) ?
        console.log(`Skipped user to remove ${user.profile.email}`) :
        await utils.deleteUser(user, client);
    } catch (err) {
      console.error(err);
    }
  });
}

async function cleanTestGroups() {
  await (await client.listGroups()).each(async (group) => {
    try {
      (group.profile.name === 'Everyone') ?
        console.log(`Skipped group to remove ${group.profile.name}`) :
        await utils.cleanupGroup(client, group);
    } catch (err) {
      console.error(err);
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
  });
});

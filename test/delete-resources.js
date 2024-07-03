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
  const collection = client.listInlineHooks();
  await collection.each(async (inlineHook) => {

    await inlineHook.deactivate();
    await inlineHook.delete();
  });
}

async function cleanDomains() {
  const domains = (await client.listDomains()).domains;
  for (const domain of domains) {
    if (domain.certificateSourceType === 'MANUAL') {
      await client.deleteDomain(domain.id);
    }
  }
}

async function cleanAuthorizationServers() {
  await client.listAuthorizationServers().each(
    async (authorizationServer) => {
      await authorizationServer.delete();
    }
  );
}

async function cleanNetworkZones() {
  await client.listNetworkZones().each(
    async networkZone => {
      const canDelete = networkZone.name?.startsWith('node-sdk: ');
      if (canDelete) {
        try {
          if (networkZone.status === 'ACTIVE') {
            await client.deactivateNetworkZone(networkZone.id);
          }
          await client.deleteNetworkZone(networkZone.id);
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log(`Skipped network zone to remove ${networkZone.name}`);
      }
    }
  );
}

async function cleanApplications() {
  await client.listApplications().each(async (application) =>{
    (application.label === 'Node SDK Service App' || application.label === 'Bacon Service Client') ?
      console.log(`Skipped application to remove ${application.label}`) :
      await utils.removeAppByLabel(client, application.label);
  });
}

async function cleanTestUsers() {
  await client.listUsers().each(async (user) => {
    (user.profile.email.endsWith('okta.com')) ?
      console.log(`Skipped user to remove ${user.profile.email}`) :
      await utils.deleteUser(user);
  });
}

async function cleanTestGroups() {
  const url = `${client.baseUrl}/api/v1/groups`;
  const request = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  return client.http.http(url, request)
    .then(responce => responce.text())
    .then(bodyResponce => JSON.parse(bodyResponce))
    .then(user => {
      user.forEach(element =>{
        (element.profile.name === 'Everyone') ?
          console.log(`Skipped group to remove ${element.profile.name}`) :
          utils.cleanupGroup(client, element);
      });
    })
    .catch(err => {
      console.error(err);
    });
}

describe('Clean all test resources', () => {
  it('cleans resources', async () => {
    await cleanNetworkZones();
 
    await cleanAuthorizationServers();
 
    await cleanTestUsers();
 
    await cleanTestGroups();
 
    await cleanApplications();

    await cleanDomains();
 
    await cleanInlineHooks();
  });
});

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

describe('Clean all test resources', () => {
  //Remove all test users
  //cleanTestUsers();

  //Remove all test groups
  //cleanTestGroups();

  //Remove all test applications
  //cleanApplications();
});

function cleanApplications() {
  client.listApplications().each(application =>{
    (application.label.startsWith('node-sdk')) ?
      utils.removeAppByLabel() :
      console.log(`Skipped application to remove ${application.label}`)
  });
}

function cleanTestUsers() {
  client.listUsers().each(user => {
    (user.profile.email.endsWith('okta.com')) ?
      console.log(`Skipped user to remove ${user.profile.email}`) :
      utils.deleteUser(user)
  });
}

function cleanTestGroups() {
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
        (element.profile.name.startsWith('node-sdk')) ?
          utils.cleanupGroup(client, element) :
          console.log(`Skipped group to remove ${element.profile.name}`)
      });
    })
    .catch(err => {
      console.error(err);
    });
}

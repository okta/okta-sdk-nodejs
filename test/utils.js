const { Group, Role, User } = require('../src/generated');

const expect = require('chai').expect;
const faker = require('@faker-js/faker');
const path = require('path');
const { createReadStream } = require('fs');
const forge = require('node-forge');

function delay(t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t);
  });
}

function validateUser(user, expectedUser) {
  expect(user).to.be.an.instanceof(User);
  expect(user.profile.firstName).to.equal(expectedUser.profile.firstName);
  expect(user.profile.lastName).to.equal(expectedUser.profile.lastName);
  expect(user.profile.email).to.equal(expectedUser.profile.email);
  expect(user.profile.login).to.equal(expectedUser.profile.login);
}

function authenticateUser(client, userName, password) {
  const data = {
    username: userName,
    password: password,
  };

  const url = `${client.baseUrl}/api/v1/authn`;

  return client.http.postJson(url, {
    body: data
  });
}

function validateGroup(group, expectedGroup) {
  expect(group).to.be.an.instanceof(Group);
  expect(group.profile.name).to.equal(expectedGroup.profile.name);
  expect(group.type).to.equal('OKTA_GROUP');
}

async function isUserInGroup(client, groupUser, group) {
  let userPresent = false;
  const collection = await client.listGroupUsers(group.id);
  await collection.each(user => {
    if (user.id === groupUser.id) {
      userPresent = true;
      return false;
    }
  });
  return userPresent;
}

async function waitTillUserInGroup(client, user, group, condition) {
  let userInGroup = await isUserInGroup(client, user, group);
  let timeOut = 0;
  while (userInGroup !== condition) {
    userInGroup = await isUserInGroup(client, user, group);
    if (userInGroup === condition) {
      return userInGroup;
    }

    await delay(1000);
    timeOut++;
    if (timeOut === 30) {
      break;
    }
  }
  return userInGroup;
}

async function deleteUser(user, client) {
  await client.deactivateUser(user.id);
  await client.deactivateOrDeleteUser(user.id);
}

async function isUserPresent(client, expectedUser, queryParameters) {
  let userPresent = false;
  const collection = await client.listUsers(queryParameters);
  await collection.each(user => {
    expect(user).to.be.an.instanceof(User);
    if (user.profile.login === expectedUser.profile.login) {
      userPresent = true;
      return false;
    }
  });
  return userPresent;
}

async function isGroupPresent(client, expectedGroup, queryParameters) {
  let groupPresent = false;
  const collection = await client.listGroups(queryParameters);
  await collection.each(async group => {
    expect(group).to.be.an.instanceof(Group);
    if (group.profile.name === expectedGroup.profile.name) {
      groupPresent = true;
      return false;
    }
  });
  return groupPresent;
}

async function doesUserHaveRole(user, roleType, client) {
  let hasRole = false;
  await (await client.listAssignedRolesForUser(user.id)).each(role => {
    expect(role).to.be.an.instanceof(Role);
    if (role.type === roleType) {
      hasRole = true;
      return false;
    }
  });
  return hasRole;
}

async function isGroupTargetPresent(user, userGroup, role, client) {
  let groupTargetPresent = false;
  const groupTargets = await client.listGroupTargetsForRole(user.id, role.id);
  await groupTargets.each(group => {
    if (group.profile.name === userGroup.profile.name) {
      groupTargetPresent = true;
      return false;
    }
  });
  return groupTargetPresent;
}

async function cleanupUser(client, user) {
  if (!user.profile.login) {
    return;
  }

  try {
    const existingUser = await client.getUser(user.profile.login);
    await client.deactivateUser(existingUser.id);
    await client.deactivateOrDeleteUser(existingUser.id);
  } catch (err) {
    // expect(err.message).to.contain('Okta HTTP 404');
  }
}

async function cleanupGroup(client, expectedGroup) {
  let queryParameters = { q : `${expectedGroup.profile.name}` };
  await (await client.listGroups(queryParameters)).each(async (group) => {
    expect(group).to.be.an.instanceof(Group);
    // If search doesn't return any results, listGroups() returns empty collection
    // eslint-disable-next-line no-prototype-builtins
    if (group.hasOwnProperty('profile')) {
      if (group.profile.name === expectedGroup.profile.name) {
        await client.deleteGroup(group.id);
      }
    }
  });
}

async function cleanup(client, users = null, groups = null) {
  // Cleanup the entities only if user is running a real OKTA server
  if (process.env.OKTA_USE_MOCK) {
    return;
  }

  const usersToDelete = [].concat(users || []);
  for (let i = 0; i < usersToDelete.length; i++) {
    await cleanupUser(client, usersToDelete[i]);
  }

  const groupsToDelete = [].concat(groups || []);
  for (let i = 0; i < groupsToDelete.length; i++) {
    await cleanupGroup(client, groupsToDelete[i]);
  }
}

async function removeAppByLabel(client, label) {
  return (await client.listApplications()).each(async (application) => {
    if (application.label === label) {
      await client.deactivateApplication(application.id);
      return client.deleteApplication(application.id);
    }
  });
}

function getMockProfile(testName) {
  return {
    firstName: testName,
    lastName: 'okta-sdk-nodejs',
    email: faker.internet.email(),
    login: faker.internet.email()
  };
}

function getOIDCApplication() {
  return  {
    name: 'oidc_client',
    label: `node-sdk: Sample Client - ${faker.random.word()}`.substring(0, 49),
    signOnMode: 'OPENID_CONNECT',
    credentials: {
      oauthClient: {
        autoKeyRotation: true,
        token_endpoint_auth_method: 'client_secret_post'
      }
    },
    settings: {
      oauthClient: {
        application_type: 'native',
        client_uri: 'https://example.com/client',
        grant_types: [
          'implicit',
          'authorization_code'
        ],
        logo_uri: 'https://example.com/assets/images/logo-new.png',
        redirect_uris: [
          'https://example.com/oauth2/callback',
          'myapp://callback'
        ],
        response_types: [
          'token',
          'id_token',
          'code'
        ]
      }
    }
  };
}

function getBookmarkApplication() {
  return {
    name: 'bookmark',
    label: `node-sdk: Bookmark ${faker.random.words()}`.substring(0, 99),
    signOnMode: 'BOOKMARK',
    settings: {
      app: {
        requestIntegration: false,
        url: 'https://example.com/bookmark.htm'
      }
    }
  };
}

function getOrg2OrgApplicationOptions() {
  return {
    name: 'okta_org2org',
    label: 'node-sdk: Sample Okta Org2Org App',
    signOnMode: 'SAML_2_0',
    settings: {
      app: {
        acsUrl: 'https://example.atko.com/sso/saml2/exampleid',
        audRestriction: 'https://www.atko.com/saml2/service-provider/exampleid',
        baseUrl: 'https://example.atko.com'
      }
    }
  };
}

async function verifyOrgIsOIE(client) {
  const url = `${client.baseUrl}/.well-known/okta-organization`;
  const request = {
    method: 'get'
  };
  const resp = await client.http.http(url, request);
  const body = await resp.json();
  return body.pipeline === 'idx';
}

function getMockImage(filename) {
  return createReadStream(path.join(__dirname, `it/mocks/images/${filename}`));
}

async function runWithRetry(clientMethod) {
  try {
    return await clientMethod();
  } catch (err) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        clientMethod().then(userType => resolve(userType), err => reject(err));
      }, 2000);
    });
  }
}

function base64ToUrlBase64(str) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function bigintToBase64(bi) {
  return base64ToUrlBase64(
    Buffer.from(
      new Int8Array(bi.toByteArray().slice(1))
    ).toString('base64')
  );
}

function parseCsr(csr) {
  const csrDer = forge.util.decode64(csr.csr);
  const csrAsn1 = forge.asn1.fromDer(csrDer);
  return forge.pki.certificationRequestFromAsn1(csrAsn1);
}

function createCertFromCsr(csr, keys) {
  const csrF = parseCsr(csr);
  const certF = forge.pki.createCertificate();
  certF.publicKey = csrF.publicKey;
  certF.serialNumber = '01';
  certF.validity.notBefore = new Date();
  certF.validity.notAfter = new Date();
  certF.validity.notAfter.setFullYear(certF.validity.notBefore.getFullYear() + 1);
  certF.setSubject(csrF.subject.attributes);
  certF.setIssuer(csrF.subject.attributes);
  const extensions = csrF.getAttribute({name: 'extensionRequest'}).extensions;
  certF.setExtensions(extensions);
  certF.sign(keys.privateKey, forge.md.sha256.create());
  return certF;
}

function certToDer(certF) {
  const certAsn1 = forge.pki.certificateToAsn1(certF);
  const certDer = forge.asn1.toDer(certAsn1);
  return certDer.data;
}

function certToBase64(certF) {
  return forge.util.encode64(certToDer(certF));
}

function csrToN(csr) {
  return bigintToBase64(parseCsr(csr).publicKey.n);
}

function certToPem(certF) {
  return forge.pki.certificateToPem(certF);
}

module.exports = {
  delay: delay,
  validateUser: validateUser,
  authenticateUser: authenticateUser,
  validateGroup: validateGroup,
  isUserInGroup: isUserInGroup,
  waitTillUserInGroup: waitTillUserInGroup,
  deleteUser: deleteUser,
  isUserPresent: isUserPresent,
  isGroupPresent: isGroupPresent,
  doesUserHaveRole: doesUserHaveRole,
  isGroupTargetPresent: isGroupTargetPresent,
  cleanupUser: cleanupUser,
  cleanupGroup: cleanupGroup,
  cleanup: cleanup,
  removeAppByLabel: removeAppByLabel,
  getMockProfile: getMockProfile,
  getBookmarkApplication: getBookmarkApplication,
  getOrg2OrgApplicationOptions: getOrg2OrgApplicationOptions,
  getOIDCApplication: getOIDCApplication,
  verifyOrgIsOIE,
  getMockImage: getMockImage,
  runWithRetry,
  createCertFromCsr,
  certToDer,
  certToBase64,
  certToPem,
  csrToN,
};

import {
  Client,
  User, Group, Role, StandardRole, CustomRole,
  UserGetSingleton,
  UserApiListUsersRequest,
  GroupApiListGroupsRequest,
  RoleType,
  Csr,
  IdPCsr,
  BookmarkApplication,
  Org2OrgApplication,
  OpenIdConnectApplication,
  SamlApplication,
  OAuth2ClientJsonWebKeyRequestBody,
} from '@okta/okta-sdk-nodejs';
const Rasha = require('rasha');
const nJwt = require('njwt');
import * as forge from 'node-forge';
const expect = require('chai').expect;
const faker = require('@faker-js/faker');
const path = require('path');
const { readFileSync } = require('fs');


function delay(t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t);
  });
}

function validateUser(user: User | UserGetSingleton, expectedUser: User) {
  expect(user instanceof User || user instanceof UserGetSingleton).to.be.true;
  expect(user.profile.firstName).to.equal(expectedUser.profile.firstName);
  expect(user.profile.lastName).to.equal(expectedUser.profile.lastName);
  expect(user.profile.email).to.equal(expectedUser.profile.email);
  expect(user.profile.login).to.equal(expectedUser.profile.login);
}

interface AuthTransaction {
  sessionToken?: string;
};

function authenticateUser(client: Client, userName: string, password: string) {
  const data = {
    username: userName,
    password: password,
  };

  const url = `${client.baseUrl}/api/v1/authn`;

  return client.http.postJson(url, {
    body: JSON.stringify(data)
  }) as Promise<AuthTransaction>;
}

function validateGroup(group: Group, expectedGroup: Group) {
  expect(group).to.be.an.instanceof(Group);
  expect(group.profile.name).to.equal(expectedGroup.profile.name);
  expect(group.type).to.equal('OKTA_GROUP');
}

async function isUserInGroup(client: Client, groupUser: User, group: Group) {
  let userPresent = false;
  const collection = await client.groupApi.listGroupUsers({
    groupId: group.id
  });
  await collection.each(user => {
    if (user.id === groupUser.id) {
      userPresent = true;
      return false;
    }
  });
  return userPresent;
}

async function waitTillUserInGroup(client: Client, user: User, group: Group, condition: boolean) {
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

async function waitTill(condition: () => Promise<boolean>): Promise<boolean> {
  let currentConditionResult = false;
  let timeOut = 0;
  while (!currentConditionResult) {
    currentConditionResult = await condition();
    if (currentConditionResult) {
      return true;
    }

    await delay(1000);
    timeOut++;
    if (timeOut === 30) {
      break;
    }
  }
  return false;
}

async function deleteUser(user: User, client: Client) {
  await client.userApi.deactivateUser({
    userId: user.id
  });
  await client.userApi.deleteUser({
    userId: user.id
  });
}

async function isUserPresent(client: Client, expectedUser: User, queryParameters: UserApiListUsersRequest) {
  let userPresent = false;
  const collection = await client.userApi.listUsers(queryParameters);
  await collection.each(user => {
    expect(user).to.be.an.instanceof(User);
    if (user.profile.login === expectedUser.profile.login) {
      userPresent = true;
      return false;
    }
  });
  return userPresent;
}

async function isUserPresentByLogin(client: Client, expectedUser: User) {
  let userPresent = false;
  const collection = await client.userApi.listUsers({ search: `profile.login eq "${expectedUser.profile.login}"` });
  await collection.each(user => {
    expect(user).to.be.an.instanceof(User);
    if (user.profile.login === expectedUser.profile.login) {
      userPresent = true;
      return false;
    }
  });
  return userPresent;
}

async function isGroupPresent(client: Client, expectedGroup: Group, queryParameters: GroupApiListGroupsRequest = {}) {
  let groupPresent = false;
  const collection = await client.groupApi.listGroups(queryParameters);
  await collection.each(async group => {
    expect(group).to.be.an.instanceof(Group);
    if (group.profile.name === expectedGroup.profile.name) {
      groupPresent = true;
      return false;
    }
  });
  return groupPresent;
}

async function doesUserHaveRole(user: User, roleType: RoleType, client: Client) {
  let hasRole = false;
  await (await client.roleAssignmentApi.listAssignedRolesForUser({
    userId: user.id
  })).each(role => {
    expect(role instanceof Role || role instanceof StandardRole || role instanceof CustomRole).to.be.true;
    if (role.type === roleType) {
      hasRole = true;
      return false;
    }
  });
  return hasRole;
}

async function isGroupTargetPresent(user: User, userGroup: Group, role: Role | StandardRole | CustomRole, client: Client) {
  let groupTargetPresent = false;
  const groupTargets = await client.roleTargetApi.listGroupTargetsForRole({
    userId: user.id, 
    roleId: role.id
  });
  await groupTargets.each(group => {
    if (group.profile.name === userGroup.profile.name) {
      groupTargetPresent = true;
      return false;
    }
  });
  return groupTargetPresent;
}

async function cleanupUser(client: Client, user: User) {
  if (!user.profile.login) {
    return;
  }

  try {
    const existingUser = await client.userApi.getUser({
      userId: user.profile.login
    });
    await client.userApi.deactivateUser({
      userId: existingUser.id
    });
    await client.userApi.deleteUser({
      userId: existingUser.id
    });
  } catch (err) {
    // expect(err.message).to.contain('Okta HTTP 404');
  }
}

async function cleanupGroup(client: Client, expectedGroup: Group) {
  let queryParameters = { q : `${expectedGroup.profile.name}` };
  await (await client.groupApi.listGroups(queryParameters)).each(async (group) => {
    expect(group).to.be.an.instanceof(Group);
    // If search doesn't return any results, listGroups() returns empty collection
    // eslint-disable-next-line no-prototype-builtins
    if (group.hasOwnProperty('profile')) {
      if (group.profile.name === expectedGroup.profile.name) {
        await client.groupApi.deleteGroup({
          groupId: group.id
        });
      }
    }
  });
}

async function cleanup(client: Client, users: User[]|User = null, groups: Group[]|Group = null) {
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

async function removeAppByLabel(client: Client, label: string) {
  return (await client.applicationApi.listApplications()).each(async (application) => {
    if (application.label === label) {
      await client.applicationApi.deactivateApplication({appId: application.id});
      return client.applicationApi.deleteApplication({appId: application.id});
    }
  });
}

async function activateSecurityQuestion(client: Client) {
  const authenticators = await client.authenticatorApi.listAuthenticators();  // returns Collection<Authenticator>
  await authenticators.each(async (item) => {
    if (item.type === 'security_question') {
      if (item.status !== 'ACTIVE') {
        const sqAuthenticator = await client.authenticatorApi.activateAuthenticator({
          authenticatorId: item.id
        });
        expect(sqAuthenticator).to.include({
          type: 'security_question',
          name: 'Security Question',
          status: 'ACTIVE'
        });
      }
    }
  });
}

function getMockProfile(testName: string) {
  return {
    firstName: testName,
    lastName: 'okta-sdk-nodejs',
    email: faker.internet.email(),
    login: faker.internet.email()
  };
}

function getOIDCApplication(): OpenIdConnectApplication {
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

function getServiceApplication(): OpenIdConnectApplication {
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
        application_type: 'service',
        client_uri: 'https://example.com/client',
        grant_types: [
          'implicit',
          'authorization_code',
          'client_credentials'
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

function getBookmarkApplication(): BookmarkApplication {
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

function getOrg2OrgApplicationOptions(): Org2OrgApplication {
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

function getSamlApplication(): SamlApplication {
  return {
    label: `node-sdk: Example Custom SAML 2.0 App - ${faker.random.word()}`,
    visibility: {
      autoSubmitToolbar: false,
      hide: {
        iOS: false,
        web: false
      }
    },
    features: [],
    signOnMode: 'SAML_2_0',
    settings: {
      signOn: {
        assertionSigned: true,
        allowMultipleAcsEndpoints: true,
        attributeStatements: [
          {
            type: 'EXPRESSION',
            name: 'Attribute',
            namespace: 'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified',
            values: [
              'Value'
            ],
          }
        ],
        audience: 'asdqwe123',
        authnContextClassRef: 'urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport',
        defaultRelayState: '',
        destination: 'http://testorgone.okta',
        digestAlgorithm: 'SHA256',
        honorForceAuthn: true,
        idpIssuer: 'http://www.okta.com/${org.externalKey}',
        recipient: 'http://testorgone.okta',
        requestCompressed: false,
        responseSigned: true,
        signatureAlgorithm: 'RSA_SHA256',
        spIssuer: null,
        ssoAcsUrl: 'http://testorgone.okta',
        subjectNameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
        subjectNameIdTemplate: '${user.userName}',
      }
    }
  };
}

async function verifyOrgIsOIE(client: Client) {
  const url = `${client.baseUrl}/.well-known/okta-organization`;
  const request = {
    method: 'get'
  };
  const resp = await client.http.http(url, request);
  const body = await resp.json();
  return body.pipeline === 'idx';
}

function getMockImage(filename: string): Buffer {
  return readFileSync(path.join(__dirname, `it/mocks/images/${filename}`));
}

async function runWithRetry(clientMethod: () => Promise<any>) {
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

function base64ToUrlBase64(str: string) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function bigintToBase64(bi: forge.jsbn.BigInteger) {
  return base64ToUrlBase64(
    Buffer.from(
      new Int8Array(bi.toByteArray().slice(1))
    ).toString('base64')
  );
}

function parseCsr(csr: Csr | IdPCsr): forge.pki.CertificateRequest {
  const csrDer = forge.util.decode64(csr.csr);
  const csrAsn1 = forge.asn1.fromDer(csrDer);
  return forge.pki.certificationRequestFromAsn1(csrAsn1) as forge.pki.CertificateRequest;
}

function createCertFromCsr(csr: Csr | IdPCsr, keys: forge.pki.KeyPair) {
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

function certToDer(certF: forge.pki.Certificate) {
  const certAsn1 = forge.pki.certificateToAsn1(certF);
  const certDer = forge.asn1.toDer(certAsn1);
  return certDer.data;
}

function certToBase64(certF: forge.pki.Certificate) {
  return forge.util.encode64(certToDer(certF));
}

function csrToN(csr: Csr | IdPCsr) {
  return bigintToBase64((parseCsr(csr).publicKey as forge.pki.rsa.PublicKey).n);
}

function certToPem(certF: forge.pki.Certificate) {
  return forge.pki.certificateToPem(certF);
}

async function makeOAuth2ClientJsonWebKeyRequestBody(): Promise<OAuth2ClientJsonWebKeyRequestBody> {
  const keys = forge.pki.rsa.generateKeyPair(2048);
  const pem = forge.pki.privateKeyToPem(keys.privateKey);
  const jwk = await Rasha.import({ pem });
  const claims = {
    aud: 'atko'
  };
  const alg = jwk.alg || 'RS256';
  const jwt = nJwt.create(claims, pem, alg);
  const kid = jwt.body.jti;
  return {
    alg,
    kid,
    e: jwk.e,
    kty: jwk.kty,
    n: jwk.n,
    use: 'sig',
  };
}

const deleteCustomDomains = async (client: Client) => {
  const emailDomains = await client.emailDomainApi.listEmailDomains({});
  const emailDomainIds = [];
  await emailDomains.each(ed => {
    if (ed.domain.endsWith('example.com') || ed.domain.endsWith('acme.com')) {
      emailDomainIds.push(ed.id);
    }
  });
  for (const emailDomainId of emailDomainIds) {
    await client.emailDomainApi.deleteEmailDomain({ emailDomainId: emailDomainId, expand: ['brands'] });
  }

  const domains = await client.customDomainApi.listCustomDomains();
  for (const domain of domains.domains) {
    const canDelete = domain.domain.endsWith('example.com') || domain.domain.endsWith('acme.com');
    if (canDelete) {
      await client.customDomainApi.deleteCustomDomain({
        domainId: domain.id
      });
    }
  }

  const brands = await client.customizationApi.listBrands();
  const brandIdsToDelete = [];
  await brands.each(brand => {
    if (brand.name.startsWith('node-sdk: Brand')) {
      brandIdsToDelete.push(brand.id);
    }
  });
  for (const brandId of brandIdsToDelete) {
    await client.customizationApi.deleteBrand({ brandId });
  }

  await delay(3000);
};

export {
  delay,
  validateUser,
  authenticateUser,
  validateGroup,
  isUserInGroup,
  waitTillUserInGroup,
  waitTill,
  deleteUser,
  isUserPresent,
  isUserPresentByLogin,
  isGroupPresent,
  doesUserHaveRole,
  isGroupTargetPresent,
  cleanupUser,
  cleanupGroup,
  cleanup,
  removeAppByLabel,
  activateSecurityQuestion,
  getMockProfile,
  getBookmarkApplication,
  getOrg2OrgApplicationOptions,
  getOIDCApplication,
  getSamlApplication,
  getServiceApplication,
  verifyOrgIsOIE,
  getMockImage,
  runWithRetry,
  createCertFromCsr,
  certToDer,
  certToBase64,
  certToPem,
  csrToN,
  makeOAuth2ClientJsonWebKeyRequestBody,
  deleteCustomDomains,
};

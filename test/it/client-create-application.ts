// @ts-nocheck
import { expect } from 'chai';

import {
  Application,
  ApplicationCredentialsOAuthClient,
  ApplicationSettings,
  ApplicationSettingsApplication,
  ApplicationOptions,
  AutoLoginApplication,
  AutoLoginApplicationSettingsSignOn,
  BasicApplicationSettings,
  BasicApplicationSettingsApplication,
  BasicAuthApplication,
  BookmarkApplication,
  BookmarkApplicationSettings,
  BookmarkApplicationSettingsApplication,
  BrowserPluginApplication,
  Client,
  DefaultRequestExecutor,
  OAuthApplicationCredentials,
  OAuthGrantType,
  OAuthResponseType,
  OpenIdConnectApplication,
  OpenIdConnectApplicationSettings,
  OpenIdConnectApplicationSettingsClient,
  SamlApplication,
  SamlApplicationSettings,
  SamlApplicationSettingsSignOn,
  SamlAttributeStatement,
  SecurePasswordStoreApplication,
  SecurePasswordStoreApplicationSettings,
  SecurePasswordStoreApplicationSettingsApplication,
  SwaApplication,
  SwaApplicationSettings,
  SwaApplicationSettingsApplication,
  SwaThreeFieldApplication,
  SwaThreeFieldApplicationSettings,
  SwaThreeFieldApplicationSettingsApplication,
  WsFederationApplication,
  WsFederationApplicationSettings,
  WsFederationApplicationSettingsApplication} from '@okta/okta-sdk-nodejs';
import utils = require('../utils');
import faker = require('faker');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-create`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.createApplication()', () => {

  it('should allow me to create a bookmark application', async () => {
    const application: ApplicationOptions = {
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
    let createdApplication: BookmarkApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(BookmarkApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(BookmarkApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(BookmarkApplicationSettingsApplication);
      expect(createdApplication.settings.app.requestIntegration).to.equal(application.settings.app.requestIntegration);
      expect(createdApplication.settings.app.url).to.equal(application.settings.app.url);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

  it('should allow me to create a basic authentication application', async () => {
    const application: ApplicationOptions = {
      name: 'template_basic_auth',
      label: `node-sdk: Sample Basic Auth App - ${faker.random.word()}`.substring(0, 49),
      signOnMode: 'BASIC_AUTH',
      settings: {
        app: {
          authURL: 'https://example.com/auth.html',
          url: 'https://example.com/bookmark.htm'
        }
      }
    };
    let createdApplication: BasicAuthApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(BasicAuthApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(BasicApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(BasicApplicationSettingsApplication);
      expect(createdApplication.settings.app.authURL).to.equal(application.settings.app.authURL);
      expect(createdApplication.settings.app.url).to.equal(application.settings.app.url);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

  it('should allow me to create a SWA plugin application', async () => {
    const application: ApplicationOptions = {
      name: 'template_swa',
      label: `node-sdk: Sample Plugin App - ${faker.random.word()}`.substring(0, 49),
      signOnMode: 'BROWSER_PLUGIN',
      settings: {
        app: {
          buttonField: 'btn-login',
          passwordField: 'txtbox-password',
          usernameField: 'txtbox-username',
          url: 'https://example.com/login.html'
        }
      }
    };

    let createdApplication: SwaApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(BrowserPluginApplication);
      expect(createdApplication).to.be.instanceof(SwaApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(SwaApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(SwaApplicationSettingsApplication);
      expect(createdApplication.settings.app.buttonField).to.equal(application.settings.app.buttonField);
      expect(createdApplication.settings.app.passwordField).to.equal(application.settings.app.passwordField);
      expect(createdApplication.settings.app.usernameField).to.equal(application.settings.app.usernameField);
      expect(createdApplication.settings.app.url).to.equal(application.settings.app.url);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

  it('should allow me to create a 3-field SWA plugin application', async () => {
    const application: ApplicationOptions = {
      name: 'template_swa3field',
      label: `node-sdk: Sample Plugin App 3-field - ${faker.random.word()}`.substring(0, 49),
      signOnMode: 'BROWSER_PLUGIN',
      settings: {
        app: {
          buttonSelector: '#btn-login',
          passwordSelector: '#txtbox-password',
          userNameSelector: '#txtbox-username',
          extraFieldSelector: '.login',
          extraFieldValue: 'SOMEVALUE',
          targetURL: 'https://example.com/login.html'
        }
      }
    };

    let createdApplication: SwaThreeFieldApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(BrowserPluginApplication);
      expect(createdApplication).to.be.instanceof(SwaThreeFieldApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(SwaThreeFieldApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(SwaThreeFieldApplicationSettingsApplication);
      expect(createdApplication.settings.app.buttonSelector).to.equal(application.settings.app.buttonSelector);
      expect(createdApplication.settings.app.passwordSelector).to.equal(application.settings.app.passwordSelector);
      expect(createdApplication.settings.app.userNameSelector).to.equal(application.settings.app.userNameSelector);
      expect(createdApplication.settings.app.extraFieldSelector).to.equal(application.settings.app.extraFieldSelector);
      expect(createdApplication.settings.app.extraFieldValue).to.equal(application.settings.app.extraFieldValue);
      expect(createdApplication.settings.app.targetURL).to.equal(application.settings.app.targetURL);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

  it('should allow me to create a SWA no-plugin application', async () => {
    const application: ApplicationOptions = {
      name: 'template_sps',
      label: `node-sdk: Example SWA App - ${faker.random.word()}`.substring(0, 49),
      signOnMode: 'SECURE_PASSWORD_STORE',
      settings: {
        app: {
          url: 'https://example.com/login.html',
          passwordField: '#txtbox-password',
          usernameField: '#txtbox-username',
          optionalField1: 'param1',
          optionalField1Value: 'somevalue',
          optionalField2: 'param2',
          optionalField2Value: 'yetanothervalue',
          optionalField3: 'param3',
          optionalField3Value: 'finalvalue'
        }
      }
    };

    let createdApplication: SecurePasswordStoreApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(SecurePasswordStoreApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(SecurePasswordStoreApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(SecurePasswordStoreApplicationSettingsApplication);
      expect(createdApplication.settings.app.url).to.equal(application.settings.app.url);
      expect(createdApplication.settings.app.passwordField).to.equal(application.settings.app.passwordField);
      expect(createdApplication.settings.app.usernameField).to.equal(application.settings.app.usernameField);
      expect(createdApplication.settings.app.optionalField1).to.equal(application.settings.app.optionalField1);
      expect(createdApplication.settings.app.optionalField1Value).to.equal(application.settings.app.optionalField1Value);
      expect(createdApplication.settings.app.optionalField2).to.equal(application.settings.app.optionalField2);
      expect(createdApplication.settings.app.optionalField2Value).to.equal(application.settings.app.optionalField2Value);
      expect(createdApplication.settings.app.optionalField3).to.equal(application.settings.app.optionalField3);
      expect(createdApplication.settings.app.optionalField3Value).to.equal(application.settings.app.optionalField3Value);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

  it('should allow me to create a custom SWA application', async () => {
    if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
      console.log('Test has been skipped. The endpoint does not support PrivateKey.');
      return;
    }

    const application: ApplicationOptions = {
      label: `Example Custom SWA App - ${faker.random.word()}`,
      visibility: {
        autoSubmitToolbar: false,
        hide: {
          iOS: false,
          web: false
        }
      },
      features: [],
      signOnMode: 'AUTO_LOGIN',
      settings: {
        signOn: {
          redirectUrl: 'http://swasecondaryredirecturl.okta.com',
          loginUrl: 'http://swaprimaryloginurl.okta.com'
        }
      }
    };

    let createdApplication: AutoLoginApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(AutoLoginApplication);
      expect(createdApplication.name).to.contain('examplecustomswaapp');
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings.signOn).to.be.instanceof(AutoLoginApplicationSettingsSignOn);
      expect(createdApplication.settings.signOn.redirectUrl).to.equal(application.settings.signOn.redirectUrl);
      expect(createdApplication.settings.signOn.loginUrl).to.equal(application.settings.signOn.loginUrl);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

  it('should allow me to create a custom SAML application', async () => {
    if (process.env.OKTA_CLIENT_AUTHORIZATIONMODE === 'PrivateKey') {
      console.log('Test has been skipped. The endpoint does not support PrivateKey.');
      return;
    }

    const application: ApplicationOptions = {
      label: `Example Custom SAML 2.0 App - ${faker.random.word()}`,
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
          attributeStatements: [
            {
              type: 'EXPRESSION',
              name: 'Attribute',
              namespace: 'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified',
              values: [
                'Value'
              ]
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

    let createdApplication: SamlApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(SamlApplication);
      expect(createdApplication.name).to.contain('examplecustomsaml20app');
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(SamlApplicationSettings);
      expect(createdApplication.settings.signOn).to.be.instanceof(SamlApplicationSettingsSignOn);
      expect(createdApplication.settings.signOn.assertionSigned).to.equal(application.settings.signOn.assertionSigned);
      const attributeStatements = application.settings.signOn.attributeStatements.map(attributeStatement => new SamlAttributeStatement(attributeStatement, client));
      expect(createdApplication.settings.signOn.attributeStatements).to.deep.equal(attributeStatements);
      expect(createdApplication.settings.signOn.audience).to.equal(application.settings.signOn.audience);
      expect(createdApplication.settings.signOn.authnContextClassRef).to.equal(application.settings.signOn.authnContextClassRef);
      expect(createdApplication.settings.signOn.defaultRelayState).to.equal(null);
      expect(createdApplication.settings.signOn.destination).to.equal(application.settings.signOn.destination);
      expect(createdApplication.settings.signOn.digestAlgorithm).to.equal(application.settings.signOn.digestAlgorithm);
      expect(createdApplication.settings.signOn.honorForceAuthn).to.equal(application.settings.signOn.honorForceAuthn);
      expect(createdApplication.settings.signOn.idpIssuer).to.equal(application.settings.signOn.idpIssuer);
      expect(createdApplication.settings.signOn.recipient).to.equal(application.settings.signOn.recipient);
      expect(createdApplication.settings.signOn.requestCompressed).to.equal(application.settings.signOn.requestCompressed);
      expect(createdApplication.settings.signOn.responseSigned).to.equal(application.settings.signOn.responseSigned);
      expect(createdApplication.settings.signOn.signatureAlgorithm).to.equal(application.settings.signOn.signatureAlgorithm);
      expect(createdApplication.settings.signOn.spIssuer).to.equal(application.settings.signOn.spIssuer);
      expect(createdApplication.settings.signOn.ssoAcsUrl).to.equal(application.settings.signOn.ssoAcsUrl);
      expect(createdApplication.settings.signOn.subjectNameIdFormat).to.equal(application.settings.signOn.subjectNameIdFormat);
      expect(createdApplication.settings.signOn.subjectNameIdTemplate).to.equal(application.settings.signOn.subjectNameIdTemplate);

    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

  // Test disabled as it fails on bacon/dev environment (https://oktainc.atlassian.net/browse/OKTA-179297)
  it.skip('should allow me to create a custom WS-Fed application', async () => {
    const application: ApplicationOptions = {
      name: 'template_wsfed',
      label: `node-sdk: Sample WS-Fed App - ${faker.random.word()}`.substring(0, 49),
      signOnMode: 'WS_FEDERATION',
      settings: {
        app: {
          attributeStatements: null,
          audienceRestriction: 'urn:example:app',
          authnContextClassRef: 'urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport',
          groupFilter: null,
          groupName: null,
          groupValueFormat: 'windowsDomainQualifiedName',
          nameIDFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
          realm: 'urn:example:app',
          siteURL: 'https://example.com',
          usernameAttribute: 'username',
          wReplyOverride: false,
          wReplyURL: 'https://example.com/',
        }
      }
    };

    let createdApplication: WsFederationApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(WsFederationApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(WsFederationApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(WsFederationApplicationSettingsApplication);
      expect(createdApplication.settings.app.attributeStatements).to.equal(application.settings.app.attributeStatements);
      expect(createdApplication.settings.app.audienceRestriction).to.equal(application.settings.app.audienceRestriction);
      expect(createdApplication.settings.app.authnContextClassRef).to.equal(application.settings.app.authnContextClassRef);
      expect(createdApplication.settings.app.groupFilter).to.equal(application.settings.app.groupFilter);
      expect(createdApplication.settings.app.groupName).to.contain('http://schemas.microsoft.com/');
      expect(createdApplication.settings.app.groupValueFormat).to.equal(application.settings.app.groupValueFormat);
      expect(createdApplication.settings.app.nameIDFormat).to.equal(application.settings.app.nameIDFormat);
      expect(createdApplication.settings.app.realm).to.equal(application.settings.app.realm);
      expect(createdApplication.settings.app.siteURL).to.equal(application.settings.app.siteURL);
      expect(createdApplication.settings.app.usernameAttribute).to.equal(application.settings.app.usernameAttribute);
      expect(createdApplication.settings.app.wReplyOverride).to.equal(application.settings.app.wReplyOverride);
      expect(createdApplication.settings.app.wReplyURL).to.equal(application.settings.app.wReplyURL);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });

  it('should allow me to create a OIDC client application', async () => {
    const application: ApplicationOptions = {
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

    let createdApplication: OpenIdConnectApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(Application);
      expect(createdApplication).to.be.instanceof(OpenIdConnectApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.credentials).to.be.instanceof(OAuthApplicationCredentials);
      expect(createdApplication.credentials.oauthClient).to.be.instanceof(ApplicationCredentialsOAuthClient);
      expect(createdApplication.credentials.oauthClient.client_id).to.not.be.null;
      expect(createdApplication.credentials.oauthClient.client_secret).to.not.be.undefined;
      expect(createdApplication.credentials.oauthClient.token_endpoint_auth_method).to.equal(application.credentials.oauthClient.token_endpoint_auth_method);
      expect(createdApplication.settings).to.be.instanceof(ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(OpenIdConnectApplicationSettings);
      expect(createdApplication.settings.oauthClient).to.be.instanceof(OpenIdConnectApplicationSettingsClient);
      expect(createdApplication.settings.oauthClient.application_type).to.equal(application.settings.oauthClient.application_type);
      expect(createdApplication.settings.oauthClient.client_uri).to.equal(application.settings.oauthClient.client_uri);
      const grantTypes = application.settings.oauthClient.grant_types.map(grantTypeOptions => new OAuthGrantType(grantTypeOptions, client));
      expect(createdApplication.settings.oauthClient.grant_types).to.deep.equal(grantTypes);
      expect(createdApplication.settings.oauthClient.logo_uri).to.equal(application.settings.oauthClient.logo_uri);
      const responseTypes = application.settings.oauthClient.response_types.map(responseTypeOptions => new OAuthResponseType(responseTypeOptions, client));
      expect(createdApplication.settings.oauthClient.response_types).to.deep.equal(responseTypes);
    } finally {
      if (createdApplication) {
        await client.deactivateApplication(createdApplication.id);
        await client.deleteApplication(createdApplication.id);
      }
    }
  });
});

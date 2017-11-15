const expect = require('chai').expect;

const okta = require('../../');
const models = require('../../src/models');
const utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-create`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN
});

describe('client.createApplication()', () => {

  it('should allow me to create a bookmark application', async () => {
    const application = {
      name: 'bookmark',
      label: 'my bookmark app',
      signOnMode: 'BOOKMARK',
      settings: {
        app: {
          requestIntegration: false,
          url: 'https://example.com/bookmark.htm'
        }
      }
    };

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.BookmarkApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(models.BookmarkApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(models.ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(models.BookmarkApplicationSettingsApplication);
      expect(createdApplication.settings.app.requestIntegration).to.equal(application.settings.app.requestIntegration);
      expect(createdApplication.settings.app.url).to.equal(application.settings.app.url);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

  it('should allow me to create a basic authentication application', async () => {
    const application = {
      name: 'template_basic_auth',
      label: 'Sample Basic Auth App',
      signOnMode: 'BASIC_AUTH',
      settings: {
        app: {
          authURL: 'https://example.com/auth.html',
          url: 'https://example.com/bookmark.htm'
        }
      }
    };

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.BasicAuthApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(models.BasicApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(models.ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(models.BasicApplicationSettingsApplication);
      expect(createdApplication.settings.app.authURL).to.equal(application.settings.app.authURL);
      expect(createdApplication.settings.app.url).to.equal(application.settings.app.url);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

  it('should allow me to create a SWA plugin application', async () => {
    const application = {
      name: 'template_swa',
      label: 'Sample Plugin App',
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

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.BrowserPluginApplication);
      expect(createdApplication).to.be.instanceof(models.SwaApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(models.SwaApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(models.ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(models.SwaApplicationSettingsApplication);
      expect(createdApplication.settings.app.buttonField).to.equal(application.settings.app.buttonField);
      expect(createdApplication.settings.app.passwordField).to.equal(application.settings.app.passwordField);
      expect(createdApplication.settings.app.usernameField).to.equal(application.settings.app.usernameField);
      expect(createdApplication.settings.app.url).to.equal(application.settings.app.url);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

  it('should allow me to create a 3-field SWA plugin application', async () => {
    const application = {
      name: 'template_swa3field',
      label: 'Sample Plugin App 3-field',
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

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.BrowserPluginApplication);
      expect(createdApplication).to.be.instanceof(models.SwaThreeFieldApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(models.SwaThreeFieldApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(models.ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(models.SwaThreeFieldApplicationSettingsApplication);
      expect(createdApplication.settings.app.buttonSelector).to.equal(application.settings.app.buttonSelector);
      expect(createdApplication.settings.app.passwordSelector).to.equal(application.settings.app.passwordSelector);
      expect(createdApplication.settings.app.userNameSelector).to.equal(application.settings.app.userNameSelector);
      expect(createdApplication.settings.app.extraFieldSelector).to.equal(application.settings.app.extraFieldSelector);
      expect(createdApplication.settings.app.extraFieldValue).to.equal(application.settings.app.extraFieldValue);
      expect(createdApplication.settings.app.targetURL).to.equal(application.settings.app.targetURL);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

  it('should allow me to create a SWA no-plugin application', async () => {
    const application = {
      name: 'template_sps',
      label: 'Example SWA App',
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

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.SecurePasswordStoreApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(models.SecurePasswordStoreApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(models.ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(models.SecurePasswordStoreApplicationSettingsApplication);
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
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

  it('should allow me to create a custom SWA application', async () => {
    const application = {
      label: 'Example Custom SWA App',
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

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.AutoLoginApplication);
      expect(createdApplication.name).to.contain('examplecustomswaapp');
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings.signOn).to.be.instanceof(models.AutoLoginApplicationSettingsSignOn);
      expect(createdApplication.settings.signOn.redirectUrl).to.equal(application.settings.signOn.redirectUrl);
      expect(createdApplication.settings.signOn.loginUrl).to.equal(application.settings.signOn.loginUrl);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

  it('should allow me to create a custom SAML application', async () => {
    const application = {
      label: 'Example Custom SAML 2.0 App',
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

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.SamlApplication);
      expect(createdApplication.name).to.contain('examplecustomsaml20app');
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(models.SamlApplicationSettings);
      expect(createdApplication.settings.signOn).to.be.instanceof(models.SamlApplicationSettingsSignOn);
      expect(createdApplication.settings.signOn.assertionSigned).to.equal(application.settings.signOn.assertionSigned);
      expect(createdApplication.settings.signOn.attributeStatements).to.deep.equal(application.settings.signOn.attributeStatements);
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
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

  it('should allow me to create a custom WS-Fed application', async () => {
    const application = {
      name: 'template_wsfed',
      label: 'Sample WS-Fed App',
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

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.WsFederationApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(models.WsFederationApplicationSettings);
      expect(createdApplication.settings.app).to.be.instanceof(models.ApplicationSettingsApplication);
      expect(createdApplication.settings.app).to.be.instanceof(models.WsFederationApplicationSettingsApplication);
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
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });

  it('should allow me to create a OIDC client application', async () => {
    const application = {
      name: 'oidc_client',
      label: 'Sample Client',
      signOnMode: 'OPENID_CONNECT',
      credentials: {
        oauthClient: {
          client_id: '0oa1hm4POxgJM6CPu0g4',
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

    let createdApplication;

    try {
      await utils.removeAppByLabel(client, application.label);
      createdApplication = await client.createApplication(application);
      expect(createdApplication).to.be.instanceof(models.Application);
      expect(createdApplication).to.be.instanceof(models.OpenIdConnectApplication);
      expect(createdApplication.name).to.equal(application.name);
      expect(createdApplication.label).to.equal(application.label);
      expect(createdApplication.signOnMode).to.equal(application.signOnMode);
      expect(createdApplication.credentials).to.be.instanceof(models.OAuthApplicationCredentials);
      expect(createdApplication.credentials.oauthClient).to.be.instanceof(models.ApplicationCredentialsOAuthClient);
      expect(createdApplication.credentials.oauthClient.client_id).to.equal(application.credentials.oauthClient.client_id);
      expect(createdApplication.credentials.oauthClient.client_secret).to.not.be.undefined;
      expect(createdApplication.credentials.oauthClient.token_endpoint_auth_method).to.equal(application.credentials.oauthClient.token_endpoint_auth_method);
      expect(createdApplication.settings).to.be.instanceof(models.ApplicationSettings);
      expect(createdApplication.settings).to.be.instanceof(models.OpenIdConnectApplicationSettings);
      expect(createdApplication.settings.oauthClient).to.be.instanceof(models.OpenIdConnectApplicationSettingsClient);
      expect(createdApplication.settings.oauthClient.application_type).to.equal(application.settings.oauthClient.application_type);
      expect(createdApplication.settings.oauthClient.client_uri).to.equal(application.settings.oauthClient.client_uri);
      expect(createdApplication.settings.oauthClient.grant_types).to.deep.equal(application.settings.oauthClient.grant_types);
      expect(createdApplication.settings.oauthClient.logo_uri).to.equal(application.settings.oauthClient.logo_uri);
      expect(createdApplication.settings.oauthClient.response_types).to.deep.equal(application.settings.oauthClient.response_types);
    } finally {
      if (createdApplication) {
        await createdApplication.deactivate();
        await createdApplication.delete();
      }
    }
  });
});


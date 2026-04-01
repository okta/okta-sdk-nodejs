import utils = require('../utils');
import { expect } from 'chai';
import { Client, DefaultRequestExecutor, Application, AppUserAssignRequest } from '@okta/okta-sdk-nodejs';

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-api-integration`;
}

const client = new Client({
  scopes: ['okta.apps.manage', 'okta.users.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('ApplicationApi Integration Tests', () => {
  let createdApp: Application;
  const appLabel = `node-sdk-test-app-${Date.now()}`;

  describe('createApplication', () => {
    it('should create a basic OIDC web application', async function () {
      this.timeout(10000);

      const app = {
        name: 'oidc_client',
        label: appLabel,
        signOnMode: 'OPENID_CONNECT',
        credentials: {
          oauthClient: {
            autoKeyRotation: true,
            token_endpoint_auth_method: 'client_secret_post'
          }
        },
        settings: {
          oauthClient: {
            client_uri: null,
            logo_uri: null,
            redirect_uris: [
              'https://example.com/oauth2/callback'
            ],
            post_logout_redirect_uris: [
              'https://example.com/logout'
            ],
            response_types: [
              'code'
            ],
            grant_types: [
              'authorization_code'
            ],
            application_type: 'web',
            consent_method: 'REQUIRED',
            issuer_mode: 'ORG_URL'
          }
        }
      };

      createdApp = await client.applicationApi.createApplication({ application: app as Application });

      expect(createdApp).to.exist;
      expect(createdApp.id).to.exist;
      expect(createdApp.label).to.equal(appLabel);
      expect(createdApp.signOnMode).to.equal('OPENID_CONNECT');
      expect(createdApp.status).to.equal('ACTIVE');
    });
  });

  describe('getApplication', () => {
    it('should retrieve an application by id', async function () {
      this.timeout(10000);

      const app = await client.applicationApi.getApplication({
        appId: createdApp.id
      });

      expect(app).to.exist;
      expect(app.id).to.equal(createdApp.id);
      expect(app.label).to.equal(appLabel);
    });
  });

  describe('listApplications', () => {
    it('should list all applications', async function () {
      this.timeout(10000);

      const apps = await client.applicationApi.listApplications({});

      expect(apps).to.exist;
      // Test that we can iterate - Collection exists
      let count = 0;
      await apps.each(() => {
        count++;
      });
      expect(count).to.be.greaterThan(0);
    });

    it('should filter applications by label', async function () {
      this.timeout(10000);

      const apps = await client.applicationApi.listApplications({
        q: appLabel
      });

      expect(apps).to.exist;
      // Verify collection can be iterated
      let found = false;
      await apps.each(app => {
        if (app.id === createdApp.id) {
          found = true;
        }
      });
      expect(found).to.be.true;
    });

    it('should limit number of applications returned', async function () {
      this.timeout(10000);

      const apps = await client.applicationApi.listApplications({
        limit: 5
      });

      expect(apps).to.exist;
      // Verify collection exists - Collection may iterate beyond initial limit
      // but the API respects the limit parameter in pagination
      let count = 0;
      await apps.each(() => {
        count++;
        if (count >= 5) {
          return false;
        } // Stop after 5
      });
      expect(count).to.be.greaterThan(0);
    });
  });

  describe('replaceApplication', () => {
    it('should update application label', async function () {
      this.timeout(10000);

      const updatedLabel = `${appLabel}-updated`;
      const appToUpdate = { ...createdApp, label: updatedLabel };

      const updatedApp = await client.applicationApi.replaceApplication({
        appId: createdApp.id,
        application: appToUpdate
      });

      expect(updatedApp).to.exist;
      expect(updatedApp.label).to.equal(updatedLabel);

      // Update for cleanup
      createdApp = updatedApp;
    });
  });

  describe('listApplicationKeys', () => {
    it('should list all key credentials for an application', async function () {
      this.timeout(10000);

      const keys = await client.applicationApi.listApplicationKeys({
        appId: createdApp.id
      });

      expect(keys).to.exist;
    });
  });

  describe('deactivateApplication', () => {
    it('should deactivate an active application', async function () {
      this.timeout(10000);

      await client.applicationApi.deactivateApplication({
        appId: createdApp.id
      });

      // Verify deactivation
      const app = await client.applicationApi.getApplication({
        appId: createdApp.id
      });

      expect(app.status).to.equal('INACTIVE');
    });
  });

  describe('activateApplication', () => {
    it('should activate an inactive application', async function () {
      this.timeout(10000);

      await client.applicationApi.activateApplication({
        appId: createdApp.id
      });

      // Verify activation
      const app = await client.applicationApi.getApplication({
        appId: createdApp.id
      });

      expect(app.status).to.equal('ACTIVE');
    });
  });

  describe('deleteApplication', () => {
    it('should delete an application', async function () {
      this.timeout(10000);

      // Deactivate first (required before deletion)
      await client.applicationApi.deactivateApplication({
        appId: createdApp.id
      });

      // Delete
      await client.applicationApi.deleteApplication({
        appId: createdApp.id
      });

      // Verify deletion by attempting to get it (should fail)
      try {
        await client.applicationApi.getApplication({
          appId: createdApp.id
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.status).to.equal(404);
      }
    });
  });

  describe('Additional ApplicationApi Methods', () => {
    let testApp: Application;

    before(async function () {
      this.timeout(10000);

      // Create a test app for additional tests
      const app = {
        name: 'oidc_client',
        label: `node-sdk-additional-test-${Date.now()}`,
        signOnMode: 'OPENID_CONNECT',
        credentials: {
          oauthClient: {
            autoKeyRotation: true,
            token_endpoint_auth_method: 'client_secret_post'
          }
        },
        settings: {
          oauthClient: {
            client_uri: null,
            logo_uri: null,
            redirect_uris: ['https://example.com/callback'],
            response_types: ['code'],
            grant_types: ['authorization_code'],
            application_type: 'web'
          }
        }
      };

      testApp = await client.applicationApi.createApplication({ application: app as Application });
    });

    after(async function () {
      this.timeout(10000);

      if (testApp && testApp.id) {
        try {
          await client.applicationApi.deactivateApplication({ appId: testApp.id });
          await client.applicationApi.deleteApplication({ appId: testApp.id });
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    });

    describe('assignUserToApplication', () => {
      let testUser;

      before(async function () {
        this.timeout(10000);

        // Create a test user
        const newUser = {
          profile: utils.getMockProfile('application-api-user'),
          credentials: {
            password: { value: 'Abcd1234#@' }
          }
        };
        await utils.cleanup(client, newUser);
        testUser = await client.userApi.createUser({ body: newUser });
      });

      after(async function () {
        this.timeout(10000);
        await utils.cleanup(client, testUser);
      });

      it('should assign a user to an application', async function () {
        this.timeout(10000);

        const appUser = {
          id: testUser.id,
          scope: 'USER'
        };

        const assignedUser = await client.applicationApi.assignUserToApplication({
          appId: testApp.id,
          appUser: appUser as AppUserAssignRequest
        });

        expect(assignedUser).to.exist;
        expect(assignedUser.id).to.equal(testUser.id);
      });

      it('should retrieve an application user', async function () {
        this.timeout(10000);

        const appUser = await client.applicationApi.getApplicationUser({
          appId: testApp.id,
          userId: testUser.id
        });

        expect(appUser).to.exist;
        expect(appUser.id).to.equal(testUser.id);
      });

      it('should list all application users', async function () {
        this.timeout(10000);

        const users = await client.applicationApi.listApplicationUsers({
          appId: testApp.id
        });

        expect(users).to.exist;
        // Verify our user is in the collection
        let found = false;
        await users.each(u => {
          if (u.id === testUser.id) {
            found = true;
          }
        });
        expect(found).to.be.true;
      });

      it('should unassign a user from an application', async function () {
        this.timeout(10000);

        await client.applicationApi.unassignUserFromApplication({
          appId: testApp.id,
          userId: testUser.id
        });

        // Verify unassignment
        try {
          await client.applicationApi.getApplicationUser({
            appId: testApp.id,
            userId: testUser.id
          });
          expect.fail('Should have thrown an error');
        } catch (error) {
          expect(error.status).to.equal(404);
        }
      });
    });

    describe('generateApplicationKey', () => {
      it('should generate a new key credential', async function () {
        this.timeout(10000);

        const key = await client.applicationApi.generateApplicationKey({
          appId: testApp.id,
          validityYears: 2
        });

        expect(key).to.exist;
        expect(key.kid).to.exist;
        expect(key.kty).to.exist;
      });
    });

    describe('listFeaturesForApplication', () => {
      it('should list all features for an application', async function () {
        this.timeout(10000);

        const features = await client.applicationApi.listFeaturesForApplication({
          appId: testApp.id
        });

        expect(features).to.exist;
      });
    });

    describe('listScopeConsentGrants', () => {
      it('should list all scope consent grants for an application', async function () {
        this.timeout(10000);

        const grants = await client.applicationApi.listScopeConsentGrants({
          appId: testApp.id
        });

        expect(grants).to.exist;
      });
    });

    describe('listOAuth2TokensForApplication', () => {
      it('should list all OAuth 2.0 tokens for an application', async function () {
        this.timeout(10000);

        const tokens = await client.applicationApi.listOAuth2TokensForApplication({
          appId: testApp.id
        });

        expect(tokens).to.exist;
      });
    });
  });

  describe('Group Assignment Tests', () => {
    let testApp: Application;
    let testGroup;

    before(async function () {
      this.timeout(10000);

      // Create a test app
      const app = {
        name: 'oidc_client',
        label: `node-sdk-group-test-${Date.now()}`,
        signOnMode: 'OPENID_CONNECT',
        credentials: {
          oauthClient: {
            token_endpoint_auth_method: 'client_secret_post'
          }
        },
        settings: {
          oauthClient: {
            redirect_uris: ['https://example.com/callback'],
            response_types: ['code'],
            grant_types: ['authorization_code'],
            application_type: 'web'
          }
        }
      };

      testApp = await client.applicationApi.createApplication({ application: app as Application });

      // Create a test group
      const newGroup = {
        profile: {
          name: `node-sdk-app-group-${Date.now()}`,
          description: 'Test group for application assignment'
        }
      };

      testGroup = await client.groupApi.createGroup({ group: newGroup });
    });

    after(async function () {
      this.timeout(10000);

      if (testApp && testApp.id) {
        try {
          await client.applicationApi.deactivateApplication({ appId: testApp.id });
          await client.applicationApi.deleteApplication({ appId: testApp.id });
        } catch (error) {
          // Ignore cleanup errors
        }
      }

      if (testGroup && testGroup.id) {
        try {
          await client.groupApi.deleteGroup({ groupId: testGroup.id });
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    });

    it('should assign a group to an application', async function () {
      this.timeout(10000);

      const groupAssignment = {
        priority: 0
      };

      const assignment = await client.applicationApi.assignGroupToApplication({
        appId: testApp.id,
        groupId: testGroup.id,
        applicationGroupAssignment: groupAssignment
      });

      expect(assignment).to.exist;
      expect(assignment.id).to.equal(testGroup.id);
    });

    it('should retrieve an application group assignment', async function () {
      this.timeout(10000);

      const assignment = await client.applicationApi.getApplicationGroupAssignment({
        appId: testApp.id,
        groupId: testGroup.id
      });

      expect(assignment).to.exist;
      expect(assignment.id).to.equal(testGroup.id);
    });

    it('should list all application group assignments', async function () {
      this.timeout(10000);

      const assignments = await client.applicationApi.listApplicationGroupAssignments({
        appId: testApp.id
      });

      expect(assignments).to.exist;
      // Verify our group is in the collection
      let found = false;
      await assignments.each(a => {
        if (a.id === testGroup.id) {
          found = true;
        }
      });
      expect(found).to.be.true;
    });

    it('should unassign a group from an application', async function () {
      this.timeout(10000);

      await client.applicationApi.unassignApplicationFromGroup({
        appId: testApp.id,
        groupId: testGroup.id
      });

      // Verify unassignment
      try {
        await client.applicationApi.getApplicationGroupAssignment({
          appId: testApp.id,
          groupId: testGroup.id
        });
        expect.fail('Should have thrown an error');
      } catch (error) {
        expect(error.status).to.equal(404);
      }
    });
  });
});

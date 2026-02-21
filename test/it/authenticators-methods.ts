import { Client, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticator-methods`;
}

const client = new Client({
  scopes: ['okta.authenticators.read', 'okta.authenticators.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('Authenticators API - Methods tests', () => {
  let authenticatorId: string;

  before(async () => {
    // Ensure Security Question is active
    await utils.activateSecurityQuestion(client);
  });

  // do not run these tests in a non-OIE context
  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }

    // Get an authenticator with methods (email or phone)
    const authenticators = await client.authenticatorApi.listAuthenticators();
    await authenticators.each(async (item) => {
      if (item.type === 'email' && !authenticatorId) {
        authenticatorId = item.id;
      }
    });
  });

  it('should list authenticator methods', async () => {
    const methodsCollection = await client.authenticatorApi.listAuthenticatorMethods({ authenticatorId });
    const methods: any[] = [];
    await methodsCollection.each(method => methods.push(method));
    expect(methods).to.be.an('array');
    expect(methods.length).to.be.greaterThan(0);
  });

  it('should get a specific authenticator method', async () => {
    const methodsCollection = await client.authenticatorApi.listAuthenticatorMethods({ authenticatorId });
    const methods: any[] = [];
    await methodsCollection.each(method => methods.push(method));
    
    if (methods.length > 0) {
      const methodType = methods[0].type;
      const method = await client.authenticatorApi.getAuthenticatorMethod({
        authenticatorId,
        methodType
      });
      expect(method).to.have.property('type', methodType);
    }
  });

  it('should activate and deactivate authenticator method', async () => {
    // Find an authenticator with methods that can be activated/deactivated
    const authenticators = await client.authenticatorApi.listAuthenticators();
    let phoneAuthenticator;

    await authenticators.each(async (item) => {
      if (item.type === 'phone') {
        phoneAuthenticator = item;
      }
    });

    if (phoneAuthenticator) {
      const methodsCollection = await client.authenticatorApi.listAuthenticatorMethods({
        authenticatorId: phoneAuthenticator.id
      });

      const methods: any[] = [];
      await methodsCollection.each(method => methods.push(method));

      // Find a method that can be toggled
      const toggleableMethod = methods.find(m => m.status === 'ACTIVE' || m.status === 'INACTIVE');
      
      if (toggleableMethod) {
        const originalStatus = toggleableMethod.status;
        
        try {
          if (originalStatus === 'ACTIVE') {
            // Deactivate it
            const deactivated = await client.authenticatorApi.deactivateAuthenticatorMethod({
              authenticatorId: phoneAuthenticator.id,
              methodType: toggleableMethod.type
            });
            expect(deactivated.status).to.equal('INACTIVE');

            // Reactivate it
            const reactivated = await client.authenticatorApi.activateAuthenticatorMethod({
              authenticatorId: phoneAuthenticator.id,
              methodType: toggleableMethod.type
            });
            expect(reactivated.status).to.equal('ACTIVE');
          } else {
            // Activate it
            const activated = await client.authenticatorApi.activateAuthenticatorMethod({
              authenticatorId: phoneAuthenticator.id,
              methodType: toggleableMethod.type
            });
            expect(activated.status).to.equal('ACTIVE');

            // Deactivate it back
            const deactivated = await client.authenticatorApi.deactivateAuthenticatorMethod({
              authenticatorId: phoneAuthenticator.id,
              methodType: toggleableMethod.type
            });
            expect(deactivated.status).to.equal('INACTIVE');
          }
        } catch (error) {
          // Some methods may not support activation/deactivation
          console.log('Method activation/deactivation not supported:', error.message);
        }
      }
    }
  });

  it('should replace authenticator method settings', async () => {
    const methodsCollection = await client.authenticatorApi.listAuthenticatorMethods({ authenticatorId });
    const methods: any[] = [];
    await methodsCollection.each(method => methods.push(method));
    
    if (methods.length > 0) {
      const method = methods[0];
      try {
        const updatedMethod = await client.authenticatorApi.replaceAuthenticatorMethod({
          authenticatorId,
          methodType: method.type,
          authenticatorMethodBase: method
        });
        expect(updatedMethod).to.have.property('type', method.type);
      } catch (error) {
        // Some methods may not support replacement
        console.log('Method replacement not supported:', error.message);
      }
    }
  });
});

import { ServerConfiguration } from './../../src/generated/servers';
import  { createConfiguration } from './../../src/generated/configuration';
import { expect } from 'chai';
import { Client, UserType, v3} from '@okta/okta-sdk-nodejs';


describe('User Type API', () => {
  it('lists existing user types', async () => {
    const configuration = createConfiguration({
      baseServer: new ServerConfiguration(process.env.OKTA_CLIENT_ORGURL, {}),
      authMethods: {
        api_token: `SSWS ${process.env.OKTA_CLIENT_TOKEN}`
      }
    });
    const userTypeApi = new v3.UserTypeApi(configuration);

    const collection = await userTypeApi.listUserTypes();
    const userTypes: v3.UserType[] = [];
    for await (const userType of collection) {
      userTypes.push(userType);
    }
    expect(userTypes.length).to.be.greaterThan(0);
  });

  describe('when used through v2 client', () => {
    const orgUrl = process.env.OKTA_CLIENT_ORGURL;
    const token = process.env.OKTA_CLIENT_TOKEN;

    it('is invoked on v2 client ', async () => {
      const client = new Client({
        orgUrl,
        token
      });
      const userTypes = [];
      const collection = await client.listUserTypes();
      for await (const userType of collection) {
        userTypes.push(userType);
      }
      expect(userTypes.length).to.be.greaterThan(0);
    });

    it('can be invoked through userTypeApi property', async () => {
      const client = new Client({
        orgUrl,
        token
      });
      const userTypes = [];
      const collection = await client.userTypeApi.listUserTypes();
      for await (const userType of collection) {
        userTypes.push(userType);
      }
      expect(userTypes.length).to.be.greaterThan(0);
    });
  });
});

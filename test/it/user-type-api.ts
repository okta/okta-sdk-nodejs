import { expect } from 'chai';
import { Client, Collection, v3 } from '@okta/okta-sdk-nodejs';


describe('User Type API', () => {
  it('lists existing user types', async () => {
    const userTypeApi = await v3.api.UserTypeApiFp({
      orgUrl: process.env.OKTA_CLIENT_ORGURL,
      token: process.env.OKTA_CLIENT_TOKEN,
    });
    const collection: Collection<v3.model.UserType> = (await userTypeApi.listUserTypes())();
    const userTypes: v3.model.UserType[] = [];
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
      const collection = client.listUserTypes();
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

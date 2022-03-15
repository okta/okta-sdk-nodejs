import { expect } from 'chai';
import { v3 } from '@okta/okta-sdk-nodejs';
//import {  } from '@okta/okta-sdk-nodejs';


describe('User Type API', () => {
  it('lists existing user types', async () => {
    const userTypes: v3.model.UserType[] = await v3.api.UserTypeApiFp({
      orgUrl: process.env.OKTA_CLIENT_ORGURL,
      token: process.env.OKTA_CLIENT_TOKEN,
    }).listUserTypes().then(method => method());
    expect(userTypes.length).to.be.greaterThan(0);
  });
});

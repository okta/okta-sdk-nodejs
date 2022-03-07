import { expect } from 'chai';
import { UserTypeApiFp } from '../../src/v3/apis/user-type-api';
import { UserType } from '../../src/v3/models/user-type';


describe('User Type API', () => {
  it('lists existing user types', async () => {
    const userTypes: UserType[] = await UserTypeApiFp({
      orgUrl: process.env.OKTA_CLIENT_ORGURL,
      token: process.env.OKTA_CLIENT_TOKEN,
    }).listUserTypes().then(method => method());
    expect(userTypes.length).to.be.greaterThan(0);
  });
});

import { expect } from 'chai';
import faker = require('@faker-js/faker');
import {
  Collection,
  DefaultRequestExecutor,
  UserType,
  ApiClient
} from '@okta/okta-sdk-nodejs';
import getMockUserType = require('./mocks/user-type');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/type-user`;
}

const client = new ApiClient({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

async function createUserTypeWithRetry() {
  try {
    return await client.userTypeApi.createUserType({
      userType: getMockUserType() as UserType
    });
  } catch (err) {
    return new Promise<UserType>((resolve, reject) => {
      setTimeout(function () {
        client.userTypeApi.createUserType({
          userType: getMockUserType() as UserType
        }).then(userType => resolve(userType), err => reject(err));
      }, 2000);
    });
  }
}

async function deleteAllUserTypes() {
  const userTypes = await client.userTypeApi.listUserTypes();
  await userTypes.each(async t => {
    if (t.name !== 'user' && t.displayName.startsWith('node-sdk: ')) {
      try {
        await client.userTypeApi.deleteUserType({
          typeId: t.id
        });
      } catch (_e) { /* no-op */ }
    }
  });
}

describe('User Type API', async () => {
  let userType: UserType;

  before(async () => {
    await deleteAllUserTypes();
  });

  describe('List userTypes', () => {
    beforeEach(async () => {
      userType = await createUserTypeWithRetry();
    });
    afterEach(async () => {
      try {
        await client.userTypeApi.deleteUserType({
          typeId: userType.id
        });
      } catch (_e) { /* no-op */ }
    });

    it('should return a Collection of UserType', async () => {
      const userTypes = await client.userTypeApi.listUserTypes();
      expect(userTypes).to.be.instanceOf(Collection);
      //const {value: userType } = await userTypes.next();
      const nextValue = await userTypes.next();
      expect(nextValue.value.name.length).to.be.greaterThan(0);
    });
  });

  describe('Create userType', () => {
    afterEach(async () => {
      try {
        await client.userTypeApi.deleteUserType({
          typeId: userType.id
        });
      } catch (_e) { /* no-op */ }
    });

    it('should return UserType instance', async () => {
      const mockUserType: UserType = getMockUserType();
      userType = await client.userTypeApi.createUserType({
        userType: mockUserType
      });
      expect(userType).to.have.property('id');
      expect(userType.name).to.equal(mockUserType.name);
    });
  });

  describe('Get userType', () => {
    beforeEach(async () => {
      userType = await createUserTypeWithRetry();
    });
    afterEach(async () => {
      try {
        await client.userTypeApi.deleteUserType({
          typeId: userType.id
        });
      } catch (_e) { /* no-op */ }
    });

    it('should get userType by id', async () => {
      const userTypeFromGet = await client.userTypeApi.getUserType({
        typeId: userType.id
      });
      expect(userTypeFromGet.name).to.equal(userType.name);
    });
  });

  describe('Update userType', () => {
    let mockType: UserType;
    beforeEach(async () => {
      mockType = getMockUserType();
      userType = await client.userTypeApi.createUserType({
        userType: mockType
      });
    });
    afterEach(async () => {
      try {
        await client.userTypeApi.deleteUserType({
          typeId: userType.id
        });
      } catch (_e) { /* no-op */ }
    });

    it('should update name for userType', async () => {
      userType.description = faker.random.word();
      const updatedUserType = await client.userTypeApi.updateUserType({
        typeId: userType.id,
        userType
      });
      expect(updatedUserType.id).to.equal(userType.id);
      expect(updatedUserType.description).to.equal(userType.description);
    });

    it('should replace userType with a new resource', async () => {
      mockType.description = faker.random.word();
      const replacedUserType = await client.userTypeApi.replaceUserType({
        typeId: userType.id,
        userType: mockType as Required<UserType>
      });
      expect(replacedUserType.id).to.be.equal(userType.id);
      expect(replacedUserType.name).to.be.equal(mockType.name);
    });
  });

});

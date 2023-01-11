import { expect } from 'chai';
import faker = require('@faker-js/faker');
import {
  Collection,
  DefaultRequestExecutor,
  UserType,
  Client
} from '@okta/okta-sdk-nodejs';
import getMockUserType = require('./mocks/user-type');
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/type-user`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

//
async function createUserTypeWithRetry() {
  try {
    return await client.userTypeApi.createUserType({
      userType: getMockUserType() as UserType
    });
  } catch (err) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        client.userTypeApi.createUserType({
          userType: getMockUserType() as UserType
        }).then(userType => resolve(userType), err => reject(err));
      }, 2000);
    });
  }
}

describe('User Type API', async () => {
  let userType: UserType;

  describe('List userTypes', () => {
    beforeEach(async () => {
      userType = await createUserTypeWithRetry();
    });
    afterEach(async () => {
      // await userType.delete();
      await client.userTypeApi.deleteUserType({
        typeId: userType.id
      });
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
      await client.userTypeApi.deleteUserType({
        typeId: userType.id
      });
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
      await client.userTypeApi.deleteUserType({
        typeId: userType.id
      });
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
      await client.userTypeApi.deleteUserType({
        typeId: userType.id
      });
    });

    it('should update name for userType', async () => {
      userType.displayName = faker.random.word();
      // const updatedUserType = await userType.update();
      const updatedUserType = await client.userTypeApi.updateUserType({
        typeId: userType.id, 
        userType
      });
      expect(updatedUserType.id).to.equal(userType.id);
      expect(updatedUserType.displayName).to.equal(userType.displayName);
    });

    it('should replace userType with a new resource', async () => {
      mockType.displayName = faker.random.word();
      const replacedUserType = await client.userTypeApi.replaceUserType({
        typeId: userType.id, 
        userType: mockType
      });
      expect(replacedUserType.id).to.be.equal(userType.id);
      expect(replacedUserType.name).to.be.equal(mockType.name);
    });
  });

  describe('Delete userType', () => {
    beforeEach(async () => {
      userType = await createUserTypeWithRetry();
    });

    it('returns empty response on successful deletion', async () => {
      const res = await client.userTypeApi.deleteUserType({
        typeId: userType.id
      });
      expect(res).to.be.undefined;
    });
  });
});

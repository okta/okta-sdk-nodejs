import { expect } from 'chai';
import faker = require('@faker-js/faker');
import {
  Client,
  Collection,
  DefaultRequestExecutor,
  v3
} from '@okta/okta-sdk-nodejs';

import getMockUserType = require('./mocks/user-type');
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
    return await client.createUserType(getMockUserType());
  } catch (err) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        client.createUserType(getMockUserType()).then(userType => resolve(userType), err => reject(err));
      }, 2000);
    });
  }
}

describe('User Type API', async () => {
  let userType: v3.model.UserType;

  describe('List userTypes', () => {
    beforeEach(async () => {
      userType = await createUserTypeWithRetry();
    });
    afterEach(async () => {
      // await userType.delete();
      await client.deleteUserType(userType.id);
    });

    it('should return a Collection of UserType', async () => {
      const userTypes = client.listUserTypes();
      expect(userTypes).to.be.instanceOf(Collection);
      const {value: userType } = await userTypes.next();
      expect(userType.name.length).to.be.greaterThan(0);
    });
  });

  describe('Create userType', () => {
    afterEach(async () => {
      // await userType.delete();
      await client.deleteUserType(userType.id);
    });

    it('should return UserType instance', async () => {
      const mockUserType = getMockUserType();
      userType = await client.createUserType(mockUserType);
      expect(userType).to.have.property('id');
      expect(userType.name).to.equal(mockUserType.name);
    });
  });

  describe('Get userType', () => {
    beforeEach(async () => {
      userType = await createUserTypeWithRetry();
    });
    afterEach(async () => {
      // await userType.delete();
      await client.deleteUserType(userType.id);
    });

    it('should get userType by id', async () => {
      const userTypeFromGet = await client.getUserType(userType.id);
      expect(userTypeFromGet.name).to.equal(userType.name);
    });
  });

  describe('Update userType', () => {
    let mockType;
    beforeEach(async () => {
      mockType = getMockUserType();
      userType = await client.createUserType(mockType);
    });
    afterEach(async () => {
      // await userType.delete();
      await client.deleteUserType(userType.id);
    });

    it('should update name for userType', async () => {
      userType.displayName = faker.random.word();
      // const updatedUserType = await userType.update();
      const updatedUserType = await client.updateUserType(userType.id, userType);
      expect(updatedUserType.id).to.equal(userType.id);
      expect(updatedUserType.displayName).to.equal(userType.displayName);
    });

    it('should replace userType with a new resource', async () => {
      mockType.displayName = faker.random.word();
      const replacedUserType = await client.replaceUserType(userType.id, mockType);
      expect(replacedUserType.id).to.be.equal(userType.id);
      expect(replacedUserType.name).to.be.equal(mockType.name);
    });
  });

  describe('Delete userType', () => {
    beforeEach(async () => {
      userType = await createUserTypeWithRetry();
    });

    it('returns empty response on successful deletion', async () => {
      // const res = await userType.delete();
      const res: Record<string, never> = await client.deleteUserType(userType.id);
      expect(Object.keys(res).length).to.equal(0);
    });
  });
});

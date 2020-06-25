const expect = require('chai').expect;
const faker = require('faker');
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const getMockUserType = require('./mocks/user-type');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/type-user`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('User Type API', () => {
  let userType;

  describe('List userTypes', () => {
    beforeEach(async () => {
      userType = await client.createUserType(getMockUserType());
    });
    afterEach(async () => {
      await userType.delete();
    });

    it('should return a Collection of UserType', async () => {
      const userTypes = await client.listUserTypes();
      expect(userTypes).to.be.instanceOf(Collection);
      await userTypes.each(userType => {
        expect(userType).to.be.instanceOf(models.UserType);
      });
    });
  });

  describe('Create userType', () => {
    afterEach(async () => {
      await userType.delete();
    });

    it('should return UserType instance', async () => {
      const mockUserType = getMockUserType();
      userType = await client.createUserType(mockUserType);
      expect(userType).to.be.instanceOf(models.UserType);
      expect(userType).to.have.property('id');
      expect(userType.name).to.equal(mockUserType.name);
    });
  });

  describe('Get userType', () => {
    beforeEach(async () => {
      userType = await client.createUserType(getMockUserType());
    });
    afterEach(async () => {
      await userType.delete();
    });

    it('should get userType by id', async () => {
      const userTypeFromGet = await client.getUserType(userType.id);
      expect(userTypeFromGet).to.be.instanceOf(models.UserType);
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
      await userType.delete();
    });

    it('should update name for userType', async () => {
      userType.displayName = faker.random.word();
      const updatedUserType = await userType.update();
      expect(updatedUserType.id).to.equal(userType.id);
      expect(updatedUserType.displayName).to.equal(userType.displayName);
    });

    it('should replace userType with a new resource', async () => {
      mockType.displayName = faker.random.word();
      const replacedUserType = await client.replaceUserType(userType.id, mockType);
      expect(replacedUserType).to.be.instanceOf(models.UserType);
      expect(replacedUserType.id).to.be.equal(userType.id);
      expect(replacedUserType.name).to.be.equal(mockType.name);
    });
  });

  describe('Delete userType', () => {
    beforeEach(async () => {
      userType = await client.createUserType(getMockUserType());
    });

    it('should status 204 after deletion', async () => {
      const res = await userType.delete();
      expect(res.status).to.be.equal(204);
    });
  });
});

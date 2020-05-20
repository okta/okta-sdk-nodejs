const expect = require('chai').expect;
const deepcopy = require('deep-copy');
const okta = require('../../src');
const models = require('../../src/models');
const Collection = require('../../src/collection');
const mockUserType = require('./mocks/user-type.json');
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
      userType = await client.createUserType(mockUserType);
    });
    afterEach(async () => {
      await userType.delete();
    });

    it('should return a Collection', async () => {
      const userTypes = await client.listUserTypes();
      expect(userTypes).to.be.instanceOf(Collection);
    });

    it('should resolve UserType in collection', async () => {
      await client.listUserTypes().each(userType => {
        expect(userType).to.be.instanceOf(models.UserType);
      });
    });
  });

  describe('Create userType', () => {
    afterEach(async () => {
      await userType.delete();
    });

    it('should return correct model', async () => {
      userType = await client.createUserType(mockUserType);
      expect(userType).to.be.instanceOf(models.UserType);
    });

    it('should return correct data with id assigned', async () => {
      userType = await client.createUserType(mockUserType);
      expect(userType).to.have.property('id');
      expect(userType.name).to.equal(mockUserType.name);
    });
  });

  describe('Get userType', () => {
    beforeEach(async () => {
      userType = await client.createUserType(mockUserType);
    });
    afterEach(async () => {
      await userType.delete();
    });

    it('should get userType by id', async () => {
      const userTypeFromGet = await client.getUserType(userType.id);
      expect(userTypeFromGet).to.be.instanceOf(models.UserType);
      expect(userTypeFromGet.name).to.equal(mockUserType.name);
    });
  });

  describe('Update userType', () => {
    beforeEach(async () => {
      userType = await client.createUserType(mockUserType);
    });
    afterEach(async () => {
      await userType.delete();
    });

    it('should update name for userType', async () => {
      const mockName = 'Mock update useType';
      userType.displayName = mockName;
      const updatedUserType = await userType.update();
      expect(updatedUserType.id).to.equal(userType.id);
      expect(updatedUserType.displayName).to.equal(mockName);
    });

    it('should replace userType with a new resource', async () => {
      const mockUserTypeForReplacement = deepcopy(mockUserType);
      mockUserTypeForReplacement.displayName = 'mock replace displayname';
      mockUserTypeForReplacement.description = 'mock replace description';
      const replacedUserType = await client.replaceUserType(userType.id, mockUserTypeForReplacement);
      expect(replacedUserType).to.be.instanceOf(models.UserType);
      expect(replacedUserType.id).to.be.equal(userType.id);
    });
  });

  describe('Delete userType', () => {
    beforeEach(async () => {
      userType = await client.createUserType(mockUserType);
    });

    it('should status 204 after deletion', async () => {
      const res = await userType.delete();
      expect(res.status).to.be.equal(204);
    });
  });
});

import { expect } from 'chai';
import {
  DefaultRequestExecutor,
  UserType,
  Client
} from '@okta/okta-sdk-nodejs';

import getMockUserType = require('./mocks/user-type');
import getMockSchemaProperty = require('./mocks/user-schema-property');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/user-schema`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('User Schema API', () => {
  let userType: UserType;
  let schemaId: string;

  beforeEach(async () => {
    userType = await client.userTypeApi.createUserType({
      userType: getMockUserType()
    });
    const schemaLink = (userType._links.schema).href;
    schemaId = schemaLink.replace(orgUrl, '').split('/').pop();
  });
  afterEach(async () => {
    try {
      await client.userTypeApi.deleteUserType({
        typeId: userType.id
      });
    } catch (_e) { /* no-op */ }
  });

  it('gets UserSchema for custom user type', async () => {
    const userSchema = await client.schemaApi.getUserSchema({
      schemaId
    });
    expect(userSchema.definitions.custom.id).to.equal('#custom');
  });

  it('adds property to UserSchema for custom user type', async () => {
    const userSchema = await client.schemaApi.getUserSchema({
      schemaId
    });
    expect(Object.keys(userSchema.definitions.custom.properties)).to.be.an('array').that.is.empty;
    const updatedSchema = await client.schemaApi.updateUserProfile({
      schemaId,
      userSchema: getMockSchemaProperty()
    });
    expect(Object.keys(updatedSchema.definitions.custom.properties)).to.be.an('array').that.contains('twitterUserName');
  });

  it('updates custom user type UserSchema property', async () => {
    const mockSchemaProperty = getMockSchemaProperty();
    let updatedSchema = await client.schemaApi.updateUserProfile({
      schemaId,
      userSchema: mockSchemaProperty
    });
    let customProperty = updatedSchema.definitions.custom.properties.twitterUserName as Record<string, string>;
    expect(customProperty.title).to.equal('Twitter username');
    updatedSchema = await client.schemaApi.updateUserProfile({
      schemaId,
      userSchema: {
        ...mockSchemaProperty,
        definitions: {
          custom: {
            id: '#custom',
            type: 'object',
            properties: {
              twitterUserName: Object.assign(
                mockSchemaProperty.definitions.custom.properties.twitterUserName,
                {title: 'Twitter handle'})
            }
          }
        }
      }
    });
    customProperty = updatedSchema.definitions.custom.properties.twitterUserName as Record<string, string>;
    expect(customProperty.title).to.equal('Twitter handle');
  });

  it('removes custom user type UserSchema property', async () => {
    const mockSchemaProperty = getMockSchemaProperty();
    let updatedSchema = await client.schemaApi.updateUserProfile({
      schemaId,
      userSchema: mockSchemaProperty
    });
    expect(Object.keys(updatedSchema.definitions.custom.properties)).to.contain('twitterUserName');
    updatedSchema = await client.schemaApi.updateUserProfile({
      schemaId,
      userSchema: {
        ...mockSchemaProperty,
        definitions: {
          custom: {
            id: '#custom',
            type: 'object',
            properties: {
              twitterUserName: null
            }
          }
        }
      }
    });
    expect(Object.keys(updatedSchema.definitions.custom.properties)).not.to.contain('twitterUserName');
  });
});

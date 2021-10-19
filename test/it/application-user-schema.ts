// @ts-nocheck
import { expect } from 'chai';

import utils = require('../utils');
import { Client, BookmarkApplication, UserSchema, DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import getMockSchemaProperty = require('./mocks/user-schema-property');


let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-user-schema`;
}

const client = new Client({
  scopes: ['okta.schemas.read', 'okta.schemas.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('App User Schema', () => {
  const applicationOptions = utils.getOIDCApplication();
  let createdApplication: BookmarkApplication;

  beforeEach(async () => {
    createdApplication = await client.createApplication(applicationOptions) as unknown as BookmarkApplication;

  });
  afterEach(async () => {
    // @ts-ignore
    await client.deactivateApplication(createdApplication.id);
    // @ts-ignore
    await client.deleteApplication(createdApplication.id);
  });

  it('gets UserSchema for application', async () => {
    // @ts-ignore
    const userSchema = await client.getApplicationUserSchema(createdApplication.id);
    expect(userSchema).to.be.instanceOf(UserSchema);
  });

  it('adds property to application\'s UserSchema', async () => {
    // @ts-ignore
    const userSchema = await client.getApplicationUserSchema(createdApplication.id);
    expect(Object.keys(userSchema.definitions.custom.properties)).to.be.an('array').that.is.empty;
    // @ts-ignore
    const updatedSchema = await client.updateApplicationUserProfile(createdApplication.id, getMockSchemaProperty());
    expect(Object.keys(updatedSchema.definitions.custom.properties)).to.be.an('array').that.contains('twitterUserName');
  });

  it('updates application\'s UserSchema', async () => {
    const mockSchemaProperty = getMockSchemaProperty();
    // @ts-ignore
    let updatedSchema = await client.updateApplicationUserProfile(createdApplication.id, mockSchemaProperty);
    let customProperty = updatedSchema.definitions.custom.properties.twitterUserName as Record<string, string>;
    expect(customProperty.title).to.equal('Twitter username');
    // @ts-ignore
    updatedSchema = await client.updateApplicationUserProfile(createdApplication.id, Object.assign(
      mockSchemaProperty,
      {
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
    ));
    customProperty = updatedSchema.definitions.custom.properties.twitterUserName as Record<string, string>;
    expect(customProperty.title).to.equal('Twitter handle');
  });

  it('removes custom user type UserSchema property', async () => {
    const mockSchemaProperty = getMockSchemaProperty();
    // @ts-ignore
    let updatedSchema = await client.updateApplicationUserProfile(createdApplication.id, mockSchemaProperty);
    expect(Object.keys(updatedSchema.definitions.custom.properties)).to.contain('twitterUserName');
    // @ts-ignore
    updatedSchema = await client.updateApplicationUserProfile(createdApplication.id, Object.assign(
      mockSchemaProperty,
      {
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
    ));
    expect(Object.keys(updatedSchema.definitions.custom.properties)).not.to.contain('twitterUserName');
  });

});

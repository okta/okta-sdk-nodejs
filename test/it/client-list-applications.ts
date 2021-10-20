import { ApplicationSignOnMode } from './../../src/models/applicationSignOnMode';
import { expect } from 'chai';
import faker = require('faker');
import {
  BasicAuthApplication,
  BookmarkApplication,
  Client,
  Collection,
  DefaultRequestExecutor } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/client-list-applications`;
}

const client = new Client({
  scopes: ['okta.clients.manage', 'okta.apps.manage'],
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new DefaultRequestExecutor()
});

describe('client.listApplications()', () => {
  const app1 = {
    name: 'bookmark',
    label: `node-sdk: Bookmark App ${faker.random.word()}`.substring(0, 49),
    signOnMode: ApplicationSignOnMode.Bookmark,
    settings: {
      app: {
        requestIntegration: false,
        url: 'https://example.com/bookmark.htm'
      }
    }
  };
  const app2 = {
    name: 'template_basic_auth',
    label: `node-sdk: Sample Basic Auth App ${faker.random.word()}`.substring(0, 49),
    signOnMode: ApplicationSignOnMode.BasicAuth,
    settings: {
      app: {
        authURL: 'https://example.com/auth.html',
        url: 'https://example.com/bookmark.htm'
      }
    }
  };
  let basicApplication;
  let bookmarkApplication;

  before(async () => {
    await utils.removeAppByLabel(client, app1.label);
    await utils.removeAppByLabel(client, app2.label);
    basicApplication = await client.createApplication(app2);
    bookmarkApplication = await client.createApplication(app1);
  });

  after(async () => {
    await client.deactivateApplication(bookmarkApplication.id);
    await client.deleteApplication(bookmarkApplication.id);
    await client.deactivateApplication(basicApplication.id);
    await client.deleteApplication(basicApplication.id);
  });

  it('should return a collection', () => {
    expect(client.listApplications()).to.be.an.instanceof(Collection);
  });

  it('should return the correct application types', async () => {
    let bookmarkApplication;
    let basicApplication;
    (await client.listApplications()).forEach(app => {
      if (app.label === app1.label && app instanceof BookmarkApplication) {
        bookmarkApplication = app;
      }
      if (app.label === app2.label && app instanceof BasicAuthApplication) {
        basicApplication = app;
      }
    });
    expect(bookmarkApplication).to.be.an.instanceof(BookmarkApplication);
    expect(basicApplication).to.be.an.instanceof(BasicAuthApplication);
  });

});

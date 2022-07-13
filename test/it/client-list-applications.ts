import { expect } from 'chai';
import faker = require('@faker-js/faker');
import {
  v3,
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

const createBookmarkApp = async () => {
  const app: v3.BookmarkApplication = {
    name: 'bookmark',
    label: `node-sdk: Filter Bookmark App ${faker.random.word()}`.substring(0, 49),
    signOnMode: 'BOOKMARK',
    settings: {
      app: {
        requestIntegration: false,
        url: 'https://example.com/bookmark.htm'
      }
    }
  };
  await utils.removeAppByLabel(client, app.label);
  return await client.createApplication(app);
};

const createBasicAuthApp = async () => {
  const app: v3.BasicAuthApplication = {
    name: 'template_basic_auth',
    label: `node-sdk: Filter Sample Basic Auth App ${faker.random.word()}`.substring(0, 49),
    signOnMode: 'BASIC_AUTH',
    settings: {
      app: {
        authURL: 'https://example.com/auth.html',
        url: 'https://example.com/bookmark.htm'
      }
    }
  };
  await utils.removeAppByLabel(client, app.label);
  return await client.createApplication(app);
};

describe('client.listApplications()', () => {
  let basicApplication;
  let bookmarkApplication;

  before(async () => {
    basicApplication = await createBasicAuthApp();
    bookmarkApplication = await createBookmarkApp();
  });

  after(async () => {
    await client.deactivateApplication(bookmarkApplication.id);
    await client.deleteApplication(bookmarkApplication.id);
    await client.deactivateApplication(basicApplication.id);
    await client.deleteApplication(basicApplication.id);
  });

  it('should return a collection', async () => {
    expect(await client.listApplications()).to.be.an.instanceof(Collection);
  });

  it('should return the correct application types', async () => {
    let bookmarkApp;
    let basicApp;
    await (await client.listApplications()).each(app => {
      if (app.label === bookmarkApplication.label && app instanceof v3.BookmarkApplication) {
        bookmarkApp = app;
      }
      if (app.label === basicApplication.label && app instanceof v3.BasicAuthApplication) {
        basicApp = app;
      }
    });
    expect(bookmarkApp).to.be.an.instanceof(v3.BookmarkApplication);
    expect(basicApp).to.be.an.instanceof(v3.BasicAuthApplication);
  });

});

describe('client.listApplications({ })', () => {
  const apps = [];

  before(async () => {
    const stagedApp = await createBookmarkApp();
    await client.deactivateApplication(stagedApp.id);
    apps.push(stagedApp);
    for (let i = 0 ; i < 2 ; i++) {
      const app = await createBasicAuthApp();
      apps.push(app);
    }
    for (let i = 0 ; i < 2 ; i++) {
      const app = await createBookmarkApp();
      apps.push(app);
    }
  });

  after(async () => {
    for (const app of apps) {
      await client.deactivateApplication(app.id);
      await client.deleteApplication(app.id);
    }
  });

  it('should filter apps with filter and paginate results', async () => {
    const queryParameters = {
      filter: 'name eq "bookmark"',
      limit: 2
    };
    const filtered = new Set();
    await (await client.listApplications(queryParameters)).each(app => {
      expect(app).to.be.an.instanceof(v3.BookmarkApplication);
      expect((app as v3.BookmarkApplication).name).to.eq('bookmark');
      expect(filtered.has(app.label)).to.be.false;
      filtered.add(app.label);
    });
    expect(filtered.size).to.equal(3);
  });

  it('should search apps with q by name and label and paginate results', async () => {
    const queryParameters = {
      q: 'node-sdk: Filter Sample Basic Auth App',
      limit: 1
    };
    const filtered = new Set();
    await (await client.listApplications(queryParameters)).each(app => {
      expect(app).to.be.an.instanceof(v3.BasicAuthApplication);
      expect(app.label).to.match(new RegExp('node-sdk: Filter Sample Basic Auth App'));
      expect(filtered.has(app.label)).to.be.false;
      filtered.add(app.label);
    });
    expect(filtered.size).to.equal(2);
  });

});


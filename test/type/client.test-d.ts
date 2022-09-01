import { expectError, expectType } from 'tsd';
import { Client } from '../../src/types/client';
import { Collection } from '../../src/types/collection';
import { Application } from '../../src/types/generated/models/Application';
import { BookmarkApplication } from '../../src/types/generated/models/BookmarkApplication';

const client = new Client();
(async function () {
  // mandatory query parameters
  expectError(await client.policyApi.listPolicies());

  // Client methods return either Promise or Collection
  expectType<Promise<void>>(client.policyApi.deletePolicy({policyId: 'policyId'}));
  expectType<Collection<Application>>(await client.applicationApi.listApplications());

  // methods expecting body request parameters
  const appOptions: BookmarkApplication = {
    name: 'bookmark',
    label: 'Bookmark app',
    signOnMode: 'BOOKMARK',
    settings: {
      app: {
        requestIntegration: false,
        url: 'https://example.com/bookmark.htm'
      }
    }
  };

  expectType<Promise<Application>>(client.applicationApi.createApplication({application: appOptions}));
}());


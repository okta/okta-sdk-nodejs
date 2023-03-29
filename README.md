[<img src="https://aws1.discourse-cdn.com/standard14/uploads/oktadev/original/1X/0c6402653dfb70edc661d4976a43a46f33e5e919.png" align="right" width="256px"/>](https://devforum.okta.com/)
[![npm](https://img.shields.io/npm/v/@okta/okta-sdk-nodejs)](https://www.npmjs.com/package/@okta/okta-sdk-nodejs)
[![Support](https://img.shields.io/badge/support-Developer%20Forum-blue.svg)][devforum]
[![API Reference](https://img.shields.io/badge/docs-reference-lightgrey.svg)][nodejsdocs]

# Okta Node.js Management SDK

> ⚠️ This SDK is _NOT_ intended for end user authentication flows. Please see the [auth-js](https://github.com/okta/okta-auth-js) repo instead, it works for both browser and server (Node.js) applications. 

* [Release status](#release-status)
* [Need help?](#need-help)
* [Getting started](#getting-started)
* [Usage guide](#usage-guide)
* [Configuration reference](#configuration-reference)
* [TypeScript usage](#typescript-usage)
* [Migrating between versions](#migrating-between-versions)
* [Building the SDK](#building-the-sdk)
* [Contributing](#contributing)

This repository contains the Okta management SDK for Node.js. This SDK can be used in your server-side code to interact with the Okta management API and:
 
* Create and update users with the [Users API](https://developer.okta.com/docs/api/resources/users)
* Add security factors to users with the [Factors API](https://developer.okta.com/docs/api/resources/factors)
* Manage groups with the [Groups API](https://developer.okta.com/docs/api/resources/groups)
* Manage applications with the [Apps API](https://developer.okta.com/docs/api/resources/apps)
* Much more!
 
We also publish these libraries for Node.js:
 
* [Authentication SDK](https://github.com/okta/okta-auth-js)
 
You can learn more on the [Okta + Node.js](https://developer.okta.com/code/nodejs) page in our documentation.

## Release status

This library uses semantic versioning and follows Okta's [library version policy](https://developer.okta.com/code/library-versions/).

✔️: The current stable major version series is: 6.x.x

| Version | Status                    |
| ------- | ------------------------- |
| 1.x | :x: Retired |
| 2.x | :x: Retired |
| 3.x | :x: Retired |
| 4.x | :x: Retired |
| 5.x | :heavy_check_mark: Stable ([migration guide](#from-4x-to-50)) |
| 6.x | :heavy_check_mark: Stable ([migration guide](#from-5x-to-60)) |
| 7.x | :heavy_check_mark: Stable ([migration guide](#from-6x-to-70)) |

The latest release can always be found on the [releases page][github-releases].
 
## Need help?
 
If you run into problems using the SDK, you can
 
* Ask questions on the [Okta Developer Forums][devforum]
* Post [issues][github-issues] here on GitHub (for code errors)
Node.js API Client for the [Okta Platform API].

Requires Node.js version 12.0.0 or higher.


```sh
npm install @okta/okta-sdk-nodejs
```

## Usage guide

All usage of this SDK begins with the creation of a client, the client handles the authentication and communication with the Okta API.  To create a client, you need to provide it with your Okta Domain and an API token.  To obtain those, see [Getting Started With the Okta APIs](https://developer.okta.com/code/rest/).

We also include an opt-in [default request executor](#default-request-executor) that you can configure, which will automatically handle rate limiting retries for you:

```javascript
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/',
  token: 'xYzabc'    // Obtained from Developer Dashboard
});
```

It is also possible to provide configuration through environment variables or YAML files.  Please see [Configuration](#configuration) for examples.

All interactions with the [Okta Platform API] is done through client methods.  Some examples are below, but for a full
 list of methods please refer to the JsDoc page for the [Client].

### OAuth 2.0 Authentication

Okta allows you to interact with Okta APIs using scoped OAuth 2.0 access tokens. Each access token enables the bearer to perform specific actions on specific Okta endpoints, with that ability controlled by which scopes the access token contains.

This SDK supports this feature only for service-to-service applications. Please read [this guide](https://developer.okta.com/docs/guides/implement-oauth-for-okta/overview/) to learn more about how to register a new service application using a private and public key pair.

When using this approach you won't need an API Token because the SDK will request an access token for you. In order to use OAuth 2.0, construct a client instance by passing the following parameters:

```js
const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/',
  authorizationMode: 'PrivateKey',
  clientId: '{oauth application ID}',
  scopes: ['okta.users.manage'],
  privateKey: '{JWK}', // <-- see notes below
  keyId: 'kidValue'
});
```

The `privateKey` can be passed in the following ways:
- As a JSON encoded string of a JWK object
- A string in PEM format
- As a JSON object, in JWK format

> Note: in case OAuth client app uses multiple JWKs, `privateKey` should specify `kid` attribute. When `privateKey` is passed in PEM format, `keyId` value should be provided in SDK configuation.


## Examples

This library is a wrapper for the [Okta Platform API], which should be referred to as the source-of-truth for what is and isn't possible with the API.  In the following sections we show you how to use your client to perform some common operations with the [Okta Platform API].

 * [Users](#users)
    * [Create a User](#create-a-user)
    * [Get a User](#get-a-user)
    * [Update a User](#update-a-user)
    * [Delete a User](#delete-a-user)
    * [List All Org Users](#list-all-org-users)
    * [Search for Users](#search-for-users)
  * [Groups](#groups)
    * [Create a Group](#create-a-group)
    * [Assign a User to a Group](#assign-a-user-to-a-group)
  * [Applications](#applications)
    * [Create an Application](#create-an-application)
    * [Assign a User to an Application](#assign-a-user-to-an-application)
    * [Assign a Group to an Application](#assign-a-group-to-an-application)
  * [System Log](#system-log)
    * [Get Logs](#get-logs)
  * [Call other API Endpoints](#call-other-api-endpoints)
* [Collection](#collection)
  * [each](#each)
  * [subscribe](#subscribeconfig)

### Users

#### Create a User

The [Users: Create User] API can be used to create users.  The most basic type of user is one that has an email address and a password to login with, and can be created with the `client.userApi.createUser({ body })` method:

```javascript
const newUser = {
  profile: {
    firstName: 'Foo',
    lastName: 'Bar',
    email: 'foo@example.com',
    login: 'foo@example.com'
  },
  credentials: {
    password: {
      value: 'PasswordAbc123'
    }
  }
};

const user = await client.userApi.createUser({ body: newUser });
console.log('Created user', user);
```

#### Get a User

The [Users: Get User] API can be used to fetch a user by id or login (as defined on their `profile.login` property), and is wrapped by `client.userApi.getUser({ userId: :id|:login })`:

```javascript
let user;
user = await client.userApi.getUser({ userId: 'ausmvdt5xg8wRVI1d0g3' });
console.log(user);

user = await client.userApi.getUser({ userId: 'foo@bar.com' });
console.log(user);
```

#### Update a User

Once you have a user instance, you can modify it and then call the `client.userApi.updateUser({ userId, user })` method to persist those changes to the API.  This uses the [Users: Update User] API:

```javascript
user.profile.nickName = 'rob';
await client.userApi.updateUser({
  userId: user.id,
  user: user
});
```

#### Delete a User

Before deleting an Okta user, they must first be deactivated.  Both operations are done with the [Users: Lifecycle Operations] API by calling `client.userApi.deactivateUser({ userId })` and `client.userApi.deleteUser({ userId })` operations:

```javascript
await client.userApi.deactivateUser({ userId: user.id });
await client.userApi.deleteUser({ userId: user.id });
```

#### List All Org Users

The client can be used to fetch collections of resources, in this example we'll use the [Users: List Users] API.  When fetching collections, you can use the `each()` method to iterate through the collection.  For more information see [Collection](#collection).

```javascript
const collection = await client.userApi.listUsers();
await collection.each(user => {
  console.log(user);
});
console.log('All users have been listed');
```

You can also use async iterators.

```javascript
const collection = await client.userApi.listUsers();
for await (let user of collection) {
  console.log(user);
}
```

For more information about this API see [Users: Get User].

#### Search for Users

The [Users: List Users] API provides three ways to search for users, `q`, `filter`, or `search`, and all of these approaches can be achieved by passing them as query parameters to the `client.userApi.listUsers()` method.  The library will URL-encode the values for you.

```javascript
let collection;
collection = await client.userApi.listUsers({
  q: 'Robert'
});
await collection.each(user => {
  console.log('User matches query: ', user);
});


collection = await client.userApi.listUsers({
  search: 'profile.nickName eq "abc 1234"'
});
await collection.each(user => {
  console.log('User matches query: ', user);
});

collection = await client.userApi.listUsers({
  filter: 'lastUpdated gt "2017-06-05T23:00:00.000Z"'
});
await collection.each(user => {
  console.log('User matches query: ', user);
});
```

## Groups

#### Create a Group

The [Groups: Add Group] API allows you to create Groups, and this is wrapped by `client.groupApi.createGroup({ group })`:

```javascript
const newGroup = {
  profile: {
    name: 'Admin Users Group'
  }
};

const group = await client.groupApi.createGroup({ group: newGroup });
console.log('Created group', group);
```

#### Assign a User to a Group

With a user and group instance, you can use the `client.groupApi.assignUserToGroup({groupId, userId})` method to add the user to the known group:

```javascript
await client.groupApi.assignUserToGroup({ groupId: group.id, userId: user.id });
console.log('User has been added to group');
```

### Applications

#### Create An Application

The [Applications: Add Application] API allows you to create Okta Applications.  There are many different types of applications that can be created.  Please refer to the [Applications] documentation for details about each application type and what is required when creating the application.

In this example, we create a [Basic Authentication Application]:

```javascript
const application = {
  name: 'template_basic_auth',
  label: 'Sample Basic Auth App',
  signOnMode: 'BASIC_AUTH',
  settings: {
    app: {
      url: 'https://example.com/auth.htm',
      authURL: 'https://example.com/login.html'
    }
  }
};

const createdApplication = await client.applicationApi.createApplication({ application });
console.log('Created application:', createdApplication);
```

#### Assign a User to an Application

To assign a user to an application, you must know the ID of the application and the user:

```javascript
const appUser = await client.applicationApi.assignUserToApplication({
  appId: createdApplication.id,
  appUser: {
    id: createdUser.id
  }
});
console.log('Assigned user to app, app user instance:', appUser);
```

An App User is created, which is a new user instance that is specific to this application.  An App User allows you define an application-specific profile for that user.  For more information please see [Applications: User Operations] and [Applications: Application User Profile].

#### Assign a Group to an Application

To assign a group to an application, you must know the ID of the application and the group:

```javascript
const assignment = await client.applicationApi.assignGroupToApplication({
  appId: createdApplication.id, 
  groupId: createdGroup.id, 
  applicationGroupAssignment: {}
});
console.log('Assignment:', assignment);
```

### Sessions

#### Create a Session

This is a rarely used method. See [Sessions: Create Session with Session Token] for the common ways to create a session. To use this method, you must have a sessionToken:

```javascript
const session = await client.sessionApi.createSession({
  createSessionRequest: {
    sessionToken: 'your session token'
  }
});
console.log('Session details:', session);
```

#### Get a Session

To retrieve details about a session, you must know the ID of the session:

```javascript
session = await client.sessionApi.getSession({
  sessionId: session.id
});
console.log('Session details:', session);
```

These details include when and how the user authenticated and the session expiration. For more information see [Sessions: Session Properties] and [Sessions: Session Operations].

#### Refresh a Session

To refresh a session before it expires, you must know the ID of the session:

```javascript
const refreshedSession = await client.sessionApi.refreshSession({
  sessionId: currentSession.id
});
console.log('Refreshed session expiration:', refreshedSession.expiresAt);
```

#### End a Session

To end a session, you must know the ID of the session:

```javascript
await client.sessionApi.revokeSession({
  sessionId: session.id
});
console.log('Session ended');
```

#### End all Sessions for a User

To end all sessions for a user, you must know the ID of the user:

```javascript
await client.userApi.revokeUserSessions({
  userId: user.id
});
console.log('All user sessions have ended');
```

### System Log

#### Get logs

To query logs, first get a collection and specify your query filter:

```javascript
const collection = await client.systemLogApi.listLogEvents({
  since: new Date('2018-01-25T00:00:00Z') 
});
```

Please refer to the [System Log API] Documentation for a full query reference.

If you wish to paginate the entire result set until there are no more records, simply use `each()` to paginate the collection.  The promise will resolve once the first empty page is reached.

If you wish to continue polling the collection for new results as they arrive, then start a [subscription](#subscribeconfig):

```javascript
const collection = await client.systemLogApi.listLogEvents({
  since: new Date('2018-01-24T23:00:00Z')
});

const subscription = collection.subscribe({
  interval: 5000, // Time in ms before fetching new logs when all existing logs are read
  next(logItem) {
    // Do something with the logItem
  },
  error(err) {
    // HTTP/Network Request errors are given here
    // The subscription will continue unless you call subscription.unsubscribe()
  },
  complete() {
    // Triggered when subscription.unsubscribe() is called
  }
});
```

### Call other API Endpoints

Not every API endpoint is represented by a method in this library. You can call any Okta management API endpoint using this generic syntax:

```javascript
const okta = require('@okta/okta-sdk-nodejs');

// Assumes configuration is loaded via yaml or environment variables
const client = new okta.Client();

// https://developer.okta.com/docs/reference/api/apps/#preview-saml-metadata-for-application
const applicationId = '{your custom SAML app id}';
const url = `${client.baseUrl}/api/v1/apps/${applicationId}/sso/saml/metadata`;
const request = {
  method: 'get',
  headers: {
    'Accept': 'application/xml',
    'Content-Type': 'application/json',
  }
};

client.http.http(url, request)
  .then(res => res.text())
  .then(text => {
    console.log(text);
  })
  .catch(err => {
    console.error(err);
  });
```

### Collection

When the client is used to fetch collections of resources, a collection instance is returned.  The collection encapsulates the work of paginating the API to fetch all resources in the collection (see [Pagination]).  The collection provides the `each()` method for iterating over the collection, as described below.

#### `each()`

Allows you to visit every item in the collection, while optionally doing work at each item.  All calls to `each()` will return a promise that is resolved when all items have been visited or rejected if you return a rejected promise from your iterator.  Iteration can be stopped by rejecting a returned promise, or by returning `false` (will not cause a promise rejection).  The following examples show you the various use-cases.

##### Serial or Parallel Synchronous Work

If no value is returned, `each()` will continue to the next item:

```javascript
const collection = await client.userApi.listUsers();
await collection.each(user => {
  console.log(user);
  logUserToRemoteSystem(user);
});
console.log('All users have been visited');
```

##### Serial Asynchronous Work

Returning a promise will pause the iterator until the promise is resolved:

```javascript
const collection = await client.userApi.listUsers();
await collection.each(user => {
  return new Promise((resolve, reject) => {
    // do work, then resolve or reject the promise
  });
});
```

##### Ending Iteration

Returning `false` will end iteration:

```javascript
const collection = await client.userApi.listUsers();
await collection.each(user => {
  console.log(user);
  return false;
});
console.log('Only one user was visited');
```

Returning `false` in a promise will also end iteration:

```javascript
const collection = await client.userApi.listUsers();
await collection.each(user => {
  console.log(user);
  return Promise.resolve(false);
});
console.log('Only one user was visited');
```

Rejecting a promise will end iteration with an error:

```javascript
const collection = await client.userApi.listUsers();
collection.each(user => {
  console.log(user);
  return Promise.reject('foo error');
})
.catch(err => {
  console.log(err); // 'foo error'
});
```

#### `subscribe(config)`

A subscription allows you to continue paginating a collection until new items are available, if the REST API supports it for the collection.  The only supported collection is the [System Log API] at this time.

A subscription fetches pages until the first empty page is reached. From that point, it fetches a new page at an interval in milliseconds defined by config (`{ interval: 5000 }`).  This interval defaults to 5000 milliseconds.  A subscription object is returned.  To terminate polling, call `unsubscribe()` on the subscription object.

Depending on the polling interval you choose, you may run into rate limiting exceptions.  In that case you should enable our rate limiting retry strategy, see [Rate Limiting](#rate-limiting).

##### Simple subscription example
```javascript
const subscription = collection.subscribe({
  interval: 5000,
  next(item) {
    console.log(item);
  },
  error(err) {
    // handle error
  }
});

// In the future, unsubscribe when you want to stop polling:
subscription.unsubscribe()
```

## Configuration Reference

There are several ways to provide configuration to the client constructor.  When creating a new client, the following locations are searched in order, in a last-one-wins fashion:

1. An `okta.yaml` file in  `~/.okta`.
1. An `okta.yaml` file in the current working directory of the node process.
1. Environment variables
1. Properties passed to the client constructor

As such, you can create a client without passing a configuration option, e.g. `new okta.Client()`, so long as you have provided the configuration in one of the other locations.

If providing a yaml file, the structure should be the same as the properties that you pass to the client constructor:

```yaml
okta:
  client:
    orgUrl: 'https://dev-1234.oktapreview.com/'
    token: 'xYzabc'
```

If providing environment variables, the configuration names are flattened and delimited with underscores:

```sh
OKTA_CLIENT_ORGURL=https://dev-1234.oktapreview.com/
OKTA_CLIENT_TOKEN=xYzabc
```

## Caching

To speed up your service, we enable caching by default to prevent unnecessary requests. Both caching storage and caching strategy are configurable. You'll want to configure your cache when your service is distributed across more than one server.

### Storage

By default, the SDK uses an in-memory cache, `MemoryStore`.

By default, expired keys are only removed on attempted retrieval. If a key is never retrieved, it will remain in the cache, which may grow until it hits maximum size.

To prevent this behavior, and instead remove expired values from memory proactively, set a value for `expirationPoll` and the `MemoryStore` will periodically scan the *entire* store in memory to remove expired keys.

```javascript
const okta = require('@okta/okta-sdk-nodejs');
const MemoryStore = okta.MemoryStore;

const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/',
  token: 'xYzabc', // Obtained from Developer Dashboard
  cacheStore: new MemoryStore({
    keyLimit: 100000,
    expirationPoll: true
  })
});
```

`MemoryStore` configuration options:

* `keyLimit` - Max number of keys stored (default is 100000). The oldest keys are deleted as new keys are set.
* `expirationPoll` - The time, in milliseconds, between memory scans. If the value is `true`, a value of 15000 is used. (default is `false`, no scanning)


#### Custom Storage

It's easy to build your own cache store, just conform to this interface:

```javascript
class CustomStore {
  async get(stringKey) {}
  async set(stringKey, stringValue) {}
  async delete(stringKey) {}
}
```

### Middleware

The default caching middleware caches any resource that has a `self` link, and invalidates the cache for any non-GET requests affecting that resource. If you'd like to disable caching entirely, set `cacheMiddleware` to `null`:

```javascript
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/',
  token: 'xYzabc', // Obtained from Developer Dashboard
  cacheMiddleware: null
});
```

#### Custom Middleware

Custom middleware provides very granular control to manage caching. Middleware is simply a function that accepts a context and a callback:

```javascript
async function customMiddleware(ctx, next) {
  // do something before the request
  await next();
  // do something after the response
}

const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/',
  token: 'xYzabc', // Obtained from Developer Dashboard
  cacheMiddleware: customMiddleware
});
```

The context contains:
* `req` - An object containing details about the request:
  * `url`
  * `method`
  * `body`
* `res` - An object containing details about the response. This is the [same interface as a response you'd receive from `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Response).
* `isCollection` - Whether the response is expected to be a collection.
* `resources` - An array of resource URIs affected by the request.
* `cacheStore` - A reference to the cache store.

If `res` is attached to the context before `next` is called, then a request will not be made. In order to attach a `res`, do the following:

```javascript
const OK = 200;
async function customMiddleware(ctx, next) {
  const text = 'someText';
  ctx.res = {
    status: OK,
    text() { return Promise.resolve(text); }
  };
  await next(); // will skip external request
}
```

> Note: default cache middleware implementation does not cache collections requests as there is no one-size-fits-all solution for keeping track of modified/deleted items within collections. Developers should provide their own cache middleware implementation for collection caching.

## Rate Limiting

The Okta API will return 429 responses if too many requests are made within a given time. Please see [Rate Limiting at Okta] for a complete list of which endpoints are rate limited.  When a 429 error is received, the `X-Rate-Limit-Reset` header will tell you the time at which you can retry. This section discusses  methods for handling rate limiting with this SDK.

### Built-In Retry

You can configure your client to use the default request executor if you wish to automatically retry on 429 errors, please the [Default Request Executor](#default-request-executor) section.

> Note: in the next major version the default request executor will be automatically added to the client.

### Manual Retry

If you wish to manually retry the request, you can do so by reading the `X-Rate-Limit-Reset` header on the 429 response.  This will tell you the time at which you can retry.  Because this is an absolute time value, we recommend calculating the wait time by using the `Date` header on the response, as it is in sync with the API servers, whereas your local clock may not be.  We also recommend adding 1 second to ensure that you will be retrying after the window has expired (there may be a sub-second relative time skew between the `X-Rate-Limit-Reset` and `Date` headers).

#### Header parsing example

This example shows you how to determine how long you should wait before retrying the request. You then must decide how many times you would like to retry, and how you would like to call the client method again (not shown):

```javascript
client.userApi.createUser()
  .catch(err => {
    if (err.status == 429) {
      const retryEpochMs = parseInt(err.headers.get('x-rate-limit-reset'), 10) * 1000;
      const retryDate = new Date(retryEpochMs);
      const nowDate = new Date(err.headers.get('date'));
      const delayMs = retryDate.getTime() - nowDate.getTime() + 1000;
      // Wait until delayMs has passed before retrying the request
    }
  });
```

## Request Executor

This SDK uses the concept of a request executor, the [RequestExecutor] class, which is a base class that is responsible for making HTTP requests to the API and fulfilling the responses for the client. This class is a simple proxy to the [isomorphic-fetch] library.

In addition to the base [RequestExecutor], the SDK ships with a "default" request executor, [DefaultRequestExecutor], which is used by default and extends the base with 429 retry logic.

You can create your own executor or extend one of ours, which allows you to define global logic for all HTTP requests made by this library.  Please see the [Building a Custom Request Executor](#building-a-custom-request-executor) section for more information.

### Default Request Executor

See [DefaultRequestExecutor] for the class code.

The default executor extends the [base executor](#base-request-executor) and will automatically retry requests if a 429 error is returned.  Using these configuration options, you can configure your retry tolerance for your specific use case:

* **`maxRetries`** - The number of times to retry, defaults to 2.  Set to 0 if you do not want to limit the number of retries.
* **`requestTimeout`** - How long to wait before giving up on the request, regardless of how many retries are made.  Defined in milliseconds and defaults to 0, which disables the request timeout.

```javascript
const customDefaultRequestExecutor = new okta.DefaultRequestExecutor({
  maxRetries: 2,
  requestTimeout: 0 // Specify in milliseconds if needed
})

const client = new okta.Client({
  orgUrl: 'https://dev-1234.okta.com/',
  token: 'xYzabc',    // Obtained from Developer Dashboard
  requestExecutor: customDefaultRequestExecutor
});
```

Because the rate limits are different for different endpoints you may need to change the default configuration, or create multiple clients with different executor configurations.

To help with debugging and logging, the default executor will emit a `backoff` event when a retry request has been scheduled, and `resume` event when that request begins:

```javascript
defaultRequestExecutor.on('backoff', (request, response, requestId, delayMs) => {
  console.log(`Backoff ${delayMs} ${requestId}, ${request.url}`);
});

defaultRequestExecutor.on('resume', (request, requestId) => {
  console.log(`Resume ${requestId} ${request.url}`);
});
```

The `requestId` and `delayMs` values are pulled from the request and passed as parameters for convenience.

### Base Request Executor

See [RequestExecutor] for the class code.

The base request executor does nothing more than delegate the request to the [isomorphic-fetch] library, and emit the `request` and `response` events.  This class has no configuration.  The client will use this executor if none is provided.  In the next major version you will need to explicitly pass this executor if you wish to opt-out of the default executor:

```javascript
const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/',
  token: 'xYzabc',    // Obtained from Developer Dashboard
  requestExecutor: new okta.RequestExecutor()
});
```

The base executor also emits `request` and `response` events, these can be useful for debugging and request logging:

```javascript
const client = new okta.Client({
  // uses the base executor by default
});

client.requestExecutor.on('request', (request) => {
  console.log(`Request ${request.url}`);
});

client.requestExecutor.on('response', (response) => {
  console.log(`Response ${response.status}`);
});
```

### Building a Custom Request Executor

There are two ways you can design your own executor:

- Extend one of our executors.
- Create a class that implements the `fetch` method in the same way as [RequestExecutor].

As an example, let's say you want to use our default 429 retry behavior, but you want to add some logging to understand how long requests are taking, including retry time. To do this, you can extend [DefaultRequestExecutor], then re-implement the `fetch()` method with your custom logic, while still delegating the actual call to DefaultRequestExecutor:

```javascript
class DefaultExecutorWithLogging extends okta.DefaultRequestExecutor {
  fetch(request) {
    const start = new Date();
    console.log(`Begin request for ${request.url}`);
    return super.fetch(request).then(response => {
      const timeMs = new Date() - start;
      console.log(`Request complete for ${request.url} in ${timeMs}ms`);
      return response;
    });
  }
}

const client = new okta.Client({
  requestExecutor: new DefaultExecutorWithLogging()
})
```

## Proxy

If you need to use a proxy, you can configure it with `httpsProxy` property. 
```javascript
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/',
  token: 'xYzabc', // Obtained from Developer Dashboard
  httpsProxy: 'http://proxy.example.net:8080/'
});
```

When the proxy configuration is not overridden as shown above, Okta client relies on the proxy configuration defined by standard environment variable `https_proxy` or its uppercase variant `HTTPS_PROXY`.

To use HTTP Basic Auth with your proxy, use the `http://user:password@host/` syntax.

## User Agent

If you need to specify a User-Agent for the client requests, you can configure it with `userAgent` property.
`userAgent` property will be prepended to the user agent string created by SDK.
```javascript
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/',
  token: 'xYzabc', // Obtained from Developer Dashboard
  userAgent: 'example/1.0'
});
```

## TypeScript usage

### 4.5.x

```typescript
import { Client } from '@okta/okta-sdk-nodejs'
import { LogEvent } from '@okta/okta-sdk-nodejs/src/types/models/LogEvent';
const client = new Client({
  orgUrl:'https://dev-org.okta.com',
  token: 'apiToken',
});
const logEvents = client.getLogs({
  since: '2021-03-11'
});
const actors: Set<string> = new Set();
logEvents.each((entry: LogEvent) => {
  actors.add(entry.actor.displayName);
}).then(() => {
  // res.send(JSON.stringify([...actors], null, 4));
};)
```

Providing request body parameters:
```typescript
import { Application, ApplicationOptions } from '@okta/okta-sdk-nodejs/src/types/models/Application';
import { Client } from '@okta/okta-sdk-nodejs'
import { LogEvent } from '@okta/okta-sdk-nodejs/src/types/models/LogEvent';
const client = new Client({
  orgUrl:'https://dev-org.okta.com',
  token: 'apiToken',
});
const bookmarkAppOptions: ApplicationOptions = {
  "name": "bookmark",
  "label": "Sample Bookmark App",
  "signOnMode": "BOOKMARK",
  "settings": {
    "app": {
      "requestIntegration": false,
      "url": "https://example.com/bookmark.htm"
    }
  }
};
client.createApplication(bookmarkAppOptions).then((createdApp: Application) => {
  console.log(createdApp);
});
```

### >=4.6.x

Models can be imported from library root:

```typescript
import { Client, LogEvent } from '@okta/okta-sdk-nodejs';
```

### 5.1.0

`client.createApplication` and `client.getApplication` methods can be parameterized with application type:

```typescript
const oidcApp: OpenIdConnectApplication = client.getApplication<OpenIdConnectApplication>(appId);
```
or
```typescript
const oidcApp: OpenIdConnectApplication = client.getApplication(appId);
```

```typescript
const applicationOptions: ApplicationOptions = {
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
const application: BookmarkApplication = client.createApplication(applicationOptions);
```

### 7.x.x

API methods should be called from corresponding API object of `client`. 
Params should be passed as a single object. 

See [migration guide](#from-6x-to-70)

```typescript
const application: BookmarkApplication = {
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
const createdApplication: BookmarkApplication = await client.applicationApi.createApplication({
  application
});

const oidcApp: OpenIdConnectApplication = await client.applicationApi.getApplication({ appId });
```

## Known Issues

Default cache middleware is affected by stream internal buffer size limitation in Node - see [#56](https://github.com/okta/okta-sdk-nodejs/issues/56) and [node-fetch](https://github.com/node-fetch/node-fetch#custom-highwatermark) for more details.
The recommended solution is to provide custom cache middleware implementation.
Alternatively, users can pass custom `highWaterMark` parameter to `node-fetch` by specifying parameter `defaultCacheMiddlewareResponseBufferSize` in the Client config:

```
const client: Client = new Client({
  orgUrl: 'https://orgname.okta.com',
  token: 'apiToken',
  defaultCacheMiddlewareResponseBufferSize: sizeInBytes
});
```

`defaultCacheMiddlewareResponseBufferSize` is ignored in case non-default cache middleware is provided.
> Note: this workaround should be used with caution as it relies on `node-fetch`'s internal detail which can change its implementation.

## Migrating between versions

### From 6.x to 7.0

#### Breaking changes

 - Methods are invoked on scoped clients
 - Method params are passed as a single object
 - Models no longer have CRUD methods
 - Methods which return `Collection` become async
 - Enums are replaced with union types
 - Model properties are optional

```diff
- await client.getUser('ausmvdt5xg8wRVI1d0g3')
+ await client.userApi.getUser({ userId: 'ausmvdt5xg8wRVI1d0g3' })
```

```diff
- await user.deactivate()
+ await client.userApi.deactivateUser({ userId: user.id })
```

### From 5.x to 6.0

#### Breaking changes

Enum types from the spec are accounted for: repspective JS models are converted to enum-like modules.

Following Client methods signatures have changed:
 - `listPolicies` returns `Promise<Policy>`
 - `activateNetworkZone` returns `Promise<NetworkZone>`
 - `deactivateNetworkZone` returns `Promise<NetworkZone>`
 - `listGroups` no longer accepts `filter` parameter trhough `queryParameters`

### From 4.x to 5.0

The version 5.0 of this SDK dropped support for Node 10, which is EOL (End-of-Life) since 2021-04-30. Current supported minimal Node version is 12.0.0.

#### Breaking changes

Following Client methods signatures have changed:
 - `createAuthorizationServerPolicy`: added `authorizationServerPolicy: AuthorizationServerPolicyOptions` parameter
 - `listAuthorizationServerPolicies`: returns `Collection<AuthorizationServerPolicy>`
 - `getAuthorizationServerPolicy`: returns `Promise<AuthorizationServerPolicy>`
 - `updateAuthorizationServerPolicy`: second parameter type changed to `AuthorizationServerPolicyOptions`, returns `Promise<AuthorizationServerPolicy>`
 - `listPolicies` returns `Promise<AuthorizationServerPolicy>`

Following models' method signatures have changed:
- `AuthorizationServer`

 Change details are listed in [CHANGELOG.md](CHANGELOG.md#500)

All required method parameters in Client are now checked at runtime in JS code.

### From 3.x to 4.0

The version 4.0 of this SDK dropped support for Node 8, which is EOL (End-of-Life) since 2019-12-31. Current supported minimum Node version is 10.0.0.

This version 4.0 release also updated APIs latest `@okta/openapi` (v2.0.0) that includes added, changed and deprecated factories/models/client methods. Change details are listed in [CHANGELOG.md](CHANGELOG.md#400). For each change item:

- `Add` stands for newly added factories/models/client methods.
- `Change` (**breaking changes**) stands for renamed factories/models/client methods.
- `Remove` (**breaking changes**) stands for deprecated factories/models/client methods.

#### Main breaking changes

- Renamed `Factor` related factories/models/client methods to `UserFactor`
- Renamed `client.sessionApi.endAllUserSessions` to `client.sessionApi.clearUserSessions`
- Model and Client methods change for `User` related operations
- Model and Client methods change for `Rule` related operations

## Building the SDK

- Obtain [Open API v3](https://spec.openapis.org/oas/v3.0.3) combined spec (`management.yaml`) and place it under `spec` dir
- run `yarn build:openapi`
- run `yarn build`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) if you would like to propose changes to this library.

[Sessions: Create Session with Session Token]: https://developer.okta.com/docs/api/resources/sessions#create-session-with-session-token
[Sessions: Session Properties]: https://developer.okta.com/docs/api/resources/sessions#session-properties
[Sessions: Session Operations]: https://developer.okta.com/docs/api/resources/sessions#session-operations
[Applications]: https://developer.okta.com/docs/api/resources/apps/
[Applications: Application User Profile]: https://developer.okta.com/docs/api/resources/apps/#application-user-profile-object
[Applications: Add Application]: https://developer.okta.com/docs/api/resources/apps/#add-application
[Applications: User Operations]:https://developer.okta.com/docs/api/resources/apps/#application-user-operations
[Basic Authentication Application]: https://developer.okta.com/docs/api/resources/apps/#add-basic-authentication-application
[Client]: https://developer.okta.com/okta-sdk-nodejs/jsdocs/Client
[DefaultRequestExecutor]: src/default-request-executor.js
[Groups: Add Group]: https://developer.okta.com/docs/api/resources/groups.html#add-group
[isomorphic-fetch]: https://github.com/matthew-andrews/isomorphic-fetch
[Okta Developer Forum]: https://devforum.okta.com/
[Okta Platform API]: https://developer.okta.com/docs/api/getting_started/api_test_client
[Pagination]: https://developer.okta.com/docs/api/getting_started/design_principles.html#pagination
[Rate Limiting at Okta]: https://developer.okta.com/docs/api/getting_started/rate-limits
[RequestExecutor]: src/request-executor.js
[System Log API]: https://developer.okta.com/docs/api/resources/system_log
[Users API Reference]: https://developer.okta.com/docs/api/resources/users
[Users: Create User]: https://developer.okta.com/docs/api/resources/users#create-user
[Users: Get User]: https://developer.okta.com/docs/api/resources/users#get-user
[Users: Lifecycle Operations]: https://developer.okta.com/docs/api/resources/users#lifecycle-operations
[Users: List Users]: https://developer.okta.com/docs/api/resources/users#list-users
[Users: Update User]: https://developer.okta.com/docs/api/resources/users#update-user
[Okta NodeJS Management SDK JSDoc Site]: https://developer.okta.com/okta-sdk-nodejs/jsdocs/

[devforum]: https://devforum.okta.com/
[nodejsdocs]: https://developer.okta.com/okta-sdk-nodejs/jsdocs/
[github-issues]: https://github.com/okta/okta-sdk-nodejs/issues
[github-releases]: https://github.com/okta/okta-sdk-nodejs/releases


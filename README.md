# okta-sdk-nodejs

Node.js API Client for the [Okta Platform API].

Requires Node.js version 4.8.3 or higher.

## :warning: :construction: Alpha Preview :construction: :warning:

This library is under development and is currently a 0.x version series.  Breaking changes will be introduced as minor version bumps in the 0.x range.  Some of the API is not yet expressed in this library, please refer to the JsDoc for a complete list of classes and methods: [Okta NodeJS Management SDK JSDoc Site].

Need help? Contact [developers@okta.com](mailto:developers@okta.com) or use the [Okta Developer Forum].

## Installation

```sh
npm install @okta/okta-sdk-nodejs
```

## Usage

All usage of this SDK begins with the creation of a client, the client handles the authentication and communication with the Okta API.  To create a client, you need to provide it the URL of your Okta Org, and an API Token that you have provisioned for yourself (this can be done by visiting API -> Tokens in your Okta Developer Dashboard):

```javascript
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/'
  token: 'xYzabc'    // Obtained from Developer Dashboard
});
```

It is also possible to provide configuration through environment variables or YAML files.  Please see [Configuration](#configuration) for examples.

All interaction with the [Okta Platform API] is done through client methods.  Some examples are below, but for a full list of methods please refer to the JsDoc page for the client:

https://developer.okta.com/okta-sdk-nodejs/jsdocs/Client.html

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
* [Collection](#collection)
  * [each](#each)
  * [subscribe](#subscribeconfig)
* [Configuration](#configuration)
* [Caching](#caching)

### Users

#### Create a User

The [Users: Create User] API can be used to create users.  The most basic type of user is one that has an email address and a password to login with, and can be created with the `client.createUser()` method:

```javascript
const newUser = {
  profile: {
    firstName: 'Foo',
    lastName: 'Bar',
    email: 'foo@example.com',
    login: 'foo@example.com',
  },
  credentials: {
    password : {
      value: 'PasswordAbc123'
    }
  }
};

client.createUser(newUser)
.then(user => {
  console.log('Created user', user);
});
```

#### Get a User

The [Users: Get User] API can be used to fetch a user by id or login (as defined on their `profile.login` property), and is wrapped by `client.getUser(:id|:login)`:

```javascript
client.getUser('ausmvdt5xg8wRVI1d0g3')
.then(user => {
  console.log(user);
});

client.getUser('foo@bar.com')
.then(user => {
  console.log(user);
});
```

#### Update a User

Once you have a user instance, you can modify it and then call the `update()` method to persist those changes to the API.  This uses the [Users: Update User] API:

```javascript
user.profile.nickName = 'rob';
user.update()
.then(() => console.log('User nickname change has been saved'));
```

#### Delete a User

Before deleting an Okta user, they must first be deactivated.  Both operations are done with the [Users: Lifecycle Operations] API.  We can chain the `deactivate()` and `delete` operations on the user instance to achieve both calls:

```javascript
user.deactivate()
.then(() => console.log('User has been deactivated'))
.then(() => user.delete())
.then(() => console.log('User has been deleted'));
```

#### List All Org Users

The client can be used to fetch collections of resources, in this example we'll use the [Users: List Users] API.  When fetching collections, you can use the `each()` method to iterate through the collection.  For more information see [Collection](#collection).

```javascript
const orgUsersCollection = client.listUsers();

orgUsersCollection.each(user => {
  console.log(user);
})
.then(() => console.log('All users have been listed'));
```

For more information about this API see [Users: Get User].

#### Search for Users

The [Users: List Users] API provides three ways to search for users, "q", "filter", or "search", and all of these approaches can be achieved by passing them as query parameters to the `client.listUser()` method.  The library will URL encode the values for you.

```javascript
client.listUsers({
  q: 'Robert'
}).each(user => {
  console.log('User matches query: ', user);
});

client.listUsers({
  search: 'profile.nickName eq "abc 1234"'
}).each(user => {
  console.log('User matches search:', user);
});

client.listUsers({
  filter: 'lastUpdated gt "2017-06-05T23:00:00.000Z"'
}).each(user => {
  console.log('User matches filter:', user);
});
```

## Groups

#### Create a Group

The [Groups: Add Group] API allows you to create Groups, and this is wrapped by `client.createGroup(:newGroup)`:

```javascript
const newGroup = {
  profile: {
    name: 'Admin Users Group'
  }
};

client.createGroup(newGroup)
.then(group => {
  console.log('Created group', group);
});
```

#### Assign a User to a Group

With a user and group instance, you can use the `addToGroup(:groupId)` method of the user to add the user to the known group:

```javascript
user.addToGroup(group.id)
.then(() => console.log('User has been added to group'));
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
      url: 'https://example.com/auth.htm'
      authURL: 'https://example.com/login.html',
    }
  }
};

client.createApplication(application)
.then(application => {
  console.log('Created application:', application);
});
```

#### Assign a User to an Application

To assign a user to an application, you must know the ID of the application and the user:

```javascript
client.assignUserToApplication(createdApplication.id, {
  id: createdUser.id
})
.then(appUser => {
  console.log('Assigned user to app, app user instance:' appUser);
});
```

An App User is created, which is a new user instance that is specific to this application.  An App User allows you define an application-specific profile for that user.  For more information please see [Applications: User Operations] and [Applications: Application User Profile].

#### Assign a Group to an Application

To assign a group to an application, you must know the ID of the application and the group:

```javascript
client.createApplicationGroupAssignment(createdApplication.id, createdGroup.id);
```

### Sessions

#### Create a Session

This is a rarely used method. See [Sessions: Create Session with Session Token] for the common ways to create a session. To use this method, you must have a sessionToken:

```javascript
client.createSession({
  sessionToken: 'your session token'
})
.then(session => {
  console.log('Session details:' session);
});
```

#### Get a Session

To retrieve details about a session, you must know the ID of the session:

```javascript
client.getSession(session.id)
.then(session => {
  console.log('Session details:' session);
});
```

These details include when and how the user authenticated and the session expiration. For more information see [Sessions: Session Properties] and [Sessions: Session Operations].

#### Refresh a Session

To refresh a session before it expires, you must know the ID of the session:

```javascript
client.refreshSession(session.id)
.then(session => {
  console.log('Refreshed session expiration:', session.expiresAt);
});
```

#### End a Session

To end a session, you must know the ID of the session:

```javascript
client.endSession(session.id)
.then(() => {
  console.log('Session ended');
});
```

#### End all Sessions for a User

To end all sessions for a user, you must know the ID of the user:

```javascript
client.endAllUserSessions(user.id)
.then(() => {
  console.log('All user sessions have ended');
});
```

### System Log

#### Get logs

To query logs, first get a collection and specify your query filter:

```javascript
const collection = client.getLogs({ since: '2018-01-25T00:00:00Z' });
```

Please refer to the [System Log API Documentation][System Log API] for a full query reference.

If you wish to paginate the entire result set until there are no more records, simply use `each()` to paginate the collection.  The promise will resolve once the first empty page is reached.

If you wish to continue polling the collection for new results as they arrive, then start a [subscription](#subscribeconfig):

```javascript
const collection = client.getLogs({ since: '2018-01-24T23:00:00Z' });

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

## Collection

When the client is used to fetch collections of resources, a collection instance is returned.  The collection encapsulates the work of paginating the API to fetch all resources in the collection (see [Pagination]).  The collection provides the `each()` method for iterating over the collection, as described below.

### `each()`

Allows you to visit every item in the collection, while optionally doing work at each item.  All calls to `each()` will return a promise that is resolved when all items have been visited or rejected if you return a rejected promise from your iterator.  Iteration can be stopped by rejecting a returned promise, or by returning `false` (will not cause a promise rejection).  The following examples show you the various use-cases.

#### Serial or Parallel Synchronous Work

If no value is returned, each() will continue to the next item:

```javascript
client.listUsers().each(user => {
  console.log(user);
  logUserToRemoteSystem(user);
})
.then(() => {
  console.log('All users have been visited');
});
```

#### Serial Asynchronous Work

Returning a promise will pause the iterator until the promise is resolved:

```javascript
client.listUsers().each(user => {
  return new Promise((resolve, reject) => {
    // do work, then resolve or reject the promise
  })
});
```

#### Ending Iteration

Returning false will end iteration:

```javascript
client.listUsers().each(user => {
  console.log(user);
  return false;
})
.then(() => {
  console.log('Only one user was visited');
});
```

Returning false in a promise will also end iteration:

```javascript
client.listUsers().each((user) => {
  console.log(user);
  return Promise.resolve(false);
})
.then(() => {
  console.log('Only one user was visited');
});
```

Rejecting a promise will end iteration with an error:

```javascript
return client.listUsers().each((user) => {
  console.log(user);
  return Promise.reject('foo error');
}).catch((err)=>{
  console.log(err); // 'foo error'
});
```

### `subscribe(config)`

A subscription allows you to continue paginating a collection until new items are available, if the REST API supports it for the collection.  The only supported collection is the [System Log API][] at this time.

A subscription fetches pages until the first empty page is reached. From that point, it fetches a new page at an interval in milliseconds defined by config (`{ interval: 5000 }`).  This interval defaults to 5000 milliseconds.  A subscription object is returned.  To terminate polling, call `unsubscribe()` on the subscription object.

#### Simple subscription

```javascript
const subscription = collection.subscribe({
  next(item) {
    console.log('Process item');
  },
  error(err) {
    console.log('Handle error');
    console.log('Call subscription.unsubscribe() to terminate');
  }
});
```

#### Advanced subscription

Rate-limiting errors are common with subscriptions. Here's one way to handle them:

```javascript
const subscription = collection.subscribe({
  interval: 5000, // Time in ms before fetching new logs when all existing logs are read
  next(item) {
    console.log('Process item');
  },
  error(err) {
    if (err.status == 429) {
      const retryEpochMs = parseInt(err.headers.get('x-rate-limit-reset'), 10) * 1000;
      const retryDate = new Date(retryEpochMs);
      const nowDate = new Date(err.headers.get('date'));
      const delayMs = retryDate.getTime() - nowDate.getTime();

      console.log('backoff', retryDate, now, delayMs)
      return new Promise(resolve => {
        setTimeout(resolve, delayMs);
      });
    }

    if (err.status >= 500) {
      subscription.unsubscribe();
    }
  },
  complete() {
    console.log('subscription.unsubscribe() was called');
    console.log('next() will no longer be triggered');
  }
});
```

## Configuration

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

By default, the SDK uses an in-memory cache. Here's how to configure that cache:

```javascript
const okta = require('@okta/okta-sdk-nodejs');
const MemoryStore = require('@okta/okta-sdk-nodejs/src/memory-store');

const client = new okta.Client({
  orgUrl: 'https://dev-1234.oktapreview.com/'
  token: 'xYzabc', // Obtained from Developer Dashboard
  cacheStore: new MemoryStore({
    keyLimit: 100000,
    expirationPoll: 15000
  })
});
```

Configuration options:

* `keyLimit` - Max number of keys stored (default is 100000). The oldest keys are deleted as new keys are set.
* `expirationPoll` - Time in ms to purge expired keys (default is 15000). Expired keys are usually removed on attempted retrieval. If a key isn't retrieved, it will remain in the cache forever. To prevent this, we periodically scan the entire store to remove expired keys. If you'd like to remove this poll, set it to `null`.

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
  orgUrl: 'https://dev-1234.oktapreview.com/'
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
  orgUrl: 'https://dev-1234.oktapreview.com/'
  token: 'xYzabc', // Obtained from Developer Dashboard
  cacheMiddleware: customMiddleware
});
```

The context contains:
* `req` - An object containing details about the request:
  * `uri`
  * `method`
  * `body`
* `res` - An object containing details about the response. This is the [same interface as a response you'd receive from `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Response).
* `isCollection` - Whether the response is expected to be a collection.
* `resources` - An array of resource URIs affected by the request.
* `cacheStore` - A reference to the cache store

If `res` is attached to the context before `next` is called, then a request will not be made. In order to attach a `res`, do the following:

```javascript
async function customMiddleware(ctx, next) {
  const text = 'someText';
  ctx.res = {
    status: 200,
    text() { return Promise.resolve(text); }
  };
  await next(); // will skip external request
}
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) if you would like to propose changes to this library.

[Sessions: Create Session with Session Token]: https://developer.okta.com/docs/api/resources/sessions.html#create-session-with-session-token
[Sessions: Session Properties]: https://developer.okta.com/docs/api/resources/sessions.html#session-properties
[Sessions: Session Operations]: https://developer.okta.com/docs/api/resources/sessions.html#session-operations
[Applications]: https://developer.okta.com/docs/api/resources/apps.html
[Applications: Application User Profile]: https://developer.okta.com/docs/api/resources/apps.html#application-user-profile-object
[Applications: Add Application]: https://developer.okta.com/docs/api/resources/apps.html#add-application
[Applications: User Operations]:https://developer.okta.com/docs/api/resources/apps.html#application-user-operations
[Basic Authentication Application]: https://developer.okta.com/docs/api/resources/apps.html#add-basic-authentication-application
[Groups: Add Group]: https://developer.okta.com/docs/api/resources/groups.html#add-group
[Okta Developer Forum]: https://devforum.okta.com/
[Okta Platform API]: https://developer.okta.com/docs/api/getting_started/api_test_client.html
[Pagination]: https://developer.okta.com/docs/api/getting_started/design_principles.html#pagination
[System Log API]: https://developer.okta.com/docs/api/resources/system_log
[Users API Reference]: https://developer.okta.com/docs/api/resources/users.html
[Users: Create User]: https://developer.okta.com/docs/api/resources/users.html#create-user
[Users: Get User]: https://developer.okta.com/docs/api/resources/users.html#get-user
[Users: Lifecycle Operations]: https://developer.okta.com/docs/api/resources/users.html#lifecycle-operations
[Users: List Users]: https://developer.okta.com/docs/api/resources/users.html#list-users
[Users: Update User]: https://developer.okta.com/docs/api/resources/users.html#update-user
[Okta NodeJS Management SDK JSDoc Site]: https://developer.okta.com/okta-sdk-nodejs/jsdocs/

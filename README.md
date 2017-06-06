# okta-sdk-nodejs

Node.js API Client for the [Okta Platform API][Okta Platform API].

Requires Node.js version 4.8.3 or higher.

## :warning: :construction: Alpha Preview :construction: :warning:

This library is under development and is currently a 0.x version series.  Breaking changes will be introduced as minor version bumps in the 0.x range.  Some of the API is not yet expressed in this library, please use your IDE hints or view [src/api-client.js](src/api-client.js) to browse available methods.  We will eventually publish the JsDoc documentation on https://developer.okta.com.

## Installation

```sh
npm install @okta/okta-sdk-nodejs
```

## Usage

All usage of this SDK begins with the creation of a client, the client handles the authentication and communication with the Okta API.  To create a client, you need to provide it the URL of your Okta Org, and an API Token that you have provisioned for yourself (this can be done by visiting Admin -> Security -> API -> Tokens in your Okta Org):

```javascript
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL, // e.g. 'https://dev-1234.oktapreview.com/'
  token: process.env.OKTA_APICLIENT_TOKEN    // Obtained from Developer Dashboard, API section
});
```

## Examples

In the following sections we show you how to use your client to perform common operations with the Okta API.

* [Create a User](#create-a-user)
* [Get a User](#get-a-user)
* [Update a User](#update-a-user)
* [Delete a User](#delete-a-user)
* [List All Org Users](#list-all-org-users)
* [Search for Users](#search-for-users)
* [Create a Group](#create-a-group)
* [Assign a User to a Group](#assign-a-user-to-a-group)
* [Collections](#collections)
  * [each](#each)
  * [next](#next)

#### Create a User

The [Users: Create User][] API can be used to create users.  The most basic type of user is one that has an email address and a password to login with, and can be created with the `client.createUser()` method:

```javascript
// Create a new user with password login credentials in the org

const newUser = {
  'profile': {
    'firstName': 'Foo',
    'lastName': 'Bar',
    'email': 'foo@example.com',
    'email': 'foo@example.com',
  },
  'credentials': {
    'password' : {
      'value': 'PasswordAbc123'
    }
  }
};

client.createUser(newUser)
.then(user => {
  console.log('Created user', user);
});
```

#### Get a User

The `client.getUser(:id)` method can be used to fetch a user by id or login (as defined on their `profile.login` property):

```javascript

client.getUser(':id').then(user => {
  console.log(user);
});

client.getUser('foo@bar.com').then(user => {
  console.log(user);
});
```

#### Update a User

Once you have a user instance, you can modify it and then call the `update()` method to persist those changes to the API:

```javascript
user.profile.nickName = 'rob';
user.update().then(() => console.log('User nickname change has been saved'));
```

#### Delete a User

Before deleting an Okta user, they must first be deactivated.  This manages the lifecycle of the user and may notify connected systems about the event.  We can chain promises in this case to achieve both operations at once:

```javascript
user.deactivate()
.then(() => console.log('User has been deactivated'))
.then(() => user.delete())
.then(() => console.log('User has been deleted'));
```

#### List All Org Users

The client can be used to fetch collections of resources.  When fetching collections, you can use the `each()` and `next()` methods to iterate through the collection.  For more information see [Collections](#collections).

```javascript
const orgUsersCollection = client.listUsers();

orgUsersCollection.each(user => {
  console.log(user);
})
.then(() => console.log('All users have been listed'));
```

For more information about this API see [Users: Get User][].

#### Search for Users

The [Users: List Users][] API provides three ways to search for users, "q", "filter", or "search", and all of these approaches can be achieved by passing them as query parameters to the `client.listUser()` method.  The library will URL encode the values for you.

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

#### Create a Group

The [Groups: Add Group][] API allows to create Groups, and groups can be created directly from the client:

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
user.addToGroup(group.id).then(() => console.log('User has been added to group'));
```

## Collections
When the client is used to fetch collections of resources, a collection instance is returned.  The collection encapsulates the work of paginating the API (see [pagination][]) resource.  The collection provides two methods, `each()` and `next()`, as described below.

### `each()`

Allows you to visit every item in the collection, while optionally doing work at each item.  All calls to `each()` will return a promise that is resolved when all items have been visted. or rejected if you return a rejected promise from your iterator.  Iteration can be stopped by rejecting a retruned promise, or by returning `false` (will not cause a promise rejection).

#### Serial or Parallel Synchronous Work

If no value is returned, each() will continue to the next item:

```javascript
client.listUsers().each(user => {
  console.log(user);
  logUserToRemoteSystem(user);
}).then(() => {
  console.log('All users have been vistied');
});
```

#### Serial Asynchronous Work

Returning a promise will pause the iterator until the promise is resolved:

```javascript
client.listUsers().each(user => {
  return new Promise((resolve, reject) => {
    // do work, the resolve or reject the promise
  })
});
```

#### Ending Iteration

Returning false will end iteration:

```javascript
client.listUsers().each(user => {
  console.log(user);
  return false;
}).then(() => {
  console.log('Only one user was visited');
});
```

Returning false in a promise will also end iteration:

```javascript
client.listUsers().each(() => {
  return new Promise((resolve) => {
    console.log(user);
    resolve(false);
  });
}).then(() => {
  console.log('Only one user was visited');
});
```

Rejecting a promise will end iteration with an error:

```javascript
return client.listUsers().each(() => {
  return new Promise((resolve, reject) => {
    reject(null, 'foo error');
  });
}).catch((err)=>{
  console.log(err); // 'foo error'
});
```

### `next()`

Provides a generator-like interface that allows you to implement your own flow control on top of our pagination encapsulation.  Internally, we use `next()` to provide the `each()` function.

#### Visit all items in a collection:

```javascript
const collection = client.listUsers();

function iter(result) {
  console.log(result.value); // Log the user
  if (result.done) {
    console.log('Iteration Complete');
    return result.value;
  }
  return collection.next().then(iter);
}

collection.next().then(iter);
```



### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

[Groups: Add Group]: https://developer.okta.com/docs/api/resources/groups.html#add-group
[Okta Platform API]: https://developer.okta.com/docs/api/getting_started/api_test_client.html
[Users API Reference]: https://developer.okta.com/docs/api/resources/users.html
[Users: Create User]: https://developer.okta.com/docs/api/resources/users.html#create-user
[Users: Get User]: https://developer.okta.com/docs/api/resources/users.html#get-user
[Users: List Users]: https://developer.okta.com/docs/api/resources/users.html#list-users

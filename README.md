# okta-sdk-nodejs

Node.js API Client for the [Okta Platform API][Okta Platform API]

Requires Node.js version 4 or higher.

## :warning: :construction: Alpha Preview :construction: :warning:

This library is under development and is currently a 0.x version series.  Breaking changes will be introduced as minor version bumps in the 0.x range.  Some of the API is not yet expressed in this library, please use your IDE hints or view [src/api-client.js](src/api-client.js) to browse available methods.  We will eventually publish the JsDoc documentation on https://developr.okta.com

### Installation

```sh
npm install @okta/okta-sdk-nodejs
```

### Usage

The following sections shows you some common operations that can be completed with this library.

```javascript
const okta = require('okta-sdk-nodejs');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL, // e.g. 'https://dev-1234.oktapreview.com/'
  token: process.env.OKTA_APICLIENT_TOKEN    // Obtained from Developer Dashboard, API section
});

// Log all users in the org

client.listUsers().each(user => {
  console.log(user);
});

// Create a new user with password login credentials in the org

let createdUser;

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

client.createUser(newUser).then((user) => {
  console.log(user);
  createdUser = user;
});

// Create a Group

let createdGroup;

const newGroup = {
  profile: {
    name: 'Admin Users Group'
  }
};

return client.createGroup(newGroup).then((group) => {
  console.log(group);
  createdGroup = group;
});

// Add the user to that group

createdUser.addToGroup(createdGroup.id).then(() => {
  console.log('User has been added to group');
});

// Update a profile property for this user

createdUser.profile.nickName = 'rob';

createdUser.update().then(() => {
  console.log('User nickname change has been saved');
})

// Deactivate this user (must be done before deleting)

createdUser.deactivate().then(() => {
  console.log('User has been deactivated');
});

// Delete this user

createdUser.delete().then(() => {
  console.log('User has been deleted');
})

```
### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

[Okta Platform API]: https://developer.okta.com/docs/api/getting_started/api_test_client.html

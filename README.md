# okta-sdk-nodejs

Node.js API Client for the [Okta Platform API][Okta Platform API]

Requires Node.js version 4.8.3 or higher.

## :warning: :construction: Alpha Preview :construction: :warning:

This library is under development and is currently a 0.x version series.  Breaking changes will be introduced as minor version bumps in the 0.x range.  Some of the API is not yet expressed in this library, please use your IDE hints or view [src/api-client.js](src/api-client.js) to browse available methods.  We will eventually publish the JsDoc documentation on https://developer.okta.com.

### Installation

```sh
npm install @okta/okta-sdk-nodejs
```

### Usage

The following sections shows you some common operations that can be completed with this library.

```javascript
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_APICLIENT_ORGURL, // e.g. 'https://dev-1234.oktapreview.com/'
  token: process.env.OKTA_APICLIENT_TOKEN    // Obtained from Developer Dashboard, API section
});

// Log all users in the org
function logAllUsers() {
  return client.listUsers().each(user => {
    console.log(user);
  })
  .then(() => console.log('All users have been listed'));
}

// Create a new user with password login credentials in the org
function createUserWithPassword() {
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

  return client.createUser(newUser)
  .then(user => {
    console.log(user);
    return user;
  });
}

// Create a Group
function createGroup() {
  const newGroup = {
    profile: {
      name: 'Admin Users Group'
    }
  };

  return client.createGroup(newGroup)
  .then(group => {
    console.log(group);
    return group;
  });
}

// Add the user to that group
function addNewUserToGroup() {
  return createUserWithPassword()
  .then(user => createGroup()
    .then(group => user.addToGroup(group.id)))
  .then(() => console.log('User has been added to group'));
}

// Update a profile property for this user
function updateProfileProperty() {
  return createUserWithPassword()
  .then(user => {
    user.profile.nickName = 'rob';
    return user.update();
  })
  .then(() => console.log('User nickname change has been saved'));
}

// Deactivate  and delete this user 
function deactivateAndDeleteUser() {
  return createUserWithPassword()
  .then(user => {
    // deactivate must be done before deleting
    return user.deactivate()
    .then(() => console.log('User has been deactivated'))
    .then(() => user.delete())
    .then(() => console.log('User has been deleted'));
  })
}

```
### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

[Okta Platform API]: https://developer.okta.com/docs/api/getting_started/api_test_client.html

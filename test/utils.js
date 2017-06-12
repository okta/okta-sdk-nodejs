const assert = require('chai').assert;
const faker = require('faker');
const models = require('../src/models');
const okta = require('../');

const client = new okta.Client({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN
});

function getClient() {
  return client;
}

function userWithPassword() {
  const email = faker.internet.email(null, null, 'example.com');
  return {
    profile: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: email,
      login: email
    },
    credentials: {
      password : {
        value: 'PasswordAbc123'
      }
    }
  };
}

function delay(t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t);
  });
}

function assertUser(user, expectedUser) {
  assert.instanceOf(user, models.User);
  assert.equal(user.profile.firstName, expectedUser.profile.firstName);
  assert.equal(user.profile.lastName, expectedUser.profile.lastName);
  assert.equal(user.profile.email, expectedUser.profile.email);
  assert.equal(user.profile.login, expectedUser.profile.login);
}

function authenticateUser(userName, password) {
  const data = {
    'username': userName,
    'password': password,
  };

  let url = client.baseUrl + '/api/v1/authn';

  const request = client.http.postJson(url, {
    body: data
  });
  return request;
}

function getFakeUser(password, recoveryQuestion, recoveryAnswer) {
  const email = faker.internet.email(null, null, 'example.com');
  let fakeUser;
  // If user has passed only password, create a user with only password crendetial
  if (typeof password !== 'undefined' && (typeof recoveryQuestion === 'undefined' || typeof recoveryAnswer === 'undefined')) {
    fakeUser = {
      'profile': {
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'email': email,
        'login': email
      },
      'credentials': {
        'password': {'value': password}
      }
    };
  } else if (typeof recoveryQuestion === 'undefined' || typeof recoveryAnswer === 'undefined' || typeof password === 'undefined') {
    // If any of the parameters are not passed, create a user without credentials
    fakeUser = {
      'profile': {
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'email': email,
        'login': email
      }
    };
  } else { // If all parameters are passed, create a user with credentials
    fakeUser = {
      'profile': {
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'email': email,
        'login': email
      },
      'credentials': {
        'recovery_question': {
          'question': recoveryQuestion,
          'answer': recoveryAnswer
        },
        'password': {'value': password}
      }
    };
  }

  return fakeUser;
}

function assertGroup(group, expectedGroup) {
  assert.instanceOf(group, models.UserGroup);
  assert.equal(group.profile.name, expectedGroup.profile.name);
  assert.equal(group.type, 'OKTA_GROUP');
}

function isUserInGroup(groupUser, group, isPresent) {
  // Once the rule is activated, the user should be added to the group
  let foundUser = false;
  return group.listUsers().each(user => {
    if (user.id === groupUser.id) {
      foundUser = true;
    }
  }).then(() => {
    return assert.equal(foundUser, isPresent);
  });
}

module.exports = {
  userWithPassword: userWithPassword,
  delay: delay,
  getClient: getClient,
  assertUser: assertUser,
  authenticateUser: authenticateUser,
  getFakeUser: getFakeUser,
  assertGroup: assertGroup,
  isUserInGroup: isUserInGroup
};

const assert = require('chai').assert;
const faker = require('faker');
const models = require('../../src/models');
const okta = require('../../');

const client = new okta.ApiClient({
  orgUrl: process.env.OKTA_CLIENT_ORGURL,
  token: process.env.OKTA_CLIENT_TOKEN
});

exports.getClient = function () {
  return client;
};

exports.assertUser = function (user, expectedUser) {
  assert.instanceOf(expectedUser, models.User);
  assert.equal(expectedUser.profile.firstName, user.profile.firstName);
  assert.equal(expectedUser.profile.lastName, user.profile.lastName);
  assert.equal(expectedUser.profile.email, user.profile.email);
  assert.equal(expectedUser.profile.login, user.profile.login);
};

exports.authenticateUser = function (userName, password) {
  const data = {
    'username': userName,
    'password': password,
  };

  let url = client.baseUrl + '/api/v1/authn';

  const request = client.http.postJson(url, {
    body: data
  });
  return request;
};

exports.getFakeUser = function (password, recoveryQuestion, recoveryAnswer) {
  const email = faker.internet.email('Jane', 'Doe', 'example.com');
  let fakeUser;
  // If any of the parameters are not passed, create a user without credentials
  if (typeof recoveryQuestion === 'undefined' || typeof recoveryAnswer === 'undefined' || typeof password === 'undefined') {
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
};
const faker = require('faker');
const models = require('../src/models');
const expect = require('chai').expect;

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

function validateUser(user, expectedUser) {
  expect(user).to.be.an.instanceof(models.User);
  expect(user.profile.firstName).to.equal(expectedUser.profile.firstName);
  expect(user.profile.lastName).to.equal(expectedUser.profile.lastName);
  expect(user.profile.email).to.equal(expectedUser.profile.email);
  expect(user.profile.login).to.equal(expectedUser.profile.login);
}

function authenticateUser(userName, password, client) {
  const data = {
    username: userName,
    password: password,
  };

  let url = `${client.baseUrl}/api/v1/authn`;

  const request = client.http.postJson(url, {
    body: data
  });
  return request;
}

function getFakeUser(password, recoveryQuestion, recoveryAnswer) {
  const email = faker.internet.email(null, null, 'example.com');
  let fakeUser = {
    profile: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: email,
      login: email
    }
  };

  // If user has passed only password, create a user with only password credential
  if (typeof password !== 'undefined' && (typeof recoveryQuestion === 'undefined' || typeof recoveryAnswer === 'undefined')) {
    const credentials = {
      password: {value: password}
    };

    fakeUser.credentials = credentials;
  } else if (typeof recoveryQuestion !== 'undefined' && typeof recoveryAnswer !== 'undefined' && typeof password !== 'undefined') {
    // If all parameters are passed, create a user with password & recovery question credentials
    const credentials = {
      recovery_question: {
        question: recoveryQuestion,
        answer: recoveryAnswer
      },
      password: {value: password}
    };

    fakeUser.credentials = credentials;
  }
  return fakeUser;
}

function validateGroup(group, expectedGroup) {
  expect(group).to.be.an.instanceof(models.UserGroup);
  expect(group.profile.name).to.equal(expectedGroup.profile.name);
  expect(group.type).to.equal('OKTA_GROUP');
}

async function isUserInGroup(groupUser, group) {
  let userPresent = false;
  await group.listUsers().each(user => {
    if (user.id === groupUser.id) {
      userPresent = true;
    }
  });
  return userPresent;
}

async function deleteUser(user) {
  await user.deactivate();
  await user.delete();
}

async function isUserPresent(client, expectedUser, queryParameters) {
  let userPresent = false;
  await client.listUsers(queryParameters).each(user => {
    expect(user).to.be.an.instanceof(models.User);
    if (user.profile.login === expectedUser.profile.login) {
      userPresent = true;
      return false;
    }
  });
  return userPresent;
}

async function isGroupPresent(client, expectedGroup, queryParameters) {
  let groupPresent = false;
  await client.listGroups(queryParameters).each(group => {
    expect(group).to.be.an.instanceof(models.UserGroup);
    if (group.profile.name === expectedGroup.profile.name) {
      groupPresent = true;
      return false;
    }
  });
  return groupPresent;
}

module.exports = {
  userWithPassword: userWithPassword,
  delay: delay,
  validateUser: validateUser,
  authenticateUser: authenticateUser,
  getFakeUser: getFakeUser,
  validateGroup: validateGroup,
  isUserInGroup: isUserInGroup,
  deleteUser: deleteUser,
  isUserPresent: isUserPresent,
  isGroupPresent: isGroupPresent
};

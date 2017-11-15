const models = require('../src/models');
const expect = require('chai').expect;

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

function validateGroup(group, expectedGroup) {
  expect(group).to.be.an.instanceof(models.Group);
  expect(group.profile.name).to.equal(expectedGroup.profile.name);
  expect(group.type).to.equal('OKTA_GROUP');
}

async function isUserInGroup(groupUser, group) {
  let userPresent = false;
  await group.listUsers().each(user => {
    if (user.id === groupUser.id) {
      userPresent = true;
      return false;
    }
  });
  return userPresent;
}

async function waitTillUserInGroup(user, group, condition) {
  let userInGroup = await isUserInGroup(user, group);
  let timeOut = 0;
  while (userInGroup !== condition) {
    userInGroup = await isUserInGroup(user, group);
    if (userInGroup === condition) {
      return userInGroup;
    }

    await delay(1000);
    timeOut++;
    if (timeOut === 30) {
      break;
    }
  }
  return userInGroup;
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
    expect(group).to.be.an.instanceof(models.Group);
    if (group.profile.name === expectedGroup.profile.name) {
      groupPresent = true;
      return false;
    }
  });
  return groupPresent;
}

async function doesUserHaveRole(user, roleType) {
  let hasRole = false;
  await user.listRoles().each(role => {
    expect(role).to.be.an.instanceof(models.Role);
    if (role.type === roleType) {
      hasRole = true;
      return false;
    }
  });
  return hasRole;
}

async function isGroupTargetPresent(user, userGroup, role) {
  let groupTargetPresent = false;
  const groupTargets = user.listGroupTargetsForRole(role.id);
  await groupTargets.each(group => {
    if (group.profile.name === userGroup.profile.name) {
      groupTargetPresent = true;
      return false;
    }
  });
  return groupTargetPresent;
}

async function cleanupUser(client, user) {
  try {
    const existingUser = await client.getUser(user.profile.login);
    await existingUser.deactivate();
    await existingUser.delete();
  } catch (err) {
    expect(err.message).to.contain('Okta HTTP 404');
  }
}

async function cleanupGroup(client, expectedGroup) {
  let queryParameters = { q : `${expectedGroup.profile.name}` };
  await client.listGroups(queryParameters).each(async (group) => {
    expect(group).to.be.an.instanceof(models.Group);
    // If search doesn't return any results, listGroups() returns empty collection
    if (group.hasOwnProperty('profile')) {
      if (group.profile.name === expectedGroup.profile.name) {
        await group.delete();
      }
    }
  });
}

async function cleanup(client, users = null, groups = null) {
  // Cleanup the entities only if user is running a real OKTA server
  if (process.env.OKTA_USE_MOCK) {
    return;
  }

  const usersToDelete = [].concat(users || []);
  for (let i = 0; i < usersToDelete.length; i++) {
    await cleanupUser(client, usersToDelete[i]);
  }

  const groupsToDelete = [].concat(groups || []);
  for (let i = 0; i < groupsToDelete.length; i++) {
    await cleanupGroup(client, groupsToDelete[i]);
  }
}

async function removeAppByLabel(client, label) {
  return client.listApplications().each(async (application) => {
    if (application.label === label) {
      await application.deactivate();
      return application.delete();
    }
  });
}

module.exports = {
  delay: delay,
  validateUser: validateUser,
  authenticateUser: authenticateUser,
  validateGroup: validateGroup,
  isUserInGroup: isUserInGroup,
  waitTillUserInGroup: waitTillUserInGroup,
  deleteUser: deleteUser,
  isUserPresent: isUserPresent,
  isGroupPresent: isGroupPresent,
  doesUserHaveRole: doesUserHaveRole,
  isGroupTargetPresent: isGroupTargetPresent,
  cleanupUser: cleanupUser,
  cleanupGroup: cleanupGroup,
  cleanup: cleanup,
  removeAppByLabel: removeAppByLabel
};

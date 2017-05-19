const faker = require('faker');

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

module.exports = {
  userWithPassword: userWithPassword,
  delay: delay
};

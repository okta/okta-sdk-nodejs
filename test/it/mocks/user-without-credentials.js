const faker = require('@faker-js/faker');

module.exports = () => {
  const email = faker.internet.email();
  return {
    profile: {
      firstName: faker.random.word(),
      lastName: faker.random.word(),
      email,
      login: email
    }
  };
};

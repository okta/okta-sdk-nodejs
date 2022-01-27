const faker = require('@faker-js/faker');

module.exports = () => ({
  name: faker.random.word().substring(0, 49),
  type: faker.random.word().substring(0, 49),
  template: 'Your fake verification code is ${code}.',
  translations: {
    fr: 'Votre code ${org.name}: ${code}.'
  }
});

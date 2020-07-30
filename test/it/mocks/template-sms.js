const faker = require('faker');

module.exports = () => ({
  name: faker.random.word(),
  type: faker.random.word(),
  template: 'Your fake verification code is ${code}.',
  translations: {
    fr: 'Votre code ${org.name}: ${code}.'
  }
});

const faker = require('@faker-js/faker');

module.exports = () => ({
  name: faker.random.word().substring(0, 49),
  type: 'email.welcome',
  subject: faker.random.word().substring(0, 49),
  template: 'Your fake email template.',
  translations: {
    fr: {
      subject: faker.random.word().substring(0, 49),
      template: 'Votre faux modèle d\'e-mail.'
    }
  }
});

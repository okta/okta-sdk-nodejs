const faker = require('@faker-js/faker');

module.exports = () => ({
  name: `node-sdk: My iOS policy ${faker.random.word().substring(0, 49)}`,

  "platform": "IOS",
  "osVersion": {
    "minimum": "15.0.0.0"
  },
  "screenLockType": {
    "include":["PASSCODE", "BIOMETRIC"]
  },
});
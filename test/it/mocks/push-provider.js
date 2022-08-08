const faker = require('@faker-js/faker');
 
 module.exports.getAPNSConfiguration = () => ({
  'providerType': 'APNS',
  'name': `node-sdk: Config ${faker.random.word().substring(0, 49)}`,
  'configuration': {
    'keyId': 'ABC123DEFG',
    'teamId': 'DEF123GHIJ',
    'tokenSigningKey': '-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIALNjYLq9p/wLrLCFIHsHW4KJ39mjH+tdqOEe0QzFQhvoAoGCCqGSM49\nAwEHoUQDQgAEHgVWRi+/YKk/bQI8Kx8/Pz27QsPriXwibsk//RjwJyaG0IpRZDl8\nWFWVPe8EMHnZIOMs1OQ858W60DP4jgFulA==\n-----END EC PRIVATE KEY-----',
    'fileName': 'filename.p8'
  }
});

module.exports.getFCMConfiguration = () => ({
  'providerType': 'FCM',
  'name': `node-sdk: Config ${faker.random.word().substring(0, 49)}`,
  'configuration': {
    'serviceAccountJson': 'encoded json from .json file',
    'fileName': 'filename.json'
  }
});
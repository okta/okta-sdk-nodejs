/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

const ModelResolutionFactory = require('../resolution-factory');
/*eslint-disable no-unused-vars*/
const factories = require('./');
const models = require('../models');

class UserFactorFactory extends ModelResolutionFactory {
  getMapping() {
    return {
      'call': models.CallUserFactor,
      'email': models.EmailUserFactor,
      'push': models.PushUserFactor,
      'question': models.SecurityQuestionUserFactor,
      'sms': models.SmsUserFactor,
      'token': models.TokenUserFactor,
      'token:hardware': models.HardwareUserFactor,
      'token:software:totp': models.TotpUserFactor,
      'u2f': models.U2fUserFactor,
      'web': models.WebUserFactor,
    };
  }

  getResolutionProperty() {
    return 'factorType';
  }
}

module.exports = UserFactorFactory;

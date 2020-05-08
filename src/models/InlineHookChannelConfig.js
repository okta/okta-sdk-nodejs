/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const InlineHookChannelConfigAuthScheme = require('./InlineHookChannelConfigAuthScheme');

/**
 * @class InlineHookChannelConfig
 * @extends Resource
 * @property { InlineHookChannelConfigAuthScheme } authScheme
 * @property { array } headers
 * @property { string } uri
 */
class InlineHookChannelConfig extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.authScheme) {
      this.authScheme = new InlineHookChannelConfigAuthScheme(this.authScheme);
    }
  }

}

module.exports = InlineHookChannelConfig;

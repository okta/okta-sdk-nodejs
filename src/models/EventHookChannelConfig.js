/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const EventHookChannelConfigAuthScheme = require('./EventHookChannelConfigAuthScheme');

/**
 * @class EventHookChannelConfig
 * @extends Resource
 * @property { EventHookChannelConfigAuthScheme } authScheme
 * @property { array } headers
 * @property { string } uri
 */
class EventHookChannelConfig extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.authScheme) {
      this.authScheme = new EventHookChannelConfigAuthScheme(this.authScheme);
    }
  }

}

module.exports = EventHookChannelConfig;

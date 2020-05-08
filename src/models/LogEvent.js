/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const LogActor = require('./LogActor');
const LogAuthenticationContext = require('./LogAuthenticationContext');
const LogClient = require('./LogClient');
const LogDebugContext = require('./LogDebugContext');
const LogOutcome = require('./LogOutcome');
const LogRequest = require('./LogRequest');
const LogSecurityContext = require('./LogSecurityContext');
const LogTransaction = require('./LogTransaction');

/**
 * @class LogEvent
 * @extends Resource
 * @property { LogActor } actor
 * @property { LogAuthenticationContext } authenticationContext
 * @property { LogClient } client
 * @property { LogDebugContext } debugContext
 * @property { string } displayMessage
 * @property { string } eventType
 * @property { string } legacyEventType
 * @property { LogOutcome } outcome
 * @property { dateTime } published
 * @property { LogRequest } request
 * @property { LogSecurityContext } securityContext
 * @property { LogSeverity } severity
 * @property { array } target
 * @property { LogTransaction } transaction
 * @property { string } uuid
 * @property { string } version
 */
class LogEvent extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.actor) {
      this.actor = new LogActor(this.actor);
    }
    if (resourceJson && resourceJson.authenticationContext) {
      this.authenticationContext = new LogAuthenticationContext(this.authenticationContext);
    }
    if (resourceJson && resourceJson.client) {
      this.client = new LogClient(this.client);
    }
    if (resourceJson && resourceJson.debugContext) {
      this.debugContext = new LogDebugContext(this.debugContext);
    }
    if (resourceJson && resourceJson.outcome) {
      this.outcome = new LogOutcome(this.outcome);
    }
    if (resourceJson && resourceJson.request) {
      this.request = new LogRequest(this.request);
    }
    if (resourceJson && resourceJson.securityContext) {
      this.securityContext = new LogSecurityContext(this.securityContext);
    }
    if (resourceJson && resourceJson.transaction) {
      this.transaction = new LogTransaction(this.transaction);
    }
  }

}

module.exports = LogEvent;

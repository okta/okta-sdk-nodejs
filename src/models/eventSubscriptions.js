"use strict";
/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubscriptions = void 0;
var EventSubscriptions = /** @class */ (function () {
    function EventSubscriptions() {
    }
    EventSubscriptions.getAttributeTypeMap = function () {
        return EventSubscriptions.attributeTypeMap;
    };
    EventSubscriptions.discriminator = "type";
    EventSubscriptions.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<string>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EventSubscriptions.TypeEnum"
        }
    ];
    return EventSubscriptions;
}());
exports.EventSubscriptions = EventSubscriptions;
(function (EventSubscriptions) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["EventType"] = 'EVENT_TYPE'] = "EventType";
        TypeEnum[TypeEnum["FlowEvent"] = 'FLOW_EVENT'] = "FlowEvent";
    })(TypeEnum = EventSubscriptions.TypeEnum || (EventSubscriptions.TypeEnum = {}));
})(EventSubscriptions = exports.EventSubscriptions || (exports.EventSubscriptions = {}));
exports.EventSubscriptions = EventSubscriptions;

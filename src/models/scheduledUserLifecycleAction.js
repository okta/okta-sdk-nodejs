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
exports.ScheduledUserLifecycleAction = void 0;
var ScheduledUserLifecycleAction = /** @class */ (function () {
    function ScheduledUserLifecycleAction() {
    }
    ScheduledUserLifecycleAction.getAttributeTypeMap = function () {
        return ScheduledUserLifecycleAction.attributeTypeMap;
    };
    ScheduledUserLifecycleAction.discriminator = undefined;
    ScheduledUserLifecycleAction.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "ScheduledUserLifecycleAction.StatusEnum"
        }
    ];
    return ScheduledUserLifecycleAction;
}());
exports.ScheduledUserLifecycleAction = ScheduledUserLifecycleAction;
(function (ScheduledUserLifecycleAction) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'ACTIVE'] = "Active";
        StatusEnum[StatusEnum["Inactive"] = 'INACTIVE'] = "Inactive";
        StatusEnum[StatusEnum["Pending"] = 'PENDING'] = "Pending";
        StatusEnum[StatusEnum["Deleted"] = 'DELETED'] = "Deleted";
        StatusEnum[StatusEnum["ExpiredPassword"] = 'EXPIRED_PASSWORD'] = "ExpiredPassword";
        StatusEnum[StatusEnum["Activating"] = 'ACTIVATING'] = "Activating";
        StatusEnum[StatusEnum["Suspended"] = 'SUSPENDED'] = "Suspended";
        StatusEnum[StatusEnum["Deleting"] = 'DELETING'] = "Deleting";
    })(StatusEnum = ScheduledUserLifecycleAction.StatusEnum || (ScheduledUserLifecycleAction.StatusEnum = {}));
})(ScheduledUserLifecycleAction = exports.ScheduledUserLifecycleAction || (exports.ScheduledUserLifecycleAction = {}));
exports.ScheduledUserLifecycleAction = ScheduledUserLifecycleAction;

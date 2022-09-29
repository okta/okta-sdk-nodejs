# okta.BehaviorRuleSettingsAnomalousLocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxEventsUsedForEvaluation** | **number** |  | [optional] [default to 20]
**minEventsNeededForEvaluation** | **number** |  | [optional] [default to 0]
**granularity** | [**LocationGranularity**](LocationGranularity.md) |  | [default to undefined]
**radiusKilometers** | **number** | Required when &#x60;granularity&#x60; is &#x60;LAT_LONG&#x60;. Radius from the provided coordinates in kilometers. | [optional] [default to undefined]


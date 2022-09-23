# okta.RiskEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiresAt** | **Date** | Time stamp at which the event expires (Expressed as a UTC time zone using ISO 8601 format: yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;). If this optional field is not included, Okta automatically expires the event 24 hours after the event is consumed. | [optional] [default to undefined]
**subjects** | [**Array&lt;RiskEventSubject&gt;**](RiskEventSubject.md) |  | [default to undefined]
**timestamp** | **Date** | Time stamp at which the event is produced (Expressed as a UTC time zone using ISO 8601 format: yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;). | [optional] [default to undefined]


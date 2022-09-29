# okta.EmailCustomization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **string** | The email&#39;s HTML body. May contain [variable references](https://velocity.apache.org/engine/1.7/user-guide.html#references). | [default to undefined]
**subject** | **string** | The email&#39;s subject. May contain [variable references](https://velocity.apache.org/engine/1.7/user-guide.html#references). | [default to undefined]
**created** | **Date** | The UTC time at which this email customization was created. | [optional] [readonly] [default to undefined]
**id** | **string** | A unique identifier for this email customization. | [optional] [readonly] [default to undefined]
**isDefault** | **boolean** | Whether this is the default customization for the email template. Each customized email template must have exactly one default customization. Defaults to &#x60;true&#x60; for the first customization and &#x60;false&#x60; thereafter. | [optional] [default to undefined]
**language** | **string** | The language specified as an [IETF BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc5646). | [default to undefined]
**lastUpdated** | **Date** | The UTC time at which this email customization was last updated. | [optional] [readonly] [default to undefined]
**_links** | [**EmailCustomizationAllOfLinks**](EmailCustomizationAllOfLinks.md) |  | [optional] [default to undefined]

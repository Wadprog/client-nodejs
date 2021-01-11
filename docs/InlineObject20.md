# Pipedrive.InlineObject20

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgId** | **Number** | ID of the base organization for the returned calculated values | [optional] 
**type** | **String** | The type of organization relationship | [optional] 
**relOwnerOrgId** | **Number** | The owner of this relationship. If type is &#39;parent&#39;, then the owner is the parent and the linked organization is the daughter. | [optional] 
**relLinkedOrgId** | **Number** | The linked organization in this relationship. If type is &#39;parent&#39;, then the linked organization is the daughter. | [optional] 



## Enum: TypeEnum


* `parent` (value: `"parent"`)

* `related` (value: `"related"`)




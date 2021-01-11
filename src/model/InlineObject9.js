/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject9 model module.
 * @module model/InlineObject9
 * @version 1.0.0
 */
class InlineObject9 {
    /**
     * Constructs a new <code>InlineObject9</code>.
     * @alias module:model/InlineObject9
     * @param conditions {Object} The conditions of the filter as a JSON object. It requires a minimum structure as follows: {\"glue\":\"and\",\"conditions\":[{\"glue\":\"and\",\"conditions\": [CONDITION_OBJECTS]},{\"glue\":\"or\",\"conditions\":[CONDITION_OBJECTS]}]}. Replace CONDITION_OBJECTS with JSON objects of the following structure: {\"object\":\"\",\"field_id\":\"\", \"operator\":\"\",\"value\":\"\", \"extra_value\":\"\"} or leave the array empty. Depending on the object type you should use another API endpoint to get field_id. There are five types of objects you can choose from: \"person\", \"deal\", \"organization\", \"product\", \"activity\" and you can use these types of operators depending on what type of a field you have: \"IS NOT NULL\", \"IS NULL\", \"<=\", \">=\", \"<\", \">\", \"!=\", \"=\", \"LIKE '%$%'\", \"NOT LIKE '%$%'\", \"LIKE '$%'\", \"NOT LIKE '$%'\", \"LIKE '%$'\", \"NOT LIKE '%$'\". To get a better understanding of how filters work try creating them directly from the Pipedrive application.
     */
    constructor(conditions) { 
        
        InlineObject9.initialize(this, conditions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, conditions) { 
        obj['conditions'] = conditions;
    }

    /**
     * Constructs a <code>InlineObject9</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject9} obj Optional instance to populate.
     * @return {module:model/InlineObject9} The populated <code>InlineObject9</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject9();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], Object);
            }
        }
        return obj;
    }


}

/**
 * The name of the filter
 * @member {String} name
 */
InlineObject9.prototype['name'] = undefined;

/**
 * The conditions of the filter as a JSON object. It requires a minimum structure as follows: {\"glue\":\"and\",\"conditions\":[{\"glue\":\"and\",\"conditions\": [CONDITION_OBJECTS]},{\"glue\":\"or\",\"conditions\":[CONDITION_OBJECTS]}]}. Replace CONDITION_OBJECTS with JSON objects of the following structure: {\"object\":\"\",\"field_id\":\"\", \"operator\":\"\",\"value\":\"\", \"extra_value\":\"\"} or leave the array empty. Depending on the object type you should use another API endpoint to get field_id. There are five types of objects you can choose from: \"person\", \"deal\", \"organization\", \"product\", \"activity\" and you can use these types of operators depending on what type of a field you have: \"IS NOT NULL\", \"IS NULL\", \"<=\", \">=\", \"<\", \">\", \"!=\", \"=\", \"LIKE '%$%'\", \"NOT LIKE '%$%'\", \"LIKE '$%'\", \"NOT LIKE '$%'\", \"LIKE '%$'\", \"NOT LIKE '%$'\". To get a better understanding of how filters work try creating them directly from the Pipedrive application.
 * @member {Object} conditions
 */
InlineObject9.prototype['conditions'] = undefined;






export default InlineObject9;

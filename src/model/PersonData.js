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
import PersonDataEmail from './PersonDataEmail';
import PersonDataPhone from './PersonDataPhone';

/**
 * The PersonData model module.
 * @module model/PersonData
 * @version 1.0.0
 */
class PersonData {
    /**
     * Constructs a new <code>PersonData</code>.
     * @alias module:model/PersonData
     */
    constructor() { 
        
        PersonData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonData} obj Optional instance to populate.
     * @return {module:model/PersonData} The populated <code>PersonData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], [PersonDataEmail]);

                delete data['email'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], [PersonDataPhone]);

                delete data['phone'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The ID of the Person associated with the item
 * @member {Number} id
 */
PersonData.prototype['id'] = undefined;

/**
 * The name of the Person associated with the item
 * @member {String} name
 */
PersonData.prototype['name'] = undefined;

/**
 * The emails of the Person associated with the item
 * @member {Array.<module:model/PersonDataEmail>} email
 */
PersonData.prototype['email'] = undefined;

/**
 * The phone numbers of the Person associated with the item
 * @member {Array.<module:model/PersonDataPhone>} phone
 */
PersonData.prototype['phone'] = undefined;






export default PersonData;

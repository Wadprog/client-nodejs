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
 * The BasicGoal model module.
 * @module model/BasicGoal
 * @version 1.0.0
 */
class BasicGoal {
    /**
     * Constructs a new <code>BasicGoal</code>.
     * @alias module:model/BasicGoal
     */
    constructor() { 
        
        BasicGoal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicGoal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicGoal} obj Optional instance to populate.
     * @return {module:model/BasicGoal} The populated <code>BasicGoal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicGoal();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], Object);

                delete data['assignee'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);

                delete data['type'];
            }
            if (data.hasOwnProperty('expected_outcome')) {
                obj['expected_outcome'] = ApiClient.convertToType(data['expected_outcome'], Object);

                delete data['expected_outcome'];
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], Object);

                delete data['duration'];
            }
            if (data.hasOwnProperty('interval')) {
                obj['interval'] = ApiClient.convertToType(data['interval'], 'String');

                delete data['interval'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Title of the goal.
 * @member {String} title
 */
BasicGoal.prototype['title'] = undefined;

/**
 * Who is this goal assigned to. It requires the following JSON structure: { \"id\": \"1\", \"type\": \"person\" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
 * @member {Object} assignee
 */
BasicGoal.prototype['assignee'] = undefined;

/**
 * Type of the goal. It requires the following JSON structure: { \"name\": \"deals_started\", \"params\": { \"pipeline_id\": 1 } }. Type can be one of: `deals_won`,`deals_progressed`,`activities_completed`,`activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`.
 * @member {Object} type
 */
BasicGoal.prototype['type'] = undefined;

/**
 * Expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { \"target\": \"50\", \"tracking_metric\": \"quantity\" } or { \"target\": \"50\", \"tracking_metric\": \"sum\", \"currency_id\": 1 }. `currency_id` should only be added to `sum` type of goals.
 * @member {Object} expected_outcome
 */
BasicGoal.prototype['expected_outcome'] = undefined;

/**
 * Date when the goal starts and ends. It requires the following JSON structure: { \"start\": \"2019-01-01\", \"end\": \"2022-12-31\" }. Date in format of YYYY-MM-DD. \"end\" can be set to `null` for an infinite, open-ended goal.
 * @member {Object} duration
 */
BasicGoal.prototype['duration'] = undefined;

/**
 * Date when the goal starts and ends. It requires the following JSON structure: { \"start\": \"2019-01-01\", \"end\": \"2022-12-31\" }. Date in format of YYYY-MM-DD.
 * @member {module:model/BasicGoal.IntervalEnum} interval
 */
BasicGoal.prototype['interval'] = undefined;





/**
 * Allowed values for the <code>interval</code> property.
 * @enum {String}
 * @readonly
 */
BasicGoal['IntervalEnum'] = {

    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly",

    /**
     * value: "monthly"
     * @const
     */
    "monthly": "monthly",

    /**
     * value: "quarterly"
     * @const
     */
    "quarterly": "quarterly",

    /**
     * value: "yearly"
     * @const
     */
    "yearly": "yearly"
};



export default BasicGoal;


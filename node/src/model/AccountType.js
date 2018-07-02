/**
 * Netlify's API definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NetlifysApiDefinition) {
      root.NetlifysApiDefinition = {};
    }
    root.NetlifysApiDefinition.AccountType = factory(root.NetlifysApiDefinition.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountType model module.
   * @module model/AccountType
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AccountType</code>.
   * @alias module:model/AccountType
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>AccountType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountType} obj Optional instance to populate.
   * @return {module:model/AccountType} The populated <code>AccountType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = ApiClient.convertToType(data['capabilities'], Object);
      }
      if (data.hasOwnProperty('monthly_dollar_price')) {
        obj['monthly_dollar_price'] = ApiClient.convertToType(data['monthly_dollar_price'], 'Number');
      }
      if (data.hasOwnProperty('yearly_dollar_price')) {
        obj['yearly_dollar_price'] = ApiClient.convertToType(data['yearly_dollar_price'], 'Number');
      }
      if (data.hasOwnProperty('monthly_seats_addon_dollar_price')) {
        obj['monthly_seats_addon_dollar_price'] = ApiClient.convertToType(data['monthly_seats_addon_dollar_price'], 'Number');
      }
      if (data.hasOwnProperty('yearly_seats_addon_dollar_price')) {
        obj['yearly_seats_addon_dollar_price'] = ApiClient.convertToType(data['yearly_seats_addon_dollar_price'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Object} capabilities
   */
  exports.prototype['capabilities'] = undefined;
  /**
   * @member {Number} monthly_dollar_price
   */
  exports.prototype['monthly_dollar_price'] = undefined;
  /**
   * @member {Number} yearly_dollar_price
   */
  exports.prototype['yearly_dollar_price'] = undefined;
  /**
   * @member {Number} monthly_seats_addon_dollar_price
   */
  exports.prototype['monthly_seats_addon_dollar_price'] = undefined;
  /**
   * @member {Number} yearly_seats_addon_dollar_price
   */
  exports.prototype['yearly_seats_addon_dollar_price'] = undefined;



  return exports;
}));


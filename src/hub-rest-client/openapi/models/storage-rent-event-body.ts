/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface StorageRentEventBody
 */
export interface StorageRentEventBody {
  /**
   *
   * @type {string}
   * @memberof StorageRentEventBody
   */
  payer: string;
  /**
   *
   * @type {number}
   * @memberof StorageRentEventBody
   */
  units: number;
  /**
   *
   * @type {number}
   * @memberof StorageRentEventBody
   */
  expiry: number;
}

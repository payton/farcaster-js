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


// May contain unused imports in some cases
// @ts-ignore
import { Verification } from './verification';

/**
 * 
 * @export
 * @interface ListVerificationsByFid200Response
 */
export interface ListVerificationsByFid200Response {
    /**
     * 
     * @type {Array<Verification>}
     * @memberof ListVerificationsByFid200Response
     */
    'messages': Array<Verification>;
    /**
     * 
     * @type {string}
     * @memberof ListVerificationsByFid200Response
     */
    'nextPageToken': string;
}


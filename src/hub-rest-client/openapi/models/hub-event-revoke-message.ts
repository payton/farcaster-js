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
import { RevokeMessageBody } from "./revoke-message-body";

/**
 *
 * @export
 * @interface HubEventRevokeMessage
 */
export interface HubEventRevokeMessage {
  /**
   *
   * @type {string}
   * @memberof HubEventRevokeMessage
   */
  type: string;
  /**
   *
   * @type {number}
   * @memberof HubEventRevokeMessage
   */
  id: number;
  /**
   *
   * @type {RevokeMessageBody}
   * @memberof HubEventRevokeMessage
   */
  revokeMessageBody: RevokeMessageBody;
}

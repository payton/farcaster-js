/* tslint:disable */
/**
 * v1 Farcaster
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The status of a user.   - active: The user is currently active.   - inactive: The user is not currently active.
 * @export
 * @enum {string}
 */

export const ActiveStatus = {
  Active: "active",
  Inactive: "inactive",
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ActiveStatus = (typeof ActiveStatus)[keyof typeof ActiveStatus];

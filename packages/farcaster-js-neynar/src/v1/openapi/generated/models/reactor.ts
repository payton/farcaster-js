/* tslint:disable */
/* eslint-disable */
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


// May contain unused imports in some cases
// @ts-ignore
import { ReactorPfp } from './reactor-pfp';
// May contain unused imports in some cases
// @ts-ignore
import { ReactorViewerContext } from './reactor-viewer-context';

/**
 * 
 * @export
 * @interface Reactor
 */
export interface Reactor {
    /**
     * The unique identifier of the reactor.
     * @type {number}
     * @memberof Reactor
     */
    'fid': number;
    /**
     * The username of the reactor.
     * @type {string}
     * @memberof Reactor
     */
    'username': string;
    /**
     * The display name of the reactor.
     * @type {string}
     * @memberof Reactor
     */
    'displayName': string;
    /**
     * 
     * @type {ReactorPfp}
     * @memberof Reactor
     */
    'pfp': ReactorPfp;
    /**
     * The number of followers the reactor has.
     * @type {number}
     * @memberof Reactor
     */
    'followerCount': number;
    /**
     * The number of users the reactor is following.
     * @type {number}
     * @memberof Reactor
     */
    'followingCount': number;
    /**
     * 
     * @type {ReactorViewerContext}
     * @memberof Reactor
     */
    'viewerContext'?: ReactorViewerContext;
}


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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { MentionsAndRepliesResponse } from '../models';
// @ts-ignore
import { ReactionsAndRecastsResponse } from '../models';
/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a list of mentions and replies to the user’s casts in reverse chronological order
         * @summary Get mentions and replies
         * @param {number} fid fid of a user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mentionsAndReplies: async (fid: number, viewerFid?: number, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('mentionsAndReplies', 'fid', fid)
            const localVarPath = `/farcaster/mentions-and-replies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "api_key", configuration)

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of reactions and recasts to the users’s casts in reverse chronological order
         * @summary Get reactions and recasts
         * @param {number} fid fid of a user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reactionsAndRecasts: async (fid: number, viewerFid?: number, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('reactionsAndRecasts', 'fid', fid)
            const localVarPath = `/farcaster/reactions-and-recasts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "api_key", configuration)

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewerFid'] = viewerFid;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets a list of mentions and replies to the user’s casts in reverse chronological order
         * @summary Get mentions and replies
         * @param {number} fid fid of a user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mentionsAndReplies(fid: number, viewerFid?: number, cursor?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MentionsAndRepliesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mentionsAndReplies(fid, viewerFid, cursor, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of reactions and recasts to the users’s casts in reverse chronological order
         * @summary Get reactions and recasts
         * @param {number} fid fid of a user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reactionsAndRecasts(fid: number, viewerFid?: number, cursor?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReactionsAndRecastsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reactionsAndRecasts(fid, viewerFid, cursor, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationsApiFp(configuration)
    return {
        /**
         * Gets a list of mentions and replies to the user’s casts in reverse chronological order
         * @summary Get mentions and replies
         * @param {NotificationsApiMentionsAndRepliesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mentionsAndReplies(requestParameters: NotificationsApiMentionsAndRepliesRequest, options?: AxiosRequestConfig): AxiosPromise<MentionsAndRepliesResponse> {
            return localVarFp.mentionsAndReplies(requestParameters.fid, requestParameters.viewerFid, requestParameters.cursor, requestParameters.limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of reactions and recasts to the users’s casts in reverse chronological order
         * @summary Get reactions and recasts
         * @param {NotificationsApiReactionsAndRecastsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reactionsAndRecasts(requestParameters: NotificationsApiReactionsAndRecastsRequest, options?: AxiosRequestConfig): AxiosPromise<ReactionsAndRecastsResponse> {
            return localVarFp.reactionsAndRecasts(requestParameters.fid, requestParameters.viewerFid, requestParameters.cursor, requestParameters.limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for mentionsAndReplies operation in NotificationsApi.
 * @export
 * @interface NotificationsApiMentionsAndRepliesRequest
 */
export interface NotificationsApiMentionsAndRepliesRequest {
    /**
     * fid of a user
     * @type {number}
     * @memberof NotificationsApiMentionsAndReplies
     */
    readonly fid: number

    /**
     * fid of the user viewing this information, needed for contextual information.
     * @type {number}
     * @memberof NotificationsApiMentionsAndReplies
     */
    readonly viewerFid?: number

    /**
     * Pagination cursor.
     * @type {string}
     * @memberof NotificationsApiMentionsAndReplies
     */
    readonly cursor?: string

    /**
     * Number of results to retrieve (default 25, max 150)
     * @type {number}
     * @memberof NotificationsApiMentionsAndReplies
     */
    readonly limit?: number
}

/**
 * Request parameters for reactionsAndRecasts operation in NotificationsApi.
 * @export
 * @interface NotificationsApiReactionsAndRecastsRequest
 */
export interface NotificationsApiReactionsAndRecastsRequest {
    /**
     * fid of a user
     * @type {number}
     * @memberof NotificationsApiReactionsAndRecasts
     */
    readonly fid: number

    /**
     * fid of the user viewing this information, needed for contextual information.
     * @type {number}
     * @memberof NotificationsApiReactionsAndRecasts
     */
    readonly viewerFid?: number

    /**
     * Pagination cursor.
     * @type {string}
     * @memberof NotificationsApiReactionsAndRecasts
     */
    readonly cursor?: string

    /**
     * Number of results to retrieve (default 25, max 150)
     * @type {number}
     * @memberof NotificationsApiReactionsAndRecasts
     */
    readonly limit?: number
}

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI {
    /**
     * Gets a list of mentions and replies to the user’s casts in reverse chronological order
     * @summary Get mentions and replies
     * @param {NotificationsApiMentionsAndRepliesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public mentionsAndReplies(requestParameters: NotificationsApiMentionsAndRepliesRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).mentionsAndReplies(requestParameters.fid, requestParameters.viewerFid, requestParameters.cursor, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of reactions and recasts to the users’s casts in reverse chronological order
     * @summary Get reactions and recasts
     * @param {NotificationsApiReactionsAndRecastsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public reactionsAndRecasts(requestParameters: NotificationsApiReactionsAndRecastsRequest, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).reactionsAndRecasts(requestParameters.fid, requestParameters.viewerFid, requestParameters.cursor, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }
}

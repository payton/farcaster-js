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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { Message } from '../models';
// @ts-ignore
import { ReactionType } from '../models';
/**
 * ReactionsApi - axios parameter creator
 * @export
 */
export const ReactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a reaction by its created FID and target Cast.
         * @param {number} fid The FID of the reaction\&#39;s creator
         * @param {number} targetFid The FID of the cast\&#39;s creator
         * @param {string} targetHash The cast\&#39;s hash
         * @param {ReactionType} reactionType The type of reaction, either as a numerical enum value or string representation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReactionById: async (fid: number, targetFid: number, targetHash: string, reactionType: ReactionType, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('getReactionById', 'fid', fid)
            // verify required parameter 'targetFid' is not null or undefined
            assertParamExists('getReactionById', 'targetFid', targetFid)
            // verify required parameter 'targetHash' is not null or undefined
            assertParamExists('getReactionById', 'targetHash', targetHash)
            // verify required parameter 'reactionType' is not null or undefined
            assertParamExists('getReactionById', 'reactionType', reactionType)
            const localVarPath = `/v1/reactionById`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (targetFid !== undefined) {
                localVarQueryParameter['target_fid'] = targetFid;
            }

            if (targetHash !== undefined) {
                localVarQueryParameter['target_hash'] = targetHash;
            }

            if (reactionType !== undefined) {
                localVarQueryParameter['reaction_type'] = reactionType;
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
 * ReactionsApi - functional programming interface
 * @export
 */
export const ReactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a reaction by its created FID and target Cast.
         * @param {number} fid The FID of the reaction\&#39;s creator
         * @param {number} targetFid The FID of the cast\&#39;s creator
         * @param {string} targetHash The cast\&#39;s hash
         * @param {ReactionType} reactionType The type of reaction, either as a numerical enum value or string representation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReactionById(fid: number, targetFid: number, targetHash: string, reactionType: ReactionType, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Message>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReactionById(fid, targetFid, targetHash, reactionType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReactionsApi - factory interface
 * @export
 */
export const ReactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReactionsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a reaction by its created FID and target Cast.
         * @param {ReactionsApiGetReactionByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReactionById(requestParameters: ReactionsApiGetReactionByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Message> {
            return localVarFp.getReactionById(requestParameters.fid, requestParameters.targetFid, requestParameters.targetHash, requestParameters.reactionType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getReactionById operation in ReactionsApi.
 * @export
 * @interface ReactionsApiGetReactionByIdRequest
 */
export interface ReactionsApiGetReactionByIdRequest {
    /**
     * The FID of the reaction\&#39;s creator
     * @type {number}
     * @memberof ReactionsApiGetReactionById
     */
    readonly fid: number

    /**
     * The FID of the cast\&#39;s creator
     * @type {number}
     * @memberof ReactionsApiGetReactionById
     */
    readonly targetFid: number

    /**
     * The cast\&#39;s hash
     * @type {string}
     * @memberof ReactionsApiGetReactionById
     */
    readonly targetHash: string

    /**
     * The type of reaction, either as a numerical enum value or string representation
     * @type {ReactionType}
     * @memberof ReactionsApiGetReactionById
     */
    readonly reactionType: ReactionType
}

/**
 * ReactionsApi - object-oriented interface
 * @export
 * @class ReactionsApi
 * @extends {BaseAPI}
 */
export class ReactionsApi extends BaseAPI {
    /**
     * 
     * @summary Get a reaction by its created FID and target Cast.
     * @param {ReactionsApiGetReactionByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionsApi
     */
    public getReactionById(requestParameters: ReactionsApiGetReactionByIdRequest, options?: AxiosRequestConfig) {
        return ReactionsApiFp(this.configuration).getReactionById(requestParameters.fid, requestParameters.targetFid, requestParameters.targetHash, requestParameters.reactionType, options).then((request) => request(this.axios, this.basePath));
    }
}

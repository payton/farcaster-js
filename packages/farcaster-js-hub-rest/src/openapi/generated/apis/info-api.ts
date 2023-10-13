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
import { HubInfoResponse } from '../models';
/**
 * InfoApi - axios parameter creator
 * @export
 */
export const InfoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sync Methods
         * @param {boolean} dbstats Whether to return DB stats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo: async (dbstats: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'dbstats' is not null or undefined
            assertParamExists('getInfo', 'dbstats', dbstats)
            const localVarPath = `/v1/info`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (dbstats !== undefined) {
                localVarQueryParameter['dbstats'] = dbstats;
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
 * InfoApi - functional programming interface
 * @export
 */
export const InfoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InfoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sync Methods
         * @param {boolean} dbstats Whether to return DB stats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfo(dbstats: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HubInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInfo(dbstats, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InfoApi - factory interface
 * @export
 */
export const InfoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InfoApiFp(configuration)
    return {
        /**
         * 
         * @summary Sync Methods
         * @param {InfoApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo(requestParameters: InfoApiGetInfoRequest, options?: AxiosRequestConfig): AxiosPromise<HubInfoResponse> {
            return localVarFp.getInfo(requestParameters.dbstats, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInfo operation in InfoApi.
 * @export
 * @interface InfoApiGetInfoRequest
 */
export interface InfoApiGetInfoRequest {
    /**
     * Whether to return DB stats
     * @type {boolean}
     * @memberof InfoApiGetInfo
     */
    readonly dbstats: boolean
}

/**
 * InfoApi - object-oriented interface
 * @export
 * @class InfoApi
 * @extends {BaseAPI}
 */
export class InfoApi extends BaseAPI {
    /**
     * 
     * @summary Sync Methods
     * @param {InfoApiGetInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InfoApi
     */
    public getInfo(requestParameters: InfoApiGetInfoRequest, options?: AxiosRequestConfig) {
        return InfoApiFp(this.configuration).getInfo(requestParameters.dbstats, options).then((request) => request(this.axios, this.basePath));
    }
}

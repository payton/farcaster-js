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

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { ErrorResponse } from "../models";
// @ts-ignore
import { LinkAdd } from "../models";
// @ts-ignore
import { LinkType } from "../models";
// @ts-ignore
import { ListLinksByFid200Response } from "../models";
/**
 * LinksApi - axios parameter creator
 * @export
 */
export const LinksApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Get a link by its FID and target FID.
     * @param {number} fid The FID of the link\&#39;s originator
     * @param {number} targetFid The FID of the target of the link
     * @param {LinkType} linkType The type of link, as a string value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLinkById: async (
      fid: number,
      targetFid: number,
      linkType: LinkType,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("getLinkById", "fid", fid);
      // verify required parameter 'targetFid' is not null or undefined
      assertParamExists("getLinkById", "targetFid", targetFid);
      // verify required parameter 'linkType' is not null or undefined
      assertParamExists("getLinkById", "linkType", linkType);
      const localVarPath = `/v1/linkById`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (fid !== undefined) {
        localVarQueryParameter["fid"] = fid;
      }

      if (targetFid !== undefined) {
        localVarQueryParameter["target_fid"] = targetFid;
      }

      if (linkType !== undefined) {
        localVarQueryParameter["link_type"] = linkType;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get all links from a source FID
     * @param {number} fid The FID of the link\&#39;s originator
     * @param {LinkType} [linkType] The type of link, as a string value
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLinksByFid: async (
      fid: number,
      linkType?: LinkType,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("listLinksByFid", "fid", fid);
      const localVarPath = `/v1/linksByFid`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (fid !== undefined) {
        localVarQueryParameter["fid"] = fid;
      }

      if (linkType !== undefined) {
        localVarQueryParameter["link_type"] = linkType;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["pageSize"] = pageSize;
      }

      if (reverse !== undefined) {
        localVarQueryParameter["reverse"] = reverse;
      }

      if (pageToken !== undefined) {
        localVarQueryParameter["pageToken"] = pageToken;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get all links to a target FID
     * @param {number} targetFid The FID of the target of the link
     * @param {LinkType} [linkType] The type of link, as a string value
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLinksByTargetFid: async (
      targetFid: number,
      linkType?: LinkType,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'targetFid' is not null or undefined
      assertParamExists("listLinksByTargetFid", "targetFid", targetFid);
      const localVarPath = `/v1/linksByTargetFid`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (targetFid !== undefined) {
        localVarQueryParameter["target_fid"] = targetFid;
      }

      if (linkType !== undefined) {
        localVarQueryParameter["link_type"] = linkType;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["pageSize"] = pageSize;
      }

      if (reverse !== undefined) {
        localVarQueryParameter["reverse"] = reverse;
      }

      if (pageToken !== undefined) {
        localVarQueryParameter["pageToken"] = pageToken;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * LinksApi - functional programming interface
 * @export
 */
export const LinksApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = LinksApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Get a link by its FID and target FID.
     * @param {number} fid The FID of the link\&#39;s originator
     * @param {number} targetFid The FID of the target of the link
     * @param {LinkType} linkType The type of link, as a string value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLinkById(
      fid: number,
      targetFid: number,
      linkType: LinkType,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<LinkAdd>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLinkById(
        fid,
        targetFid,
        linkType,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get all links from a source FID
     * @param {number} fid The FID of the link\&#39;s originator
     * @param {LinkType} [linkType] The type of link, as a string value
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listLinksByFid(
      fid: number,
      linkType?: LinkType,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListLinksByFid200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listLinksByFid(
        fid,
        linkType,
        pageSize,
        reverse,
        pageToken,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get all links to a target FID
     * @param {number} targetFid The FID of the target of the link
     * @param {LinkType} [linkType] The type of link, as a string value
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listLinksByTargetFid(
      targetFid: number,
      linkType?: LinkType,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListLinksByFid200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listLinksByTargetFid(
          targetFid,
          linkType,
          pageSize,
          reverse,
          pageToken,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * LinksApi - factory interface
 * @export
 */
export const LinksApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = LinksApiFp(configuration);
  return {
    /**
     *
     * @summary Get a link by its FID and target FID.
     * @param {LinksApiGetLinkByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLinkById(
      requestParameters: LinksApiGetLinkByIdRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<LinkAdd> {
      return localVarFp
        .getLinkById(
          requestParameters.fid,
          requestParameters.targetFid,
          requestParameters.linkType,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get all links from a source FID
     * @param {LinksApiListLinksByFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLinksByFid(
      requestParameters: LinksApiListLinksByFidRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<ListLinksByFid200Response> {
      return localVarFp
        .listLinksByFid(
          requestParameters.fid,
          requestParameters.linkType,
          requestParameters.pageSize,
          requestParameters.reverse,
          requestParameters.pageToken,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get all links to a target FID
     * @param {LinksApiListLinksByTargetFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLinksByTargetFid(
      requestParameters: LinksApiListLinksByTargetFidRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<ListLinksByFid200Response> {
      return localVarFp
        .listLinksByTargetFid(
          requestParameters.targetFid,
          requestParameters.linkType,
          requestParameters.pageSize,
          requestParameters.reverse,
          requestParameters.pageToken,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for getLinkById operation in LinksApi.
 * @export
 * @interface LinksApiGetLinkByIdRequest
 */
export interface LinksApiGetLinkByIdRequest {
  /**
   * The FID of the link\&#39;s originator
   * @type {number}
   * @memberof LinksApiGetLinkById
   */
  readonly fid: number;

  /**
   * The FID of the target of the link
   * @type {number}
   * @memberof LinksApiGetLinkById
   */
  readonly targetFid: number;

  /**
   * The type of link, as a string value
   * @type {LinkType}
   * @memberof LinksApiGetLinkById
   */
  readonly linkType: LinkType;
}

/**
 * Request parameters for listLinksByFid operation in LinksApi.
 * @export
 * @interface LinksApiListLinksByFidRequest
 */
export interface LinksApiListLinksByFidRequest {
  /**
   * The FID of the link\&#39;s originator
   * @type {number}
   * @memberof LinksApiListLinksByFid
   */
  readonly fid: number;

  /**
   * The type of link, as a string value
   * @type {LinkType}
   * @memberof LinksApiListLinksByFid
   */
  readonly linkType?: LinkType;

  /**
   * Maximum number of messages to return in a single response
   * @type {number}
   * @memberof LinksApiListLinksByFid
   */
  readonly pageSize?: number;

  /**
   * Reverse the sort order, returning latest messages first
   * @type {boolean}
   * @memberof LinksApiListLinksByFid
   */
  readonly reverse?: boolean;

  /**
   * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
   * @type {string}
   * @memberof LinksApiListLinksByFid
   */
  readonly pageToken?: string;
}

/**
 * Request parameters for listLinksByTargetFid operation in LinksApi.
 * @export
 * @interface LinksApiListLinksByTargetFidRequest
 */
export interface LinksApiListLinksByTargetFidRequest {
  /**
   * The FID of the target of the link
   * @type {number}
   * @memberof LinksApiListLinksByTargetFid
   */
  readonly targetFid: number;

  /**
   * The type of link, as a string value
   * @type {LinkType}
   * @memberof LinksApiListLinksByTargetFid
   */
  readonly linkType?: LinkType;

  /**
   * Maximum number of messages to return in a single response
   * @type {number}
   * @memberof LinksApiListLinksByTargetFid
   */
  readonly pageSize?: number;

  /**
   * Reverse the sort order, returning latest messages first
   * @type {boolean}
   * @memberof LinksApiListLinksByTargetFid
   */
  readonly reverse?: boolean;

  /**
   * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
   * @type {string}
   * @memberof LinksApiListLinksByTargetFid
   */
  readonly pageToken?: string;
}

/**
 * LinksApi - object-oriented interface
 * @export
 * @class LinksApi
 * @extends {BaseAPI}
 */
export class LinksApi extends BaseAPI {
  /**
   *
   * @summary Get a link by its FID and target FID.
   * @param {LinksApiGetLinkByIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LinksApi
   */
  public getLinkById(
    requestParameters: LinksApiGetLinkByIdRequest,
    options?: AxiosRequestConfig
  ) {
    return LinksApiFp(this.configuration)
      .getLinkById(
        requestParameters.fid,
        requestParameters.targetFid,
        requestParameters.linkType,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get all links from a source FID
   * @param {LinksApiListLinksByFidRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LinksApi
   */
  public listLinksByFid(
    requestParameters: LinksApiListLinksByFidRequest,
    options?: AxiosRequestConfig
  ) {
    return LinksApiFp(this.configuration)
      .listLinksByFid(
        requestParameters.fid,
        requestParameters.linkType,
        requestParameters.pageSize,
        requestParameters.reverse,
        requestParameters.pageToken,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get all links to a target FID
   * @param {LinksApiListLinksByTargetFidRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LinksApi
   */
  public listLinksByTargetFid(
    requestParameters: LinksApiListLinksByTargetFidRequest,
    options?: AxiosRequestConfig
  ) {
    return LinksApiFp(this.configuration)
      .listLinksByTargetFid(
        requestParameters.targetFid,
        requestParameters.linkType,
        requestParameters.pageSize,
        requestParameters.reverse,
        requestParameters.pageToken,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

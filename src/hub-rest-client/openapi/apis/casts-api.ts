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
import { CastAdd } from "../models";
// @ts-ignore
import { ErrorResponse } from "../models";
// @ts-ignore
import { ListCastsByFid200Response } from "../models";
/**
 * CastsApi - axios parameter creator
 * @export
 */
export const CastsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Get a cast by its FID and Hash.
     * @param {number} fid The FID of the cast\&#39;s creator
     * @param {string} hash The cast\&#39;s hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCastById: async (
      fid: number,
      hash: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("getCastById", "fid", fid);
      // verify required parameter 'hash' is not null or undefined
      assertParamExists("getCastById", "hash", hash);
      const localVarPath = `/v1/castById`;
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

      if (hash !== undefined) {
        localVarQueryParameter["hash"] = hash;
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
     * @summary Fetch all casts authored by an FID.
     * @param {number} fid The FID of the casts\&#39; creator
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCastsByFid: async (
      fid: number,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("listCastsByFid", "fid", fid);
      const localVarPath = `/v1/castsByFid`;
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
     * @summary Fetch all casts that mention an FID
     * @param {number} fid The FID that is mentioned in a cast
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCastsByMention: async (
      fid: number,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'fid' is not null or undefined
      assertParamExists("listCastsByMention", "fid", fid);
      const localVarPath = `/v1/castsByMention`;
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
     * @summary Fetch all casts by parent cast\'s FID and Hash OR by the parent\'s URL
     * @param {number} [fid] The FID of the parent cast
     * @param {string} [hash] The parent cast\&#39;s hash
     * @param {string} [url]
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCastsByParent: async (
      fid?: number,
      hash?: string,
      url?: string,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/castsByParent`;
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

      if (hash !== undefined) {
        localVarQueryParameter["hash"] = hash;
      }

      if (url !== undefined) {
        localVarQueryParameter["url"] = url;
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
 * CastsApi - functional programming interface
 * @export
 */
export const CastsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CastsApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Get a cast by its FID and Hash.
     * @param {number} fid The FID of the cast\&#39;s creator
     * @param {string} hash The cast\&#39;s hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCastById(
      fid: number,
      hash: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CastAdd>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getCastById(
        fid,
        hash,
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
     * @summary Fetch all casts authored by an FID.
     * @param {number} fid The FID of the casts\&#39; creator
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listCastsByFid(
      fid: number,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListCastsByFid200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listCastsByFid(
        fid,
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
     * @summary Fetch all casts that mention an FID
     * @param {number} fid The FID that is mentioned in a cast
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listCastsByMention(
      fid: number,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListCastsByFid200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listCastsByMention(
          fid,
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
     * @summary Fetch all casts by parent cast\'s FID and Hash OR by the parent\'s URL
     * @param {number} [fid] The FID of the parent cast
     * @param {string} [hash] The parent cast\&#39;s hash
     * @param {string} [url]
     * @param {number} [pageSize] Maximum number of messages to return in a single response
     * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
     * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listCastsByParent(
      fid?: number,
      hash?: string,
      url?: string,
      pageSize?: number,
      reverse?: boolean,
      pageToken?: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListCastsByFid200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listCastsByParent(
          fid,
          hash,
          url,
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
 * CastsApi - factory interface
 * @export
 */
export const CastsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = CastsApiFp(configuration);
  return {
    /**
     *
     * @summary Get a cast by its FID and Hash.
     * @param {CastsApiGetCastByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCastById(
      requestParameters: CastsApiGetCastByIdRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<CastAdd> {
      return localVarFp
        .getCastById(requestParameters.fid, requestParameters.hash, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Fetch all casts authored by an FID.
     * @param {CastsApiListCastsByFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCastsByFid(
      requestParameters: CastsApiListCastsByFidRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<ListCastsByFid200Response> {
      return localVarFp
        .listCastsByFid(
          requestParameters.fid,
          requestParameters.pageSize,
          requestParameters.reverse,
          requestParameters.pageToken,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Fetch all casts that mention an FID
     * @param {CastsApiListCastsByMentionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCastsByMention(
      requestParameters: CastsApiListCastsByMentionRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<ListCastsByFid200Response> {
      return localVarFp
        .listCastsByMention(
          requestParameters.fid,
          requestParameters.pageSize,
          requestParameters.reverse,
          requestParameters.pageToken,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Fetch all casts by parent cast\'s FID and Hash OR by the parent\'s URL
     * @param {CastsApiListCastsByParentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCastsByParent(
      requestParameters: CastsApiListCastsByParentRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<ListCastsByFid200Response> {
      return localVarFp
        .listCastsByParent(
          requestParameters.fid,
          requestParameters.hash,
          requestParameters.url,
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
 * Request parameters for getCastById operation in CastsApi.
 * @export
 * @interface CastsApiGetCastByIdRequest
 */
export interface CastsApiGetCastByIdRequest {
  /**
   * The FID of the cast\&#39;s creator
   * @type {number}
   * @memberof CastsApiGetCastById
   */
  readonly fid: number;

  /**
   * The cast\&#39;s hash
   * @type {string}
   * @memberof CastsApiGetCastById
   */
  readonly hash: string;
}

/**
 * Request parameters for listCastsByFid operation in CastsApi.
 * @export
 * @interface CastsApiListCastsByFidRequest
 */
export interface CastsApiListCastsByFidRequest {
  /**
   * The FID of the casts\&#39; creator
   * @type {number}
   * @memberof CastsApiListCastsByFid
   */
  readonly fid: number;

  /**
   * Maximum number of messages to return in a single response
   * @type {number}
   * @memberof CastsApiListCastsByFid
   */
  readonly pageSize?: number;

  /**
   * Reverse the sort order, returning latest messages first
   * @type {boolean}
   * @memberof CastsApiListCastsByFid
   */
  readonly reverse?: boolean;

  /**
   * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
   * @type {string}
   * @memberof CastsApiListCastsByFid
   */
  readonly pageToken?: string;
}

/**
 * Request parameters for listCastsByMention operation in CastsApi.
 * @export
 * @interface CastsApiListCastsByMentionRequest
 */
export interface CastsApiListCastsByMentionRequest {
  /**
   * The FID that is mentioned in a cast
   * @type {number}
   * @memberof CastsApiListCastsByMention
   */
  readonly fid: number;

  /**
   * Maximum number of messages to return in a single response
   * @type {number}
   * @memberof CastsApiListCastsByMention
   */
  readonly pageSize?: number;

  /**
   * Reverse the sort order, returning latest messages first
   * @type {boolean}
   * @memberof CastsApiListCastsByMention
   */
  readonly reverse?: boolean;

  /**
   * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
   * @type {string}
   * @memberof CastsApiListCastsByMention
   */
  readonly pageToken?: string;
}

/**
 * Request parameters for listCastsByParent operation in CastsApi.
 * @export
 * @interface CastsApiListCastsByParentRequest
 */
export interface CastsApiListCastsByParentRequest {
  /**
   * The FID of the parent cast
   * @type {number}
   * @memberof CastsApiListCastsByParent
   */
  readonly fid?: number;

  /**
   * The parent cast\&#39;s hash
   * @type {string}
   * @memberof CastsApiListCastsByParent
   */
  readonly hash?: string;

  /**
   *
   * @type {string}
   * @memberof CastsApiListCastsByParent
   */
  readonly url?: string;

  /**
   * Maximum number of messages to return in a single response
   * @type {number}
   * @memberof CastsApiListCastsByParent
   */
  readonly pageSize?: number;

  /**
   * Reverse the sort order, returning latest messages first
   * @type {boolean}
   * @memberof CastsApiListCastsByParent
   */
  readonly reverse?: boolean;

  /**
   * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
   * @type {string}
   * @memberof CastsApiListCastsByParent
   */
  readonly pageToken?: string;
}

/**
 * CastsApi - object-oriented interface
 * @export
 * @class CastsApi
 * @extends {BaseAPI}
 */
export class CastsApi extends BaseAPI {
  /**
   *
   * @summary Get a cast by its FID and Hash.
   * @param {CastsApiGetCastByIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CastsApi
   */
  public getCastById(
    requestParameters: CastsApiGetCastByIdRequest,
    options?: AxiosRequestConfig
  ) {
    return CastsApiFp(this.configuration)
      .getCastById(requestParameters.fid, requestParameters.hash, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Fetch all casts authored by an FID.
   * @param {CastsApiListCastsByFidRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CastsApi
   */
  public listCastsByFid(
    requestParameters: CastsApiListCastsByFidRequest,
    options?: AxiosRequestConfig
  ) {
    return CastsApiFp(this.configuration)
      .listCastsByFid(
        requestParameters.fid,
        requestParameters.pageSize,
        requestParameters.reverse,
        requestParameters.pageToken,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Fetch all casts that mention an FID
   * @param {CastsApiListCastsByMentionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CastsApi
   */
  public listCastsByMention(
    requestParameters: CastsApiListCastsByMentionRequest,
    options?: AxiosRequestConfig
  ) {
    return CastsApiFp(this.configuration)
      .listCastsByMention(
        requestParameters.fid,
        requestParameters.pageSize,
        requestParameters.reverse,
        requestParameters.pageToken,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Fetch all casts by parent cast\'s FID and Hash OR by the parent\'s URL
   * @param {CastsApiListCastsByParentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CastsApi
   */
  public listCastsByParent(
    requestParameters: CastsApiListCastsByParentRequest = {},
    options?: AxiosRequestConfig
  ) {
    return CastsApiFp(this.configuration)
      .listCastsByParent(
        requestParameters.fid,
        requestParameters.hash,
        requestParameters.url,
        requestParameters.pageSize,
        requestParameters.reverse,
        requestParameters.pageToken,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

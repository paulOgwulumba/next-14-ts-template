'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ClientRequestOptions, RequestMethod, RequestOptions, Token } from '@/interface';
import { getSession } from 'next-auth/react';

export const useClient = () => {
  const { push } = useRouter();
  const baseApiUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const generateAuthHeader = useCallback((auth?: Token) => {
    const token = auth && auth.token;
    const isLoggedIn = !!token;

    if (isLoggedIn) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  }, []);

  async function handleResponse<R = any, E = any>(
    response: globalThis.Response,
    redirectIfUnauthorized = true,
  ) {
    return response.json().then((data) => {
      if (!response.ok) {
        if (response.status === 401 && redirectIfUnauthorized) {
          push('/');
        }

        const error: E = (data && data.message) || response.statusText;

        return {
          error,
          status: response.status,
          data: undefined,
        };
      }

      const responseData: R = data.data || data.message || data;

      return {
        data: responseData,
        status: response.status,
        error: undefined,
      };
    });
  }

  const request = useCallback((method: RequestMethod) => {
    /**
     * @description This method makes an API Call using the provided
     * request method and returns a promise with the response.
     * @param url The url to make the request to. The base URL of
     * Eze's API is automatically prepended to the url. This behavior can be overriden
     * by setting the `overrideDefaultBaseUrl` option to true in the third parameter.
     * @param body The body of the request.
     * @param options Extra options to modify the behaviour of the request.
     *  `overrideDefaultBaseUrl` - Set to true to override the default base URL.
     *  `headers` - Extra header object to be sent with the request.
     *  `token` - Optional token to be used for the request. If not provided, the global token is used.
     *  `redirectIfUnauthorized` - Set to true to redirect to the login page if the request returns a 401 status code.
     *  This is set to true by default.
     */
    return async function requestHandler<Response = any, Body = any, Error = any>(
      url: string,
      body?: Body,
      options?: ClientRequestOptions,
    ) {
      const requestOptions: RequestOptions = {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-client-platform': 'enterprise',
          ...generateAuthHeader(options?.token || ((await getSession()) as any)?.token),
          ...options?.headers,
        },
      };

      if (body) {
        requestOptions.headers['Content-Type'] = 'application/json';
        requestOptions.body = JSON.stringify(body);
      }

      const hideSlash = url.startsWith('/');
      const baseUrl = options?.overrideDefaultBaseUrl ? '' : baseApiUrl + (hideSlash ? '' : '/');
      const requestUrl = `${baseUrl}${url}`;

      return fetch(requestUrl, requestOptions)
        .then((response) => {
          return handleResponse<Response, Error>(response, options?.redirectIfUnauthorized);
        })
        .catch((error: Error) => {
          return { error, status: 500, data: undefined };
        });
    };
  }, []);

  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
    patch: request('PATCH'),
  };
};

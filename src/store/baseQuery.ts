import { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import axiosInstance from "../services/api";

interface IResponse<T> {
  status: number;
  data: T;
}
const getRequestConfig = (args: string | AxiosRequestConfig) => {
  if (typeof args === "string") {
    return { url: args };
  }

  return args;
};

export const queryWithAxios = async (
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  transformRequest?: (data: unknown) => void,
  params?: AxiosRequestConfig | null,
  callback?: (args: unknown, params?: unknown) => void,
  fallback?: (args: unknown, params?: unknown) => void
) => {
  try {
    const result = await axiosInstance({ method, url, ...params });
    const data = transformRequest ? transformRequest(result.data) : result.data;
    callback?.(data, params);
    return {
      data: data || null,
    };
  } catch (err) {
    fallback?.(err);
    if (!axios.isAxiosError(err)) {
      return { error: err };
    }
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

export const query = <
  Args extends AxiosRequestConfig | string = AxiosRequestConfig,
  Result = unknown,
  DefinitionExtraOptions = Record<string, unknown>
>(): BaseQueryFn<Args, Result, unknown, DefinitionExtraOptions> => {
  return async (args, api, extraOptions) => {
    try {
      const requestConfig = getRequestConfig(args);
      //@ts-expect-error no error expected
      const result = await axiosInstance({
        ...requestConfig,
        baseURL: axiosInstance.defaults.baseURL,
        headers: axiosInstance.defaults.headers,
        signal: api.signal,
        ...extraOptions,
      });

      return {
        data: result.data,
      };
    } catch (err) {
      if (!axios.isAxiosError(err)) {
        return {
          error: err,
        };
      }
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};

export const transformResponseQuery = <T, P extends unknown[]>(
  execute: (...args: P) => Promise<IResponse<T>>
): ((...args: Parameters<typeof execute>) => Promise<{ data: T }>) => {
  return async (...args) => {
    const response = await execute(...args);

    return { data: response.data };
  };
};

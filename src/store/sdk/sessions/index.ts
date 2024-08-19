import { createApi } from "@reduxjs/toolkit/query/react";
import { ISession } from "./types";
import { query, queryWithAxios } from "@/store/baseQuery";

const getSessions = () =>
  queryWithAxios("get", "/sessions", (data) => data, null);

const addSession = (newSession: ISession) =>
  queryWithAxios("post", "/sessions", (data) => data, { data: newSession });

export const _sessionsSDK = { getSessions, addSession };

export const sessionsApi = createApi({
  reducerPath: "sessionsApi",
  baseQuery: query(),
  tagTypes: ["sessions"],
  endpoints: (builder) => ({
    getSessions: builder.query<ISession[], unknown>({
      query: () => ({ url: "sessions", method: "get" }),
    }),
    createSession: builder.mutation<ISession, ISession>({
      query: (body) => ({ url: "sessions", method: "POST", body }),
    }),
  }),
});

export const {
  useGetSessionsQuery,
  useLazyGetSessionsQuery,
  useCreateSessionMutation,
} = sessionsApi;

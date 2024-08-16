import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISession } from "./types";

export const sessionsApi = createApi({
  reducerPath: "sessionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sessionapi.com/api/v1/sessions",
  }),
  endpoints: (builder) => ({
    getSessions: builder.query<ISession, undefined>({
      query: (name) => `${name}`,
    }),
    createSession: builder.query<ISession, undefined>({
      query: (name) => `${name}`,
    }),
  }),
});

export const {
  useGetSessionsQuery,
  useLazyGetSessionsQuery,
  useCreateSessionQuery,
  useLazyCreateSessionQuery,
} = sessionsApi;

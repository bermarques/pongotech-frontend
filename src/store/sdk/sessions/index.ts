import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISession } from "./types";

export const sessionsApi = createApi({
  reducerPath: "sessionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/sessions",
  }),
  tagTypes: ["Sessions"],
  endpoints: (builder) => ({
    getSessions: builder.query<ISession, ISession>({
      query: (name) => `${name}`,
    }),
    createSession: builder.mutation<ISession, ISession>({
      query(body) {
        return { url: `post`, method: "POST", body };
      },
    }),
  }),
});

export const {
  useGetSessionsQuery,
  useLazyGetSessionsQuery,
  useCreateSessionMutation,
} = sessionsApi;

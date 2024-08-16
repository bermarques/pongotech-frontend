import { sessionsApi } from "./sessions";

export const apiMiddleware = [sessionsApi.middleware];

export const apiReducers = {
  [sessionsApi.reducerPath]: sessionsApi.reducer,
};

import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware, apiReducers } from "./sdk";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: apiReducers,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...apiMiddleware);
    return middleware;
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

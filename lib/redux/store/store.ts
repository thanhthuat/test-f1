import { configureStore } from "@reduxjs/toolkit";

import listMovieSlice from '../get-list-top-menu/get-list-top.reducer';
import searchListMovieSlice from '../search-list/search-list.reducer';
import { commonReducer } from "../common";
export function makeStore() {
  return configureStore({
    reducer: {
      movie:listMovieSlice,
      commonReducer:commonReducer,
      searchListMovieSlice:searchListMovieSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
}
export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import categories from "../category/category.reducer";
import news from "../news/news.reducer";
import listMovieSlice from '../get-list-top-menu/get-list-top.reducer';
export function makeStore() {
  return configureStore({
    reducer: {
      categories: categories,
      news: news,
      movie:listMovieSlice
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

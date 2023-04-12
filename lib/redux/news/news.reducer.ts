import { createSlice } from "@reduxjs/toolkit";
import { TypeNews, TypeStateNews } from "lib/models/interface";
import { fetchNews } from "./news.actions";

const initialState: TypeStateNews = {
  news: [],
  status: "idle",
};

const categoriesSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload as TypeNews[];
      state.status = "idle";
    });
  },
});

export default categoriesSlice.reducer;

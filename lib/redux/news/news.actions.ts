import { createAsyncThunk } from "@reduxjs/toolkit";

import news_API from '../../service/new'

export const fetchNews= createAsyncThunk('news/getAllNews',async (thunkApi)=>{
    const response = await news_API.getAllNews();
    return response;
})
          
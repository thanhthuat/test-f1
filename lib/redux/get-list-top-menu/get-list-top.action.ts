import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "lib/api/tmdbApi";
import { responeHttp } from "lib/models/interface";



export const getListTop = createAsyncThunk('movie/getMovieTopRate',async (payload:{page:number},thunkApi)=>{
    const response = await  tmdbApi.getMoviesList("now_playing",payload.page ,{})
    return response;
})

export const getDetailNew = createAsyncThunk('movie/getDetailMovie', async (payload:{id:number | string} ,thunkApi) => {
    const response = await tmdbApi.detail("movie",+ payload.id,{})
    return response
})
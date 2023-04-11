import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apigetData } from "apis/getapi";
import tmdbApi from "apis/tmdbApi";



export const getListTop = createAsyncThunk('movie/getAllUsers',async (thunkApi)=>{
    const response = await tmdbApi.getMoviesList("top_rated", {})

    const data = await response
    return data;
})

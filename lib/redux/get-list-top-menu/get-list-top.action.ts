import { IresponeMovieDetail } from './../../models/interface';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "lib/api/tmdbApi";
import { responeHttp } from "lib/models/interface";
import { clearLoading, isLoading } from "../common";

export const getListTop = createAsyncThunk(
  "movie/getMovieTopRate",
  async (payload: { page: number }, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const response:any = await tmdbApi.getMoviesList("now_playing", payload.page, {});
      thunkAPI.dispatch(clearLoading());
      return response;
    } catch (error) {
      thunkAPI.dispatch(clearLoading());
      return error
    }
  }
);

export const getDetailNew = createAsyncThunk(
  "movie/getDetailMovie",
  async (payload: { id: number | string }, thunkApi) => {
    const response = await tmdbApi.detail("movie", +payload.id, {});
    return response;
  }
);

export const searchList = createAsyncThunk("movie/search", async (payload:{params:string},thunkAPI)=>{
  try{
     thunkAPI.dispatch(isLoading());
     const response = await tmdbApi.search("movie",payload.params)
     thunkAPI.dispatch(clearLoading());
     return response
  }catch(error){
      thunkAPI.dispatch(clearLoading());
      return error
  }
  
})
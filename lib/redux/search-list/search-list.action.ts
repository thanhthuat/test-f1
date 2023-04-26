import { IresponeMovieDetail } from './../../models/interface';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "lib/api/tmdbApi";
import { responeHttp } from "lib/models/interface";
import { clearLoading, isLoading } from "../common";
const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
export const searchList = createAsyncThunk("movie/search", async (payload:{params:string},thunkAPI)=>{
  try{
     thunkAPI.dispatch(isLoading());
     
     const response:any = await tmdbApi.search("movie",payload.params)
    await wait(500)
     thunkAPI.dispatch(clearLoading());
     return response
  }catch(error){
      thunkAPI.dispatch(clearLoading());
      return error
  }
  
})
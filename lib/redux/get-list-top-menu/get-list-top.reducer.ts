import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getListTop ,getDetailNew } from "./get-list-top.action";
import { IresponeMovie, IresponeMovieDetail } from "lib/models/interface";
interface IlistMovieSlice{
    topmovie:IresponeMovie[];
    detailmovie: IresponeMovieDetail;
}
const initialState:IlistMovieSlice ={
    topmovie:[],
    detailmovie:  {} as IresponeMovieDetail
} ;

const listMovieSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getListTop.fulfilled ,(state,action)=>{
            state.topmovie = action.payload.data.results
        })
         .addCase(getListTop.rejected, (state) => {
        state.topmovie = [];
         })
        
        .addCase(getDetailNew.fulfilled ,(state,action)=>{
             state.detailmovie = action.payload.data
        })
         .addCase(getDetailNew.rejected, (state) => {
      
      })
    }
})

export default listMovieSlice.reducer ;
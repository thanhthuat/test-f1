import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchList } from "./search-list.action";
import { IresponeMovie, IresponeMovieDetail } from "lib/models/interface";
interface IlistMovieSlice{
    topmovie:IresponeMovie[];
    detailmovie: IresponeMovieDetail;
    page: number;
}
const initialState:IlistMovieSlice ={
    topmovie: [],
    detailmovie: {} as IresponeMovieDetail,
    page:0,
   
} ;

const searchListMovieSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(searchList.fulfilled ,(state,action)=>{
            console.log("action",action)
            state.topmovie = action.payload.data.results;
            state.page =action.payload.data.page ;
            
        })
         .addCase(searchList.rejected, (state) => {
        state.topmovie = [];
         })
        
     
    }
})

export default searchListMovieSlice.reducer ;
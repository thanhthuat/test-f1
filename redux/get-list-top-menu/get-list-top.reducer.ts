import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getListTop } from "./get-list-top.action";
const initialState ={
    topmovie:[],
    value:10
} as any;

const listMovieSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value ++;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getListTop.fulfilled ,(state,action)=>{
            state.topmovie = action.payload.results
        })
    }
})

export default listMovieSlice.reducer ;
import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./category.action";
import { TypeCategories, TypeStateCategories } from "lib/models/interface";

const initialState : TypeStateCategories ={
    categories : [],
    status : "idle"
} ;

const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
      
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.fulfilled ,(state,action)=>{
            state.categories =action.payload as TypeCategories[]
            state.status = "idle"
        })
        
    }
})

export default categoriesSlice.reducer ;
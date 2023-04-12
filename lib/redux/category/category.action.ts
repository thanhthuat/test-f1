import { createAsyncThunk } from "@reduxjs/toolkit";
import category_API from "lib/service/category";

export const fetchCategories= createAsyncThunk('user/getAllCategories',async (thunkApi)=>{
    const response = await category_API.getCategory();
    return response;
})
          
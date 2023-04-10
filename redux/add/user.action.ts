import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apigetData } from "apis/getapi";



export const fetchUsers = createAsyncThunk('user/getAllUsers',async (thunkApi)=>{
    const response = await apigetData('/iiii/data')

    const data = await response
    return data;
})

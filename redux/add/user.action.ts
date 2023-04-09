import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchUsers = createAsyncThunk('user/getAllUsers',async (thunkApi)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
    const data = await response.json();
    return data;
})

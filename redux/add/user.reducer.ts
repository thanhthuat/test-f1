import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "./user.action";
const initialState ={
    entities:[],
    value:10
} as any;

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value ++;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled ,(state,action)=>{
            state.entities = action.payload
        })
    }
})

export default userSlice.reducer ;
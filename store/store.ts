import {configureStore} from '@reduxjs/toolkit' ;
import  userReducer from '../redux/add/user.reducer'
export function makeStore(){
    return configureStore({
        reducer:{
            user:userReducer,
        }
    })
}
export const store = makeStore();

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch ;
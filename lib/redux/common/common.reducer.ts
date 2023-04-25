import { createReducer } from '@reduxjs/toolkit';
import { clearLoading, isLoading } from './common.action';

interface UsersState {
  isLoading: boolean;
}

const initialState: UsersState = {
  isLoading: false,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(isLoading, (state) => {
      state.isLoading = true;
    })
    .addCase(clearLoading, (state) => {
      state.isLoading = false;
    });
});
export default commonReducer;

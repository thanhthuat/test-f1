import { createAction } from '@reduxjs/toolkit';
import { COMMON_LOADING, COMMON_CLEAR_LOADING } from '../action.type';
export const isLoading = createAction(COMMON_LOADING);
export const clearLoading = createAction(COMMON_CLEAR_LOADING);
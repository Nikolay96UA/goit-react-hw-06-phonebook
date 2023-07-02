import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filterValue',
  initialState: initialState.filterValue,
  reducers: {
    filtered(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filtered } = filterSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'View All',
  reducers: {
    addFilter(state, { payload }) {
      console.log(state.filter);
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;

// Selectors
export const getFilter = state => state.filter;

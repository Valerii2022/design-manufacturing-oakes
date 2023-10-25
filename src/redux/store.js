import { configureStore } from '@reduxjs/toolkit';
// import { filterReducer } from './filterSlice';

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

const initialState = {
  filter: 'View All',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    filter: rootReducer,
  },
});

// Selectors
export const getFilter = state => state.filter;

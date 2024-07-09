import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeColorSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

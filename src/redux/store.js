import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeColorSlice';
import { apiSlice } from './apiSlice';
import heroBgVideoReducer from "./heroBgVideoSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    heroBgVideo : heroBgVideoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

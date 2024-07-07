import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeColorSlice'
export const store = configureStore({
  reducer: {
    theme : themeReducer
  },
})
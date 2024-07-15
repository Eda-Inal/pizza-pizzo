import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzasSlice'

export const store = configureStore({
  reducer: {
pizza:pizzaReducer
  },
})
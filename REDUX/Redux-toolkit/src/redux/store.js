import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '../features/counter/counterSlice.jsx'
export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
})
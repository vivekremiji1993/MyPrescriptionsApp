import { configureStore } from '@reduxjs/toolkit';
import prescriptionReducer from './prescriptionSlice';

export const store = configureStore({
  reducer: {
    prescriptions: prescriptionReducer,
  },
});
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prescriptions: [],
  medicines: [],
  isLoading: false,
  error: null,
};

const prescriptionSlice = createSlice({
  name: 'prescriptions',
  initialState,
  reducers: {
    addPrescription: (state, action) => {
      state.prescriptions.push(action.payload);
    },
    setMedicines: (state, action) => {
      state.medicines = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearMedicines: (state) => {
      state.medicines = [];
    },
  },
});

export const { 
  addPrescription, 
  setMedicines, 
  setLoading, 
  setError,
  clearMedicines
} = prescriptionSlice.actions;

export const selectPrescriptions = (state) => state.prescriptions.prescriptions;
export const selectMedicines = (state) => state.prescriptions.medicines;
export const selectIsLoading = (state) => state.prescriptions.isLoading;
export const selectError = (state) => state.prescriptions.error;

export default prescriptionSlice.reducer;
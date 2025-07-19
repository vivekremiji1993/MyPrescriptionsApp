import { searchMedicines } from '../api/prescriptionApi';
import { setMedicines, setLoading, setError } from './prescriptionSlice';

export const fetchMedicines = (query) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    const response = await searchMedicines(query);
    
    if (response.success) {
      dispatch(setMedicines(response.data));
    } else {
      dispatch(setError('Failed to fetch medicines'));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
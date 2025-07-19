export const searchMedicines = async (query) => {
  try {
    const response = await fetch(
      `https://dev.api.doctorondial.com/prescriptions/demo-get-medication-list?key=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
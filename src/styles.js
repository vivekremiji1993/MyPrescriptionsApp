import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container and Layout Styles
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  halfWidth: {
    width: '48%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circleContainer: {
    backgroundColor: 'hsla(0, 0%, 89%, 0.38)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  // Text Styles
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2196F3',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2196F3',
  },
  screenSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#444',
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  characterCount: {
    fontSize: 12,
    color: '#999',
    marginTop: -10,
    marginBottom: 15,
    alignSelf: 'flex-end',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },

  // Input and Picker Styles
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  dropinput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000',
    justifyContent: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  durationInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 15,
    marginRight: 10,
    fontSize: 16,
    color: '#000',
  },
  durationPicker: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000',
    height: 50,
  },

  // Button Styles
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#ffffffff',
    borderColor: '#2196F3',
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  previewButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButtonText: {
    color: '#2196F3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  previewButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 8,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#2196F3',
    fontSize: 16,
  },

  // Card Styles
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  prescriptionId: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  prescriptionDate: {
    fontSize: 14,
    color: '#666',
  },
  medicineList: {
    marginTop: 5,
  },
  medicineItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingVertical: 4,
  },
  medicineName: {
    fontSize: 15,
    color: '#333',
    flex: 3,
  },
  medicineDuration: {
    fontSize: 15,
    color: '#666',
    flex: 1,
    textAlign: 'right',
  },
  previewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  previewDrugName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  previewDetails: {
    fontSize: 14,
    color: '#666',
  },
  removeText: {
    color: 'red',
    fontSize: 14,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    opacity: 0.6,
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconButton: {
    padding: 4,
  },

  // Bottom Sheet Styles
  bottomSheetContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  bottomSheetWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheetDragIcon: {
    backgroundColor: '#ccc',
    width: 40,
    height: 5,
    borderRadius: 3,
  },
  modalScrollView: {
    marginTop: 10,
  },
  closeIconButton: {
    margin: 0,
    padding: 0,
    alignSelf: 'flex-end',
  },
  removeIconButton: {
    margin: 0,
    padding: 0,
    alignSelf: 'flex-end'
  },

  // Prescription Card Styles
  presCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  presCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  presId: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    letterSpacing: 0.5,
  },
  presDate: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  presMedicineList: {
    marginTop: 5,
  },
  presMedicineItem: {
    paddingVertical: 8,
    borderBottomWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  presMedicineName: {
    fontSize: 15,
    color: '#333',
    flex: 4,
    fontWeight: '400',
  },
  presMedicineDuration: {
    fontSize: 15,
    color: '#666',
    flex: 1,
    textAlign: 'right',
    fontWeight: '500',
  },
});
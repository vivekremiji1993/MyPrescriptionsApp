import React from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, ActivityIndicator, TextInput, StyleSheet } from 'react-native';

const MedicineModal = ({ 
  visible, 
  medicines = [], 
  searchQuery,
  onSearchChange,
  onSelect, 
  onClose, 
  isLoading 
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Medicine</Text>
          
          <TextInput
            style={styles.searchInput}
            placeholder="Search medicines..."
            value={searchQuery}
            onChangeText={onSearchChange}
            autoFocus={true}
          />
          
          {isLoading ? (
            <ActivityIndicator size="large" color="#2196F3" />
          ) : (
            <FlatList
              data={medicines}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.medicineItem}
                  onPress={() => onSelect(item)}
                >
                  <Text>{item?.name || 'Unnamed Medicine'}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => item?.name || index.toString()}
              ListEmptyComponent={
                <Text style={styles.emptyText}>
                  {searchQuery ? 'No matching medicines found' : 'Search for medicines'}
                </Text>
              }
            />
          )}
          
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    textAlign: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  medicineItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MedicineModal;
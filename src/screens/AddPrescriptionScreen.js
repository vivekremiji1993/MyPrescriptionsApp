import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Modal, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from 'react-native-paper';
import MedicineModal from '../components/MedicineModal';
import PreviewMedicinesModal from '../components/PreviewMedicinesModal';
import { styles } from '../styles';
import { addPrescription, clearMedicines } from '../store/prescriptionSlice';
import { fetchMedicines } from '../store/thunk';
import { selectMedicines, selectIsLoading, selectError } from '../store/prescriptionSlice';

const AddPrescriptionScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allMedicines = useSelector(selectMedicines);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  const [medicine, setMedicine] = useState('');
  const [dosage, setDosage] = useState('');
  const [duration, setDuration] = useState('days');
  const [durationValue, setDurationValue] = useState('1');
  const [method, setMethod] = useState('oral');
  const [quantity, setQuantity] = useState('21');
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [previewMedicines, setPreviewMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [previewModalVisible, setPreviewModalVisible] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(clearMedicines());
    };
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMedicines(allMedicines);
    } else {
      const filtered = allMedicines.filter(med => 
        med.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMedicines(filtered);
    }
  }, [searchQuery, allMedicines]);

  const handleSearch = () => {
    if (medicine.trim()) {
      dispatch(fetchMedicines(medicine));
      setSearchModalVisible(true);
    }
  };

  const handleMedicineSelect = (selectedMedicine) => {
    setMedicine(selectedMedicine.name);
    setSearchModalVisible(false);
    setSearchQuery('');
  };

  const handleAddDrug = () => {
    if (!medicine || !dosage || !durationValue) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }
    
    const newMedicine = {
      id: Date.now().toString(),
      medicine,
      dosage,
      duration: `${durationValue} ${duration}`,
      method,
      quantity,
    };
    
    setPreviewMedicines([...previewMedicines, newMedicine]);
    setMedicine('');
    setDosage('');
    setDurationValue('1');
    setQuantity('21');
  };

  const handleRemoveMedicine = (id) => {
    setPreviewMedicines(previewMedicines.filter(item => item.id !== id));
  };

  const handleSaveAndContinue = () => {
    if (previewMedicines.length === 0) return;

    const newPrescription = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      medicines: previewMedicines
    };

    dispatch(addPrescription(newPrescription));
    navigation.goBack();
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={[styles.scrollContainer, { paddingBottom: 30 }]}
    >
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.circleContainer}>
          <IconButton
            icon="chevron-left"
            size={24}
            iconColor="#2196F3"
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.screenTitle}>Add Drugs</Text>
      </View>
      
      <Text style={styles.screenSubtitle}>Please enter prescription details.</Text>

      {/* Drug Search Input */}
      <Text style={styles.sectionLabel}>Drug to prescribe</Text>
      <TextInput
        style={styles.input}
        placeholder="Search drug name"
        placeholderTextColor="#888"
        value={medicine}
        onChangeText={(text) => {
          setMedicine(text);
          setSearchQuery(text);
        }}
        onSubmitEditing={handleSearch}
        maxLength={50} // Prevent extremely long inputs
        returnKeyType="search" // Shows search button on keyboard
        multiline={false} // Keep single line
        numberOfLines={1} // Ensure single line display
        ellipsizeMode="tail"
      />

      {/* Dosage Input */}
      <Text style={styles.sectionLabel}>Dosage</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Add dosage notes"
        placeholderTextColor="#888"
        value={dosage}
        onChangeText={setDosage}
        multiline
        maxLength={35}
      />
      <Text style={styles.characterCount}>max. 35 characters</Text>

      {/* Duration Section */}
      <Text style={styles.sectionLabel}>Duration</Text>
      <View style={styles.durationContainer}>
        <TextInput
          style={styles.durationInput}
          value={durationValue}
          onChangeText={setDurationValue}
          keyboardType="numeric"
        />
        <View style={{ width: '50%', borderWidth: 1, borderColor: '#ddd', borderRadius: 20, overflow: 'hidden' }}>
        <Picker
          style={[styles.durationPicker, { borderWidth: 1, borderColor: '#ddd' }]}
          selectedValue={duration}
          onValueChange={setDuration}
          dropdownIconColor="#2b2b2b"
        >
          <Picker.Item label="Days" value="days" />
          <Picker.Item label="Weeks" value="weeks" />
          <Picker.Item label="Months" value="months" />
        </Picker>
        </View>
      </View>

      {/* Method and Quantity Row */}
      <View style={styles.rowContainer}>
        <View style={styles.halfWidth}>
          <Text style={styles.sectionLabel}>Method</Text>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 20, overflow: 'hidden' }}>
          <Picker
            selectedValue={method}
            onValueChange={setMethod}
            style={[styles.dropinput]}
            dropdownIconColor="#2b2b2b"
          >
            <Picker.Item label="Oral" value="oral" />
            <Picker.Item label="Canula" value="canula" />
          </Picker>
          </View>
        </View>
        <View style={styles.halfWidth}>
          <Text style={styles.sectionLabel}>Quantity</Text>
          <TextInput
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Add Drug Button */}
      <TouchableOpacity 
        style={[
          styles.addButton, 
          { marginTop: 20, width: '100%', marginBottom: 20, alignSelf: 'center' }
        ]}
        onPress={handleAddDrug}
      >
        <Text style={styles.addButtonText}>Add Drug</Text>
      </TouchableOpacity>

      {/* Preview Medicines Button */}
      {previewMedicines.length > 0 && (
        <TouchableOpacity 
          style={styles.previewButton}
          onPress={() => setPreviewModalVisible(true)}
        >
          <Text style={styles.previewButtonText}>
            Preview Medicines ({previewMedicines.length})
          </Text>
        </TouchableOpacity>
      )}

      {/* Save Button */}
      <TouchableOpacity 
        style={[styles.saveButton, previewMedicines.length === 0 && styles.disabledButton]}
        onPress={handleSaveAndContinue}
        disabled={previewMedicines.length === 0}
      >
        <Text style={styles.buttonText}>Save & Continue</Text>
      </TouchableOpacity>

      {/* Modals */}
      <MedicineModal
        visible={searchModalVisible}
        medicines={filteredMedicines}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelect={handleMedicineSelect}
        onClose={() => {
          setSearchModalVisible(false);
          setSearchQuery('');
        }}
        isLoading={isLoading}
      />

      <PreviewMedicinesModal
        visible={previewModalVisible}
        onClose={() => setPreviewModalVisible(false)}
        previewMedicines={previewMedicines}
        onRemoveMedicine={handleRemoveMedicine}
      />
    </ScrollView>
  );
};

export default AddPrescriptionScreen;
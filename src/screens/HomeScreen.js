import React, { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import PrescriptionCard from '../components/PrescriptionCard';
import { styles } from '../styles';
import { selectPrescriptions } from '../store/prescriptionSlice';

const HomeScreen = ({ navigation }) => {
  const allPrescriptions = useSelector(selectPrescriptions);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Filter prescriptions based on search query
  const filteredPrescriptions = allPrescriptions.filter(prescription => {
    const searchLower = searchQuery.toLowerCase();
    return (
      prescription.id.toString().includes(searchLower) ||
      prescription.date.toLowerCase().includes(searchLower) ||
      prescription.medicines.some(medicine => 
        medicine.medicine.toLowerCase().includes(searchLower)
      )
    );
  });

  const handleAddPrescription = () => {
    navigation.navigate('AddPrescription');
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchQuery(''); // Clear search when closing
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {isSearchVisible ? (
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10, height: 40 }]}
            placeholder="Search prescriptions..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus={true}
          />
        ) : (
          <Text style={styles.screenTitle}>My Prescriptions</Text>
        )}
        
        <View style={styles.headerIcons}>
          <View style={[styles.circleContainer, isSearchVisible && { marginBottom: 10 }]}>
            <IconButton
              icon={isSearchVisible ? "close" : "magnify"}
              size={24}
              iconColor="#2196F3"
              onPress={toggleSearch}
              style={styles.iconButton}
            />
          </View>
          {!isSearchVisible && (
            <IconButton
              icon="plus-circle"
              size={24}
              iconColor="#2196F3"
              onPress={handleAddPrescription}
              style={styles.iconButton}
            />
          )}
        </View>
      </View>

      {/* Content Section */}
      <FlatList
        data={filteredPrescriptions}
        renderItem={({ item }) => (
          <PrescriptionCard 
            prescription={item} 
            //onPress={() => navigation.navigate('PrescriptionDetail', { prescription: item })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={filteredPrescriptions.length === 0 ? styles.emptyContainer : styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {searchQuery ? 'No matching prescriptions found' : 'No prescriptions found'}
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
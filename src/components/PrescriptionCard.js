import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const PrescriptionCard = ({ prescription }) => {

  return (
    <View style={styles.presCard}>
      <View style={styles.presCardHeader}>
        <Text style={styles.presId}>PRE{String(prescription.id).padStart(3, '0')}</Text>
        <Text style={styles.presDate}>{prescription.date}</Text>
      </View>
      
      <View style={styles.presMedicineList}>
        {prescription.medicines?.map((medicine, index) => (
          <View key={`${medicine.medicine}-${index}`} style={styles.presMedicineItem}>
            <Text style={styles.presMedicineName}>
              {medicine.medicine}
              {medicine.dosage && ` ${medicine.dosage}`}
              {medicine.form && ` ${medicine.form}`}
              {medicine.volume && ` ${medicine.volume}`}
            </Text>
            <Text style={styles.presMedicineDuration}>
              {medicine.duration}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PrescriptionCard;
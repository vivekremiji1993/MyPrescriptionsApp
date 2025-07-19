import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { IconButton } from 'react-native-paper';
import { styles } from '../styles';

const PreviewMedicinesModal = ({
  visible,
  onClose,
  previewMedicines,
  onRemoveMedicine
}) => {
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current.open();
    } else {
      bottomSheetRef.current.close();
    }
  }, [visible]);

  return (
    <RBSheet
      ref={bottomSheetRef}
      height={500}
      closeOnDragDown={true}
      closeOnPressMask={true}
      onClose={onClose}
      customStyles={{
        container: styles.bottomSheetContainer,
        wrapper: styles.bottomSheetWrapper,
        draggableIcon: styles.bottomSheetDragIcon
      }}
    >
      <View style={styles.bottomSheetContent}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>List of medicines ({previewMedicines.length})</Text>

        </View>

        <ScrollView style={styles.modalScrollView}>
          {previewMedicines.length > 0 ? (
            previewMedicines.map((item) => (
              <View key={item.id} style={styles.card}>
                <View style={styles.medicineHeader}>
                  <Text style={styles.medicineName}>{item.medicine}</Text>
                  <IconButton
                    icon="delete-outline"
                    size={22}
                    iconColor="#ff4444"
                    onPress={() => onRemoveMedicine(item.id)}
                    style={styles.removeIconButton}
                  />
                </View>
                
                {item.dosage && (
                  <Text style={styles.sectionLabel}>Dosage Note</Text>
                )}
                <Text style={styles.previewDetails}>{item.dosage}</Text>
                
                <View style={styles.row}>
                  <Text style={styles.previewDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Duration: </Text>
                    {item.duration}
                  </Text>
                  <Text style={styles.previewDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Qty: </Text>
                    {item.quantity}
                  </Text>
                  <Text style={styles.previewDetails}>
                    {item.method}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No medicines added yet</Text>
          )}
        </ScrollView>
      </View>
    </RBSheet>
  );
};

export default PreviewMedicinesModal;
// components/SavingsEntry.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const SavingsEntry = ({ text }) => (
  <View style={styles.entryCard}>
    <FontAwesomeIcon icon={faDollarSign} size={24} style={styles.entryIcon} />
    <Text style={styles.entryText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  entryCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryIcon: {
    marginRight: 12,
    color: '#007bff',
  },
  entryText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SavingsEntry;

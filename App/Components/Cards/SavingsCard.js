import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faPlus ,faCalendar, faPlusCircle, faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;

const SavingsCard = ({ isSelected, onPress }) => (
    
  <TouchableOpacity
    style={[styles.card, isSelected ? styles.selectedCard : styles.defaultCard]}
    onPress={onPress}
  >
    {isSelected ? (
      <LinearGradient
        colors={['#003366', '#006699']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.cardContent}>
        <FontAwesomeIcon icon={faPlus} size={20}  />
          <Text style={styles.cardTitle}>Savings</Text>
        </View>
      </LinearGradient>
    ) : (
      <View style={styles.cardContent}>
              <FontAwesomeIcon icon={faPlus} size={20}  />
        <Text style={[styles.cardTitle, styles.defaultText]}>Savings</Text>
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    width: screenWidth * 0.25, // 30% of screen width
    height: 100,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gainsboro'
  },
  selectedCard: {
    // No border for selected card, gradient applied
  },
  defaultCard: {
    borderWidth: 2,
    borderColor: 'gainsboro',
  },
  gradient: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardContent: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    marginBottom: 8,
    color: '#fff',
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  defaultText: {
    color: 'black',
  },
});

export default SavingsCard;

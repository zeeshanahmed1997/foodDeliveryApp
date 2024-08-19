import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const screenWidth = Dimensions.get('window').width;

const SavingsCard = ({ isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.card, isSelected ? styles.selectedCard : styles.defaultCard]}
    onPress={onPress}
  >
    {isSelected ? (
      <LinearGradient
        colors={['#2FDAFF', '#0E33F3']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.cardContent}>
          <Image
            source={require('../../assets/icons/plus.png')}  // Path to your add icon
            style={styles.icon} // Styling for the icon
          />
          <Text style={styles.cardTitle}>Savings</Text>
        </View>
      </LinearGradient>
    ) : (
      <View style={styles.cardContent}>
        <Image
          source={require('../../assets/icons/plus.png')}  // Path to your add icon
          style={styles.icon} // Styling for the icon
        />
        <Text style={[styles.cardTitle, styles.defaultText]}>Savings</Text>
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    width: screenWidth * 0.25, // 25% of screen width
    height: 100,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
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
    width: 40,  // Set the size of the icon
    height: 40, // Set the size of the icon
    marginBottom: 8,
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

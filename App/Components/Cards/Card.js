import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({ cardType, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected ? styles.selectedCard : styles.defaultCard]}
      onPress={() => onPress(cardType)}
    >
      {isSelected ? (
        <LinearGradient
          colors={['#003366', '#003366']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.cardContent}>
            <Image source={getIcon(cardType)} style={styles.icon} />
            <Text style={styles.cardTitle}>{getCardTitle(cardType)}</Text>
            <Text style={styles.cardValue}>{getCardValue(cardType)}</Text>
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.cardContent}>
          <Image source={getIcon(cardType)} style={styles.icon} />
          <Text style={[styles.cardTitle, styles.defaultText]}>{getCardTitle(cardType)}</Text>
          <Text style={[styles.cardValue, styles.defaultText]}>{getCardValue(cardType)}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

// Load different images for each card type
const getIcon = (cardType) => {
  switch (cardType) {
    case 'salary': return require('../../assets/icons/wages.png'); // Replace with your image paths
    case 'expenses': return require('../../assets/icons/cost.png');
    case 'savings': return require('../../assets/icons/saving.png');
    default: return '';
  }
};

const getCardTitle = (cardType) => {
  switch (cardType) {
    case 'salary': return 'Total Salary';
    case 'expenses': return 'Monthly Expenses';
    case 'savings': return 'Monthly Savings';
    default: return '';
  }
};

const getCardValue = (cardType) => {
  switch (cardType) {
    case 'salary': return '$5,000';
    case 'expenses': return '$2,000';
    case 'savings': return '$3,000';
    default: return '';
  }
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    width: 150,
    height: 120,
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
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  icon: {
    width: 40,  // Set the width of the image icon
    height: 40, // Set the height of the image icon
    position: 'absolute',
    top: 8, // Adjust the distance from the top
    left: 10, // Adjust the distance from the right
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: 50, // Adjust margin to avoid overlap with the icon
    top: 0, // Adjust the distance from the top
    left: 10, // Adjust the distance from the right
  },
  cardValue: {
    fontSize: 18,
    position: 'absolute',
    top: 80, // Adjust the distance from the top
    left: 40, // Adjust the distance from the right
  },
  defaultText: {
    color: 'black', // Color for non-selected cards
  },
});

export default Card;

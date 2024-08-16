// Card.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({ cardType, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected ? styles.selectedCard : styles.defaultCard]}
      onPress={() => onPress(cardType)}
    >
      {isSelected ? (
        <LinearGradient
          colors={['#003366', '#006699']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.cardContent}>
            <Text style={styles.icon}>{getIcon(cardType)}</Text>
            <Text style={styles.cardTitle}>{getCardTitle(cardType)}</Text>
            <Text style={styles.cardValue}>{getCardValue(cardType)}</Text>
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.cardContent}>
          <Text style={styles.icon}>{getIcon(cardType)}</Text>
          <Text style={[styles.cardTitle, styles.defaultText]}>{getCardTitle(cardType)}</Text>
          <Text style={[styles.cardValue, styles.defaultText]}>{getCardValue(cardType)}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const getIcon = (cardType) => {
  switch (cardType) {
    case 'salary': return '💵';
    case 'expenses': return '💳';
    case 'savings': return '💰';
    case 'additional1': return '📊';
    case 'additional2': return '📈';
    default: return '';
  }
};

const getCardTitle = (cardType) => {
  switch (cardType) {
    case 'salary': return 'Total Salary';
    case 'expenses': return 'Monthly Expenses';
    case 'savings': return 'Monthly Savings';
    case 'additional1': return 'Additional Card 1';
    case 'additional2': return 'Additional Card 2';
    default: return '';
  }
};

const getCardValue = (cardType) => {
  switch (cardType) {
    case 'salary': return '$5,000';
    case 'expenses': return '$2,000';
    case 'savings': return '$3,000';
    case 'additional1': return '$1,000';
    case 'additional2': return '$500';
    default: return '';
  }
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    width: 150,
    height: 150,
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
  cardValue: {
    fontSize: 18,
  },
  defaultText: {
    color: 'black', // Color for non-selected cards
  },
});

export default Card;

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../assets/Styles/cardsStyles'; // Update with the correct path

const BudgetCard = ({ isSelected, onPress }) => (
  <TouchableOpacity
    style={[commonStyles.card, isSelected ? commonStyles.selectedCard : commonStyles.defaultCard]}
    onPress={onPress}
  >
    {isSelected ? (
      <LinearGradient
        colors={['#2FDAFF', '#0E33F3']}
        style={commonStyles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={commonStyles.cardContent}>
          <Image
            source={require('../../assets/icons/dollar.png')}
            style={commonStyles.icon}
          />
          <Text style={commonStyles.cardTitle}>Budget</Text>
        </View>
      </LinearGradient>
    ) : (
      <View style={commonStyles.cardContent}>
        <Image
          source={require('../../assets/icons/dollar.png')}
          style={commonStyles.icon}
        />
        <Text style={[commonStyles.cardTitle, commonStyles.defaultText]}>Budget</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default BudgetCard;

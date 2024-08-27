import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../assets/Styles/cardsStyles'; // Update with the correct path

const SavingsCard = ({ isSelected, onPress }) => (
  <TouchableOpacity
    style={[commonStyles.card, isSelected ? commonStyles.selectedCard : commonStyles.defaultCard]}
    onPress={onPress}
  >
    {isSelected ? (
      <LinearGradient
        colors={['#003366', '#003366']}
        style={commonStyles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={commonStyles.cardContent}>
          <Image
            source={require('../../assets/icons/plus.png')}
            style={commonStyles.icon}
          />
          <Text style={commonStyles.cardTitle}>Savings</Text>
        </View>
      </LinearGradient>
    ) : (
      <View style={commonStyles.cardContent}>
        <Image
          source={require('../../assets/icons/plus.png')}
          style={commonStyles.icon}
        />
        <Text style={[commonStyles.cardTitle, commonStyles.defaultText]}>Savings</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default SavingsCard;

// HomeScreen.js
import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Animated } from 'react-native';
import Card from '../Components/Cards/Card'; // Adjust the import path as needed
import SavingsCard from '../Components/Cards/SavingsCard'; // Adjust the import path as needed
import RemindCard from '../Components/Cards/RemindCard'; // Adjust the import path as needed
import BudgetCard from '../Components/Cards/BudgetCard'; // Adjust the import path as needed
import SavingsEntry from '../Components/Enteries/SavingsEntry'; // Adjust the import path as needed
import RemindEntry from '../Components/Enteries/RemindEntry'; // Adjust the import path as needed
import BudgetEntry from '../Components/Enteries/BudgetEntry'; // Adjust the import path as needed

function HomeScreen({ navigation }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedNewCard, setSelectedNewCard] = useState(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleCardPress = (cardType) => {
    setSelectedCard(cardType);
    // Navigate to another screen or perform an action
    // navigation.navigate('DetailsScreen', { cardType });
  };

  const handleNewCardPress = (cardType) => {
    setSelectedNewCard(cardType);
  };

  // Sample entries for each card type
  const entries = {
    savings: [
      'Entry 1: $500',
      'Entry 2: $200',
      'Entry 3: $350',
      'Entry 4: $150',
    ],
    remind: [
      'Reminder 1: Meeting at 10 AM',
      'Reminder 2: Call the client',
      'Reminder 3: Submit report',
    ],
    budget: [
      'Budget 1: $1000 for groceries',
      'Budget 2: $500 for entertainment',
      'Budget 3: $200 for utilities',
    ],
  };

  const renderEntries = () => {
    if (selectedNewCard) {
      return (
        <View style={styles.entriesContainer}>
          {entries[selectedNewCard].map((entry, index) => {
            switch (selectedNewCard) {
              case 'savings':
                return <SavingsEntry key={index} text={entry} />;
              case 'remind':
                return <RemindEntry key={index} text={entry} />;
              case 'budget':
                return <BudgetEntry key={index} text={entry} />;
              default:
                return null;
            }
          })}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.cardContainer}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        pagingEnabled
      >
        {['salary', 'expenses', 'savings', 'additional1', 'additional2'].map((cardType, index) => (
          <Card
            key={cardType}
            cardType={cardType}
            isSelected={selectedCard === cardType}
            onPress={handleCardPress}
          />
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {['salary', 'expenses', 'savings', 'additional1', 'additional2'].map((_, index) => {
          const inputRange = [(index - 1) * 150, index * 150, (index + 1) * 150];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: 'clamp'
          });
          const dotOpacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, { width: dotWidth, opacity: dotOpacity }]}
            />
          );
        })}
      </View>
      <View style={styles.newCardContainer}>
        {['savings', 'remind', 'budget'].map((cardType, index) => (
          <View key={cardType}>
            {cardType === 'savings' && (
              <SavingsCard
                isSelected={selectedNewCard === cardType}
                onPress={() => handleNewCardPress(cardType)}
              />
            )}
            {cardType === 'remind' && (
              <RemindCard
                isSelected={selectedNewCard === cardType}
                onPress={() => handleNewCardPress(cardType)}
              />
            )}
            {cardType === 'budget' && (
              <BudgetCard
                isSelected={selectedNewCard === cardType}
                onPress={() => handleNewCardPress(cardType)}
              />
            )}
          </View>
        ))}
      </View>
      {renderEntries()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007bff',
    marginHorizontal: 4,
  },
  newCardContainer: {
    flexDirection: 'row',
    marginTop: 0,
    justifyContent: 'space-between',
  },
  entriesContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './Navigation/AppNavigator'; // Import your main navigator

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Set the background color to red
  },
});

export default App;

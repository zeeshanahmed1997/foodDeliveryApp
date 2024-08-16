import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'; // Import TabNavigator
import UserProfileScreen from '../Screens/ProfileScreen'; // Import UserProfileScreen
import AuthStack from './AuthStack'; // Import AuthStack

const Stack = createStackNavigator();

function StackNavigator() {
  // This should be replaced with real authentication state logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }} // Hides the header for the TabNavigator
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#003366', // Set your desired background color
              },
              headerTintColor: '#fff', // Optional: Set the color of the header text and icons
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }} // Hide header for the AuthStack
        />
      )}
    </Stack.Navigator>
  );
}

export default StackNavigator;

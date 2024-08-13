import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons
import HomeScreen from '../Screens/HomeScreen'; // Adjust the path as needed
import CalendarScreen from '../Screens/CalendarScreen'; // Adjust the path as needed
import AddScreen from '../Screens/AddScreen'; // Adjust the path as needed
import SettingsScreen from '../Screens/SettingsScreen'; // Adjust the path as needed
import NotificationsScreen from '../Screens/NotificationsScreen'; // Adjust the path as needed
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient from Expo
import CustomHeader from '../Components/CustomHeader'; // Import CustomHeader component

const Tab = createBottomTabNavigator();

function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: true,
        tabBarActiveBackgroundColor:'gainsboro',
        
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconColor;
          let iconSize = 30; // Default icon size

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              iconColor = '#007BFF'; // Blue color for Home
              break;
            case 'Calendar':
              iconName = 'calendar';
              iconColor = '#28A745'; // Green color for Calendar
              break;
            case 'Add':
              iconName = 'add-circle'; // 'Add' icon from Ionicons
              iconColor = '#ffffff'; // White color for Add icon
              iconSize = 50; // Larger size for 'Add' icon
              return (
                <LinearGradient
                  colors={['#003366', '#006699']} // Navy blue to a lighter blue gradient
                  style={styles.addIconWrapper}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                  />
                </LinearGradient>
              );
            case 'Settings':
              iconName = 'settings';
              iconColor = '#FFC107'; // Amber color for Settings
              break;
            case 'Notifications':
              iconName = 'notifications';
              iconColor = '#DC3545'; // Red color for Notifications
              break;
            default:
              iconName = 'alert';
              iconColor = '#6c757d'; // Default gray color
          }

          return (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={iconColor}
            />
          );
        },
        
        tabBarStyle: {
          height: 60, // Height of tab bar
          paddingBottom: 0,
        },
        tabBarBadgeStyle: {
            backgroundColor: 'red', // Badge background color
            color: 'white', // Badge text color
            fontSize: 12, // Font size of the badge text
            paddingHorizontal: 6, // Padding around the badge text
            borderRadius: 10, // Rounded corners for the badge
          },
        header: () => {
          const title = getHeaderTitle(route.name);
          return <CustomHeader navigation={navigation} title={title} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
  name="Notifications"
  component={NotificationsScreen}
  options={{
    tabBarBadge: 3, // Set badge count here
  }}
/>

    </Tab.Navigator>
  );
}

// Function to get header title based on route name
function getHeaderTitle(routeName) {
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Calendar':
      return 'Calendar';
    case 'Add':
      return 'Add';
    case 'Settings':
      return 'Settings';
    case 'Notifications':
      return 'Notifications';
    default:
      return 'App';
  }
}

const styles = StyleSheet.create({
  addIconWrapper: {
    borderRadius: 35, // Half of the icon size to make it round
    justifyContent: 'center',
    alignItems: 'center',
    height: 70, // Match the size of the icon
    width: 70, // Match the size of the icon
    marginBottom: 30, // Adjust as needed
    shadowColor: '#000', // Optional: add shadow for better visibility
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default TabNavigator;

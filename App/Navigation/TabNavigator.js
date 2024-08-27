import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CalendarScreen from '../Screens/CalendarScreen';
import AddScreen from '../Screens/AddScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCalendar, faPlusCircle, faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const iconMap = {
  Overview: faHome,
  Calendar: faCalendar,
  Add: faPlusCircle,
  Settings: faCog,
  Notifications: faBell,
};

const iconColorMap = {
  Overview: '#007BFF',
  Calendar: '#28A745',
  Add: '#ffffff',
  Settings: '#FFC107',
  Notifications: '#DC3545',
};

const iconSizeMap = {
  Overview: 25,
  Calendar: 25,
  Add: 50,
  Settings: 25,
  Notifications: 25,
};

function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: true,
        tabBarActiveBackgroundColor: '#e0e0e0', // Light gray background for active tab
        tabBarStyle: styles.tabBar,
        tabBarBadgeStyle: styles.tabBarBadge,
        tabBarIcon: ({ color, size }) => {
          const icon = iconMap[route.name];
          const iconColor = iconColorMap[route.name] || color;
          const iconSize = iconSizeMap[route.name] || size;

          return route.name === 'Add' ? (
            <LinearGradient
              colors={['#003366', '#003366']}
              style={styles.addIconWrapper}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor} />
            </LinearGradient>
          ) : (
            <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor} />
          );
        },
        header: () => {
          const title = getHeaderTitle(route.name);
          return <CustomHeader navigation={navigation} title={title} />;
        },
      })}
    >
      <Tab.Screen name="Overview" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

function getHeaderTitle(routeName) {
  switch (routeName) {
    case 'Overview':
      return 'Overview';
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
  tabBar: {
    height: 70,
    paddingBottom: 5,
    backgroundColor: '#ffffff', // White background for tab bar
    borderTopWidth: 1,
    borderTopColor: '#dddddd', // Light gray border
    elevation: 5, // Shadow for elevation
  },
  tabBarBadge: {
    backgroundColor: '#DC3545',
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 6,
    borderRadius: 10,
  },
  addIconWrapper: {
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default TabNavigator;

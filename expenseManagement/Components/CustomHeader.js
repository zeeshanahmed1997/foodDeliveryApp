import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ navigation, title, onUserImagePress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Uncomment if you want a menu icon */}
      {/* <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" size={30} color="white" />
      </TouchableOpacity> */}
      <Text style={styles.title}>{title}</Text>
      
      {/* User Image on the right side */}
      <TouchableOpacity onPress={onUserImagePress}>
        <Image
          source={{ uri: 'https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok' }} // Replace with actual user image URI
          style={styles.userImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#003366',
    marginTop: 35,
    height:70,
    justifyContent: 'space-between', // Ensures items are spaced correctly
  },
  title: {
    fontSize: 18,
    color: 'white',
    flex: 1, // Takes up remaining space between menu and user image
  },
  userImage: {
    width: 40, // Adjust size as needed
    height: 40, // Adjust size as needed
    borderRadius: 20, // Half of width and height to make it circular
    borderWidth: 2, // Optional: add border for visibility
    borderColor: 'white', // Optional: border color
  },
});

export default CustomHeader;

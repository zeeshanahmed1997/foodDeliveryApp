// CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#003366', marginTop:35 }}>
      {/* <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" size={30} color="white" />
      </TouchableOpacity> */}
      <Text style={{ marginLeft: 15, fontSize: 18, color: 'white', left:0 }}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

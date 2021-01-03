//PictureScreen


import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function PictureScreen({navigation, route}) {

  return (
    <View>
      <Text>Hi from Picture Screen</Text>
    </View>
  );
}

export default PictureScreen;

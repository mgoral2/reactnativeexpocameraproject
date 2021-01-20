//PictureScreen


import React from 'react';
import { StyleSheet, Image, Text, View ,TouchableOpacity,Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
  }
})

function PictureScreen({navigation, route}) {

const {photo} = route.params;
  return (
    <View>
      <Image
      style={styles.img} 
      source={photo} />
    </View>
  );
}

export default PictureScreen;

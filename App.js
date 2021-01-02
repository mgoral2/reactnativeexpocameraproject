//App.js

import 'react-native-gesture-handler';
import React from 'react';
import CameraComponent from './CameraComponent';
import PictureScreen from './PictureScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CameraComponent}
        />
        <Stack.Screen
          name="PictureScreen"
          component={PictureScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

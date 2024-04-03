import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationStyles } from './theme.js';

import LoginScreen from './screen/LoginScreen';
import AppointmentScreen from './screen/AppointmentScreen';
import RegisterScreen from './screen/RegisterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{...navigationStyles,
          headerShown: false,}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} /> 
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// Prueba de stash

export default App;

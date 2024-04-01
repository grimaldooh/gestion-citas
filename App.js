import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import AppointmentScreen from './screen/AppointmentScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

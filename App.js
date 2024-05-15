import React, {useEffect,useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationStyles } from './themes/theme';

import * as Font from 'expo-font';

import LoginScreen from './screen/LoginScreen';
import AppointmentScreen from './screen/AppointmentScreen';
import RegisterScreen from './screen/RegisterScreen';
import CalendarioScreen from './screen/dashboard/CalendarioScreen';
import UserSettingsScreen from './screen/UserSettingsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
      if (!fontsLoaded) {
        loadFonts()
    }
  });
  const loadFonts = async () => {
    await Font.loadAsync({
      'Plus Jakarta Sans-Bold': require('./assets/fonts/Plus Jakarta Sans-Bold.ttf'),
      'Plus Jakarta Sans': require('./assets/fonts/Plus Jakarta Sans.ttf'),
      'Plus Jakarta Sans-Light': require('./assets/fonts/Plus Jakarta Sans-Light.ttf'),
    });
     setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return null;
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{...navigationStyles,
          headerShown: false,}}>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} /> 
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="User" component={UserSettingsScreen} />
        <Stack.Screen name ="CalendarioScreen" component={CalendarioScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationStyles } from "./themes/theme";

import * as Font from "expo-font";

import LoginScreen from "./screen/LoginScreen";
import AppointmentScreen from "./screen/AppointmentScreen";
import RegisterScreen from "./screen/RegisterScreen";
import CalendarioScreen from "./screen/dashboard/CalendarioScreen";

import UserIdContext from "./context/userContext";
import PaymentScreen from "./screen/PaymentScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });
  const loadFonts = async () => {
    await Font.loadAsync({
      "Plus Jakarta Sans-Bold": require("./assets/fonts/Plus Jakarta Sans-Bold.ttf"),
      "Plus Jakarta Sans": require("./assets/fonts/Plus Jakarta Sans.ttf"),
      "Plus Jakarta Sans-Light": require("./assets/fonts/Plus Jakarta Sans-Light.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ ...navigationStyles, headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="CalendarioScreen" component={CalendarioScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserIdContext.Provider>
  );
};
export default App;

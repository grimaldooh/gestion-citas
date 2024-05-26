import React, { useState, useContext } from "react";
import { View, Text, ImageBackground, Image, StyleSheet, Alert, Linking } from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";

// Importamos los componentes que vamos a utilizar en la pantalla de login
import TextInput from "../components/InputsType/TextInput";
import GmailLoginButton from "../components/FacebookLoginButton";
import ButtonGeneric from "../components/Buttons/ButtonGeneric";
import SessionModal from "../components/Modals/SessionModal";
import UserIdContext from '../context/userContext'; // Asegúrate de importar el contexto

// Importamos los estilos de la pantalla de login
import { Login } from "../themes/PantallasStyles/LoginTheme";
import { validateEmail } from "../services/loginService";
import { checkPayment } from "../services/paypalService";
import { styles } from "../themes/theme";

// Importamos los servicios
import { LoginAPI } from "../services/loginService";

import { useNavigation } from "@react-navigation/native"; // Import the hook that helps us to navigate between screens

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); // Initialize the hook to use it in the handleLogin function
  const [modalSession, setModalSession] = useState(false);
  const [userData, setUserData] = useState({}); // Aquí se guarda la información del token decodificado
  const { setUserId } = useContext(UserIdContext);
  const [emailError, setEmailError] = useState("");

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setEmailError("Favor de ingresar un email válido");
      return;
    } else {
      const decodedToken = await LoginAPI(email, password);
      if (decodedToken === undefined) {
       setModalSession(true);
       return;
      }
      else {
        
        if (decodedToken.PaymentStatus==="True") {
          const userId = decodedToken.userId;
          setUserId(userId);
          navigation.navigate("AppointmentScreen");
        } else {
          console.log("userId login",decodedToken.userId)
          const paymentStatus = await checkPayment(decodedToken.userId);
          console.log(paymentStatus);
          if (paymentStatus) {
            const userId = decodedToken.userId;
            setUserId(userId);
            navigation.navigate("AppointmentScreen");
          } else {
            Alert.alert(
              'Error de pago',
              'No ha realizado el pago para acceder a la aplicación',
              [
                  {
                      text: 'Cerrar',
                      onPress: () => console.log('Cerrar presionado'),
                      style: 'cancel'
                  },
                  {
                      text: 'Pagar',
                      onPress: () => {   
                          Linking.openURL(decodedToken.PaypalPaymentUrl);
                      }
                  }
              ]
            );
          }
        }
      }
    }  
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (emailError) {
      setEmailError("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../assets/images/fondo.png")}
        style={Login.backgroundImage}
        resizeMode="cover"
      />
      <Image
        source={require("../assets/images/logo.png")}
        style={Login.logoContainer}
      />

      <View style={Login.overlay}>
        <SessionModal
          visible={modalSession}
          onClose={() => setModalSession(false)}
        />
        <Text style={styles.title}>¡Bienvenido a FastBooking!</Text>
        <Text style={styles.description}>
          Ingresa tus datos para iniciar sesión.
        </Text>

        <View style={localStyles.TextContainers}>
          {emailError ? <Text style={localStyles.errorText}>{emailError}</Text> : null}
        </View>
        <TextInput
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
          secureTextEntry={false}
        />
        <TextInput
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <ButtonGeneric
          backgroundColor="loginColor"
          fontSize="small"
          width="extraLarge"
          height="extraLarge"
          onPress={handleLogin}
        >
          Iniciar Sesión
        </ButtonGeneric>
        <GmailLoginButton title="Inicia sesión con Gmail" />
        <Text style={Login.signupText}>
          ¿Aún no tienes cuenta?{" "}
          <Text
            style={Login.signupButton}
            onPress={() => navigation.navigate("Register")}
          >
            Regístrate 😃
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const localStyles = StyleSheet.create({
  errorText: {
    color: '#bc2c46'
  },
  TextContainers: {
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 10
  }
});

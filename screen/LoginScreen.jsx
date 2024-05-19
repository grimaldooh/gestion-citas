import React, { useState, useContext} from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";

//importamos los componentes que vamos a utilizar en la pantalla de login
import TextInput from "../components/InputsType/TextInput";
import GmailLoginButton from "../components/FacebookLoginButton";
import ButtonGeneric from "../components/Buttons/ButtonGeneric";
import SessionModal from "../components/Modals/SessionModal";
import UserIdContext  from '../context/userContext'; // Asegúrate de importar el contexto


//importamos los estilos de la pantalla de login
import { Login } from "../themes/PantallasStyles/LoginTheme";
import { styles } from "../themes/theme";

//Importamos los servicios
import { LoginAPI } from "../services/loginService";

import { useNavigation } from "@react-navigation/native"; // Import the hook that helps us to navigate between screens between screens

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); // Initialize the hook to use it in the handleLogin function
  const [modalSession, setModalSession] = useState(false);
  const [userData, setUserData] = useState({}); // Aqui se guarda la informacion del token decodificado
  const { setUserId } = useContext(UserIdContext);


  const handleLogin = async () => {
    try {
      const decodedToken = await LoginAPI(email, password);
      setUserData(decodedToken);
      const userId = decodedToken.userId;
      setUserId(userId);
      console.log("Usuario logueado con Id:", userId);
      navigation.navigate("AppointmentScreen");
    } catch (error) {
      console.error("Error al iniciar sesion:", error);
    }
  };
  return (
    // El keyboardAvoidingView es un componente que nos ayuda a evitar que el teclado del dispositivo tape los inputs y
    // botones de nuestra pantalla. En este caso, le pasamos la propiedad behavior con el valor 'padding' para que
    // ajuste el contenido de la pantalla cuando el teclado se muestre.
    
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
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
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
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
          <GmailLoginButton title="Inicia sesion con Gmail" />
          <Text style={Login.signupText}>
            ¿Aun no tienes cuenta?{" "}
            <Text
              style={Login.signupButton}
              onPress={() => navigation.navigate("Register")}
            >
              Registrate 😃
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
   
  );
};

export default LoginScreen;

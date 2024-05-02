import React, { useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import TextInput from '../components/InputsType/TextInput';
import FacebookLoginButton from '../components/FacebookLoginButton';
import ButtonGeneric from '../components/ButtonGeneric';

//importamos los estilos de la pantalla de login
import { Login } from '../themes/PantallasStyles/LoginTheme';
import { styles } from '../themes/theme';

//Importamos los servicios
import { LoginAPI } from '../services/authService';

import { useNavigation } from '@react-navigation/native'; // Import the hook that helps us to navigate between screens between screens

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Initialize the hook to use it in the handleLogin function}

    const handleLogin = () => {
        // Simula un inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');

        // Una vez que el usuario ha iniciado sesión correctamente, restablece la pila de navegación
        navigation.reset({
            index: 0,
            routes: [{ name: 'AppointmentScreen' }],  // Reemplaza 'AppointmentScreen' con el nombre de tu pantalla principal
        });
    };

    // const handleLogin = async () => {
    //     try {
    //         const response = await LoginAPI(username, password);
    //         if (response.success) {
    //             console.log('Inicio de sesión exitoso');

    //         } else {
    //             console.log('Error', 'Inicio de sesión fallido. Por favor, verifica tus credenciales.');
    //             console.log (LoginAPI(username, password));
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         console.log('Error', 'Ocurrió un error al intentar iniciar sesión. Por favor, intenta nuevamente más tarde.');
    //     }
    // };

    return (
        // El keyboardAvoidingView es un componente que nos ayuda a evitar que el teclado del dispositivo tape los inputs y
        // botones de nuestra pantalla. En este caso, le pasamos la propiedad behavior con el valor 'padding' para que
        // ajuste el contenido de la pantalla cuando el teclado se muestre.
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ImageBackground
                source={require('../assets/images/fondo.png')}
                style={Login.backgroundImage}
                resizeMode="cover"
            />
            <Image
                source={require('../assets/images/logo.png')}
                style={Login.logoContainer} />

            <View style={Login.overlay}>
                <Text style={styles.title}>¡Bienvenido a FastBooking!</Text>
                <Text style={styles.description}>Ingresa tus datos para iniciar sesión.</Text>
                <TextInput
                    placeholder="Nombre de Usuario"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
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
                <FacebookLoginButton title="Inicia sesion con Facebook" />
                <Text
                    style={Login.signupText}
                >
                    ¿Aun no tienes cuenta? {' '}
                    <Text style={Login.signupButton}
                        onPress={() => navigation.navigate('Register')}>Registrate 😃</Text>
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import FacebookLoginButton from '../components/FacebookLoginButton';
import { styles } from '../theme';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { LoginAPI } from '../services/authService';

import { useNavigation } from '@react-navigation/native'; // Import the hook that helps us to navigate between screens between screens

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Initialize the hook to use it in the handleLogin function}

    const handleLogin = () => {
        navigation.navigate('AppointmentScreen'); // Navigate to the Appointments screen
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
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logoContainer} />

                <View style={styles.overlay}>
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
                    <Text
                        style={styles.signupText}
                        onPress={() => navigation.navigate('Register')}
                    >
                        ¿Aun no tienes cuenta? {' '} Registrate!
                    </Text>
                    <Button onPress={handleLogin} title="Iniciar Sesión" />
                    <FacebookLoginButton title="Inicia sesion con Facebook" />
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

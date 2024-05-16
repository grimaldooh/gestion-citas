import React, { useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import TextInput from '../components/InputsType/TextInput';
import FacebookLoginButton from '../components/FacebookLoginButton';
import ButtonGeneric from '../components/ButtonGeneric';
import SessionModal from '../components/Modals/SessionModal';
//importamos los estilos de la pantalla de login
import { Login } from '../themes/PantallasStyles/LoginTheme';
import { styles } from '../themes/theme';

//Importamos los servicios
import { LoginAPI } from '../services/authService';

import { useNavigation } from '@react-navigation/native'; // Import the hook that helps us to navigate between screens between screens

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Initialize the hook to use it in the handleLogin function
    const [modalSession, setModalSession] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        LoginAPI(email, password)
            .then((response) => {
                if (response.status === 200) {
                    console.log('Usuario logueado correctamente');
                    navigation.navigate('AppointmentScreen');
                } else {
                    console.log('Usuario no logueado');
                    setModalSession(true);
                }
            })
            .catch((error) => {
                console.error(error);
            });
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
                    source={require('../assets/images/fondo.png')}
                    style={Login.backgroundImage}
                    resizeMode="cover"
                />
                <Image
                    source={require('../assets/images/logo.png')}
                    style={Login.logoContainer} />

                <View style={Login.overlay}>
                <SessionModal
                        visible={modalSession}
                        onClose={() => setModalSession(false)}
                    />
                    <Text style={styles.title}>¡Bienvenido a FastBooking!</Text>
                    <Text style={styles.description}>Ingresa tus datos para iniciar sesión.</Text>
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

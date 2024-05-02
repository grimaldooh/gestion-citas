import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, Alert } from 'react-native';

import TextInput from '../components/InputsType/TextInput';
import { styles } from '../themes/theme';
import ButtonGeneric from '../components/ButtonGeneric';
import { RegisterAPI } from '../services/authService';

import { useNavigation } from '@react-navigation/native';
import FacebookLoginButton from '../components/FacebookLoginButton';
import { Login } from '../themes/PantallasStyles/LoginTheme';
import PayPalButton from '../components/PaypalButton';

const RegisterScreen = () => {
    //Aqui sale que no se usan por que esta comentado el fetch
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const navigation = useNavigation();

    const PaypalHandle = () => {
        Alert.alert('Paypal', 'Pago exitoso');
    };

    /*
        const handleLogin = async () => {
            try {
                const response = await RegisterAPI(fullName, email, password);
                if (response.ok) {
                    Alert.alert('Inicio de sesión exitoso');
                } else {
                    Alert.alert('Error', 'Inicio de sesión fallido. Por favor, verifica tus credenciales.');
                }
            } catch (error) {
                console.error('Error:', error);
                Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión. Por favor, intenta nuevamente más tarde.');
            }
        };
    */

    return (
        <ImageBackground
            source={require('../assets/images/fondo.png')}
            style={Login.backgroundImage}
            resizeMode="cover"
        >
            <Image
                source={require('../assets/images/logo.png')}
                style={Login.logoContainer} />
            <View style={Login.overlay}>
                <Text style={styles.title}>¡Registro a FastBooking!</Text>
                <Text style={styles.description}>Completa los siguientes campos para registrarte</Text>
                <TextInput
                    placeholder="Nombre Completo"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                />
                <TextInput
                    placeholder="Correo Electrónico"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
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
                /* onPress={handleRegister} */
                >
                    Registrate
                </ButtonGeneric>
                <FacebookLoginButton title="Registrate con Facebook" />
                <PayPalButton
                 onPress={PaypalHandle} />
            </View>
        </ImageBackground>
    );
};

export default RegisterScreen;

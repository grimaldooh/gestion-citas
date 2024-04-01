import React, { useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import FacebookLoginButton from '../components/FacebookLoginButton';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native'; // Import the hook that helps us to navigate between screens

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Initialize the hook to use it in the handleLogin function

    const handleLogin = () => {
        navigation.navigate('AppointmentScreen'); // Navigate to the Appointments screen
    }


    /* const handleLogin = () => {
        const data = {
            username: username,
            password: password
        };

        fetch('URL_DE_TU_API', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                Alert.alert('Inicio de sesión exitoso');
            } else {

                Alert.alert('Error', 'Inicio de sesión fallido. Por favor, verifica tus credenciales.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión. Por favor, intenta nuevamente más tarde.');
        });
    };
    */

    return (
        <ImageBackground
            source={require('../assets/images/fondo.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <Image 
                source={require('../assets/images/camaleonLogo.png')} 
                style={styles.logoContainer} />

            <View style={styles.overlay}>
                <Text style={styles.title}>¡Bienvenido a FastBooking!</Text>
                <Text style={styles.description}>Ingresa tus datos para iniciar sesión.</Text>
                <TextInput
                    placeholder="Nombre de Usuario"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    placeholder="Contraseña"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
                <Button onPress={handleLogin} title="Iniciar Sesión" />
                <FacebookLoginButton />
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;

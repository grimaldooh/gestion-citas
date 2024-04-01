import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, Alert } from 'react-native';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { styles } from '../theme';

import { useNavigation } from '@react-navigation/native';
import FacebookLoginButton from '../components/FacebookLoginButton';

const RegisterScreen = () => {
    //Aqui sale que no se usan por que esta comentado el fetch
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const navigation = useNavigation();

    // const handleRegister = () => {
    //     const data = {
    //         password: password,
    //         email: email,
    //         fullName: fullName
    //     };
    
    //     fetch('URL_DE_TU_API', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             Alert.alert('Registro exitoso');
    //         } else {
    //             Alert.alert('Error', 'Error en el registro. Por favor, inténtalo de nuevo más tarde.');
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //         Alert.alert('Error', 'Ocurrió un error al intentar registrar. Por favor, inténtalo de nuevo más tarde.');
    //     });
    // };

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
                <Button /* onPress={handleRegister}*/ title="Registrarse" />
                <FacebookLoginButton title="Registrate con Facebook" />
            </View>
        </ImageBackground>
    );
};

export default RegisterScreen;

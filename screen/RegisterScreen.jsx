import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, Alert, ScrollView, StyleSheet } from 'react-native';

import TextInput from '../components/InputsType/TextInput';
import { styles } from '../themes/theme';
import ButtonGeneric from '../components/Buttons/ButtonGeneric';
import { RegisterAPI, validateEmail } from '../services/loginService'; // Asegúrate de importar validateEmail

import { useNavigation } from '@react-navigation/native';
import GmailLoginButton from '../components/FacebookLoginButton';
import { Login } from '../themes/PantallasStyles/LoginTheme';

const RegisterScreen = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profession, setProfession] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [emailError, setEmailError] = useState("");

    const navigation = useNavigation();

    const validateInputs = () => {
        let errors = [];

        if (!fullName) errors.push('Nombre Completo');
        if (!email) errors.push('Correo');
        if (!password) errors.push('Contraseña');
        if (!profession) errors.push('Profesión');
        if (!phoneNumber) errors.push('Número de teléfono');
        if (!address) errors.push('Dirección');
        if (!imgUrl) errors.push('URL de la imagen');

        if (errors.length > 0) {
            Alert.alert('Error', `Los siguientes campos son obligatorios: ${errors.join(', ')}`);
            return false;
        }

        return true;
    }

    const handleEmailChange = (text) => {
        setEmail(text);
        if (text && !validateEmail(text)) {
            setEmailError("Favor de ingresar un email válido");
        } else {
            setEmailError("");
        }
    };

    const handleRegister = () => {
        if (!validateEmail(email)) {
            setEmailError("Favor de ingresar un email válido");
            return;
        }
        if (!validateInputs()) {
            return;
        }
        RegisterAPI(fullName, email, password, phoneNumber, address, profession, imgUrl)
            .then((response) => {
                if (response.status === 200) {
                    console.log('Usuario registrado');
                    navigation.navigate('LoginScreen');
                } else {
                    console.log('Usuario no registrado');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

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
                <ScrollView>
                    <Text style={styles.TextSmall}>Nombre completo *</Text>
                    <TextInput
                        placeholder=" Ingresa tu nombre completo"
                        onChangeText={(text) => setFullName(text)}
                        value={fullName}
                        textAlign="left"
                    />
                    <View style={localStyles.labelContainer}>
                        <Text style={styles.TextSmall}>Email *</Text>
                        {emailError ? <Text style={localStyles.errorText}>{emailError}</Text> : null}
                    </View>
                    <TextInput
                        placeholder=" Ingresa tu correo electrónico"
                        onChangeText={handleEmailChange}
                        value={email}
                        textAlign="left"
                    />
                    <Text style={styles.TextSmall}>Contraseña *</Text>
                    <TextInput
                        placeholder=" Ingresa tu password secretisimo"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        textAlign="left"
                        secureTextEntry={true}
                    />
                    <Text style={styles.TextSmall}>Número de teléfono *</Text>
                    <TextInput
                        placeholder=" Ingresa tu cel"
                        onChangeText={(text) => setPhoneNumber(text)}
                        value={phoneNumber}
                        keyboardType="numeric"
                        textAlign="left"
                    />
                    <Text style={styles.TextSmall}>Dirección *</Text>
                    <TextInput
                        placeholder=" Ingresa tu dirección"
                        onChangeText={(text) => setAddress(text)}
                        value={address}
                        textAlign="left"
                    />
                    <Text style={styles.TextSmall}>Profesión *</Text>
                    <TextInput
                        placeholder=" Ahora tu profesión"
                        onChangeText={(text) => setProfession(text)}
                        value={profession}
                        textAlign="left"
                    />
                    <Text style={styles.TextSmall}>URL de tu imagen *</Text>
                    <TextInput
                        placeholder=" Ingresa un url de tu img"
                        onChangeText={(text) => setImgUrl(text)}
                        value={imgUrl}
                        textAlign="left"
                    />
                    <ButtonGeneric
                        backgroundColor="loginColor"
                        fontSize="small"
                        width="extraLarge"
                        height="extraLarge"
                        onPress={handleRegister}
                    >
                        Registrate
                    </ButtonGeneric>
                    <GmailLoginButton title="Registrate con Gmail" />
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default RegisterScreen;

const localStyles = StyleSheet.create({
    errorText: {
        color: '#bc2c46',
        marginLeft: 10,
        marginBottom: 5
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        alignSelf: 'flex-start'
    }
});

import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, Alert, ScrollView } from 'react-native';

import TextInput from '../components/InputsType/TextInput';
import { styles } from '../themes/theme';
import ButtonGeneric from '../components/Buttons/ButtonGeneric';
import { RegisterAPI } from '../services/authService';

import { useNavigation } from '@react-navigation/native';
import FacebookLoginButton from '../components/FacebookLoginButton';
import { Login } from '../themes/PantallasStyles/LoginTheme';
import PayPalButton from '../components/PaypalButton';

const RegisterScreen = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profession, setProfession] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const navigation = useNavigation();

    const handleRegister = () => {
        if (!fullName || !email || !password || !profession) {
            Alert.alert('Error', 'Los campos Nombre Completo, Correo, Contraseña y Profesión son obligatorios');
            return;
        }

        RegisterAPI(fullName, email, password, phoneNumber, address, profession, imgUrl)
            .then((response) => {
                if (response.status === 200) {
                    console.log('Usuario registrado correctamente');
                    navigation.navigate('LoginScreen');
                } else {
                    console.log('Usuario no registrado');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const PaypalHandle = () => {
        Alert.alert('Paypal', 'Pago exitoso');
    };

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
                    <TextInput
                        placeholder="Teléfono"
                        onChangeText={(text) => setPhoneNumber(text)}
                        value={phoneNumber}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Dirección"
                        onChangeText={(text) => setAddress(text)}
                        value={address}
                    />
                    <TextInput
                        placeholder="Profesión"
                        onChangeText={(text) => setProfession(text)}
                        value={profession}
                    />
                    <TextInput
                        placeholder="Img"
                        onChangeText={(text) => setImgUrl(text)}
                        value={imgUrl}
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
                    <FacebookLoginButton title="Registrate con Facebook" />
                    <PayPalButton
                        onPress={PaypalHandle} />
                        </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default RegisterScreen;
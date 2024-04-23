import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../themes/theme';
import { Login } from '../themes/Login/LoginTheme';

const FacebookLoginButton = ({title}) => {
    return (
        <TouchableOpacity onPress={() => console.log('Ingresar con Facebook')} style={Login.facebookButton}>
            <Image source={require('../assets/images/facebook.png')} style={Login.facebookButton.facebookLogo} />
            <Text style={Login.facebookButton.facebookButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default FacebookLoginButton;

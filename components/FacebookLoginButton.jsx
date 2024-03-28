// FacebookLoginButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme';

const FacebookLoginButton = () => {
    return (
        <TouchableOpacity onPress={() => console.log('Ingresar con Facebook')}>
            <Text style={styles.facebookText}>Ingresa con Facebook</Text>
        </TouchableOpacity>
    );
};

export default FacebookLoginButton;

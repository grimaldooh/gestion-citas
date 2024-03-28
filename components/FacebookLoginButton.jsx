import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../theme';

const FacebookLoginButton = () => {
    return (
        <TouchableOpacity onPress={() => console.log('Ingresar con Facebook')} style={styles.facebookButton}>
            <Image source={require('../assets/images/facebook.png')} style={styles.facebookLogo} />
            <Text style={styles.facebookButtonText}>Ingresa con Facebook</Text>
        </TouchableOpacity>
    );
};

export default FacebookLoginButton;

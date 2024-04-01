import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../theme';

const FacebookLoginButton = ({title}) => {
    return (
        <TouchableOpacity onPress={() => console.log('Ingresar con Facebook')} style={styles.facebookButton}>
            <Image source={require('../assets/images/facebook.png')} style={styles.facebookLogo} />
            <Text style={styles.facebookButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default FacebookLoginButton;

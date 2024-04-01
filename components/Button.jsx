import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme';

const Button = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
        //Firma de diego papa jaja salu2
    );
};


export default Button;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Button = ({ onPress, children, iconName, backgroundColor}) => {
    const ButtonStyles = {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        padding: 8,
        borderRadius: 5,
        height: 33,
        width: '48%',
    };

    const ButtonTextStyles = {
        color: '#fff',
        fontSize: 12,
        marginLeft: 10,
        fontWeight: 'bold',
    };

    return (
        <TouchableOpacity style={ButtonStyles} onPress={onPress}>
            <Icon name={iconName} size={17} color="#fff" />
            <Text style={ButtonTextStyles}>{children}</Text>
        </TouchableOpacity>
    );
};

//Hola 
export default Button;
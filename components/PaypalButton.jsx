import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import PayPalLogo from '../assets/images/paypal_logo.png';

const PayPalButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image
                source={PayPalLogo}
                style={styles.logo}
            />
            <Text style={styles.text}></Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0070ba',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        top: 5,
    },
    logo: {
        width: 120,
        height: 20,
        marginRight: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PayPalButton;
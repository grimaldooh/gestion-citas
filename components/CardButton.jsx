import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme';

const CardButton = ({ onPress, title, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.card.acceptButton, buttonStyle]} onPress={onPress}>
            <Text style={[styles.card.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CardButton;

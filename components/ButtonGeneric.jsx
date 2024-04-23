import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { acceptButton, styles } from '../theme';

const buttonStyles = {
    backgroundColor: {
        accept: styles.button.accept,
        reject: styles.button.reject,
        modify: styles.button.modify,
    },
    fontSize: {
        small: styles.button.smallButtonText,
        large: styles.button.largeButtonText,
    },
    height: {
        small: styles.button.smallButton,
        large: styles.button.largeButton,
    },
    width: {
        small: styles.button.smallButton,
        large: styles.button.largeButton,
        
    }
};

const ButtonGeneric = ({ children, backgroundColor, fontSize, width, height, onPress }) => { // Añadí funcionalidad para width y height
    
    const buttonGenericStyles = [
        styles.button,
        backgroundColor === 'accept' && buttonStyles.backgroundColor.accept,
        backgroundColor === 'reject' && buttonStyles.backgroundColor.reject,
        backgroundColor === 'modify' && buttonStyles.backgroundColor.modify,
        fontSize === 'small' && buttonStyles.fontSize.small,
        fontSize === 'large' && buttonStyles.fontSize.large,
        height === 'small' && buttonStyles.height.small,
        height === 'large' && buttonStyles.height.large,
        width === 'small' && buttonStyles.width.small,
        width === 'large' && buttonStyles.width.large,
    ];

    return (
        <TouchableOpacity style={buttonGenericStyles} onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    );
};

export default ButtonGeneric;
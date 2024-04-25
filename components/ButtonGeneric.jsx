import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { acceptButton, styles } from '../themes/theme';

const buttonStyles = {
    backgroundColor: {
        accept: styles.button.accept,
        reject: styles.button.reject,
        modify: styles.button.modify,
        loginColor: styles.button.loginColor,
    },
    fontSize: {
        small: styles.button.smallButtonText,
        large: styles.button.largeButtonText,
    },
    typeFont: {
        bold: styles.button.fontBold,
    },
    height: {
        extraSmall: styles.button.extraSmallButton,
        small: styles.button.smallButton,
        large: styles.button.largeButton,
    },
    width: {
        extraSmall: styles.button.extraSmallButton,
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
        backgroundColor === 'loginColor' && buttonStyles.backgroundColor.loginColor,
        
        fontSize === 'small' && buttonStyles.fontSize.small,
        fontSize === 'large' && buttonStyles.fontSize.large,
        
        height === 'extraSmall' && buttonStyles.height.extraSmall,
        height === 'small' && buttonStyles.height.small,
        height === 'large' && buttonStyles.height.large,
        
        width === 'extraSmall' && buttonStyles.width.extraSmall,
        width === 'small' && buttonStyles.width.small,
        width === 'large' && buttonStyles.width.large,

        width === 'extraLarge' && buttonStyles.width.extraLarge,
        height === 'extraLarge' && buttonStyles.height.extraLarge,
    ];

    return (
        <TouchableOpacity style={buttonGenericStyles} onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    );
};

export default ButtonGeneric;
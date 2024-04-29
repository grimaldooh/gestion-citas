import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../themes/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const buttonStyles = {
    backgroundColor: {
        accept: styles.button.accept,
        reject: styles.button.reject,
        modify: styles.button.modify,
        loginColor: styles.button.loginColor,
    },
    fontSize: {
        extraSmall: styles.button.extraSmallButtonText,
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

const ButtonGeneric = ({ children, backgroundColor, fontSize, width, height, onPress, iconName }) => { // Añadí funcionalidad para width y height
    
    const buttonGenericStyles = [
        styles.button,
        backgroundColor === 'accept' && buttonStyles.backgroundColor.accept,
        backgroundColor === 'reject' && buttonStyles.backgroundColor.reject,
        backgroundColor === 'modify' && buttonStyles.backgroundColor.modify,
        backgroundColor === 'loginColor' && buttonStyles.backgroundColor.loginColor,
          
        height === 'extraSmall' && buttonStyles.height.extraSmall,
        height === 'small' && buttonStyles.height.small,
        height === 'large' && buttonStyles.height.large,
        
        width === 'extraSmall' && buttonStyles.width.extraSmall,
        width === 'small' && buttonStyles.width.small,
        width === 'large' && buttonStyles.width.large,

        width === 'extraLarge' && buttonStyles.width.extraLarge,
        height === 'extraLarge' && buttonStyles.height.extraLarge,
    ];

    const buttonGenericTextStyles = [
        fontSize === 'extraSmall' && buttonStyles.fontSize.extraSmall,
        fontSize === 'small' && buttonStyles.fontSize.small,
        fontSize === 'large' && buttonStyles.fontSize.large,
    ];

    return (
        <TouchableOpacity style={buttonGenericStyles} onPress={onPress}>
            <Text style={buttonGenericTextStyles}>{children}</Text>
        </TouchableOpacity>
    );
};

export default ButtonGeneric;
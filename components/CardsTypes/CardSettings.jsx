import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Importamos los themes
import { CardConfig } from '../../themes/PantallasStyles/SettingsTheme';

const CardSettings = ({ title, description, leftIconName, rightIconName, onRightIconPress }) => {
    return (
        <View style={CardConfig.card}>
            <FontAwesome name={leftIconName} size={30} />
            <View style={CardConfig.textContainer}>
                <Text style={CardConfig.title}>{title}</Text>
                <Text style={CardConfig.description}>{description}</Text>
            </View>
            <TouchableOpacity onPress={onRightIconPress}>
                <FontAwesome name={rightIconName} size={20} />
            </TouchableOpacity>
        </View>
    );
};

export default CardSettings;
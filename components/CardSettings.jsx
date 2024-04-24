import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const CardConfig = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFD353',
        marginVertical: 5,
        borderRadius: 15,
        shadowColor: '#000000',
        height: 'auto',
        width: '90%',
        top: 50,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 13,
    },
});

export default CardSettings;
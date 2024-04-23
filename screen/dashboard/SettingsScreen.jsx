import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../themes/theme';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleScreen}>Configuraciones</Text>
        </View>
    );
};

export default SettingsScreen;
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../themes/theme';
import CalendarioGeneric from '../../components/CalendarioGeneric';

const CalendarioScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleScreen}>Calendario</Text>
        </View>
    );
};

export default CalendarioScreen;
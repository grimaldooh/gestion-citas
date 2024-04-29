import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../themes/theme';
import WeekCalendar from '../../components/WeekCalendar';

const CalendarioScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleScreen}>Calendario</Text>
            <WeekCalendar/>
        </View>
    );
};

export default CalendarioScreen;

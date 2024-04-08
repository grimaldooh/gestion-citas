import React from 'react';
import NavBar from '../components/navBar';
import { View } from 'react-native';
import { styles } from '../theme';

const AppointmentScreen = () => {
    return (
        <View style={styles.container}>
            <NavBar />
        </View>
    );
};

export default AppointmentScreen;
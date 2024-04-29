import React from 'react';
import Card from '../../components/CardsTypes/Card';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../themes/theme';

import img from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona2.jpg';

const CitasActivasScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleScreen}>Citas Activas</Text>
            <Card img={img} title="María Rodríguez" content="12/04/2024 - 02:30PM" />
            <Card img={img2} title="Juan Pérez" content="13/04/2024 - 10:45AM" />
            <Card img={img} title="Luisa Gómez" content="14/04/2024 - 03:15PM" />
            <Card img={img2} title="Carlos Martínez" content="15/04/2024 - 11:20AM" />
            <Card img={img} title="Ana López" content="16/04/2024 - 01:55PM" />
            <Card img={img2} title="Pedro Sánchez" content="17/04/2024 - 09:00AM" />
            <Card img={img} title="Laura García" content="18/04/2024 - 04:30PM" />
            <Card img={img2} title="Elena Martínez" content="19/04/2024 - 12:00PM" />
            <Card img={img} title="María Rodríguez López" content="23/04/2024 - 01:30PM" />
            <Card img={img2} title="Juan Pérez Martínez" content="24/04/2024 - 10:45AM" />
        </ScrollView>
    );
};

export default CitasActivasScreen;
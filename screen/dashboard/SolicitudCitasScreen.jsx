import React from 'react';
import Card from '../../components/Card';

//se importan las imagenes de las personas
import img from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona2.jpg';
import { View } from 'react-native';
import { styles } from '../../theme';

const SolicitudCitasScreen = () => {
    return (
        <View style={styles.container}>
            <Card img={img} title="Diego Merino" content="10/04/2024 - 01:00PM"/>
        </View>
    );
};

export default SolicitudCitasScreen;
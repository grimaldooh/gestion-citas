import React from 'react';
import Card from '../../components/Card';

//se importan las imagenes de las personas
import img from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona2.jpg';
import { View } from 'react-native'; // Cambiado de 'react-native-web' a 'react-native'
import { styles } from '../../theme';

const SolicitudCitasScreen = () => {
    return (
        <View style={styles.container}>
            <Card img={img} title="Aqui tus citas ajio" content="Todas tus citas estaran aqui" />
            <Card img={img2} title="Otra cita mas" content="Todas tus citas estaran aqui" />
        </View>
    );
};

export default SolicitudCitasScreen;
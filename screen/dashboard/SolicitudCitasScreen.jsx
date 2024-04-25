import React from 'react';
import Card from '../../components/Card';
import ButtonGeneric from '../../components/ButtonGeneric';
//se importan las imagenes de las personas
import img from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona2.jpg';
import { View, Text } from 'react-native';
import { styles } from '../../themes/theme';

const SolicitudCitasScreen = () => {
    const handleAcceptPress = () => {
        console.log('Accept button pressed');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titleScreen}>Solicitud de Citas</Text>
            <Card img={img} title="Diego Francisco Merino Huizar" content="10/04/2024 - 01:00PM" />
            {/* <ButtonGeneric
                backgroundColor="accept"
                fontSize="small"
                width="small"
                height="small"
            > Aceptar</ButtonGeneric>
            <ButtonGeneric
                backgroundColor="reject"
                fontSize="small"
                width="small"
                height="small"
            > Rechazar</ButtonGeneric> */}
        </View>

    );
};

export default SolicitudCitasScreen;
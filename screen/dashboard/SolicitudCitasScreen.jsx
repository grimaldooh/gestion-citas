import React from 'react';
import CardCitas from '../../components/CardsTypes/CardCitas';

//se importan las imagenes de las personas
import img from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona2.jpg';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../themes/theme';

const SolicitudCitasScreen = () => {
    const handleAcceptPress = () => {
        console.log('Accept button pressed');
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleScreen}>Solicitud de Citas</Text>
            <CardCitas img={img} title="María García López" content="15/04/2024 - 10:30AM" />
            <CardCitas img={img2} title="Juan Pérez Rodríguez" content="16/04/2024 - 02:15PM" />
            <CardCitas img={img} title="Ana Martínez Sánchez" content="17/04/2024 - 09:45AM" />
            <CardCitas img={img2} title="Pedro González Martínez" content="18/04/2024 - 11:00AM" />
            <CardCitas img={img} title="Laura Fernández García" content="19/04/2024 - 03:30PM" />
            <CardCitas img={img2} title="Carlos Rodríguez Pérez" content="20/04/2024 - 12:45PM" />
            <CardCitas img={img} title="Elena Sánchez Martínez" content="21/04/2024 - 08:00AM" />
            <CardCitas img={img2} title="Luis López García" content="22/04/2024 - 04:20PM" />

        </ScrollView>

    );
};

export default SolicitudCitasScreen;
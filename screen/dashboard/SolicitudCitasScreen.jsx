import React from 'react';
import Card from '../../components/Card';
import ButtonGeneric from '../../components/ButtonGeneric';
//se importan las imagenes de las personas
import img from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona2.jpg';
import { View } from 'react-native';
import { styles } from '../../themes/theme';

const SolicitudCitasScreen = () => {
    const handleAcceptPress = () => {
        console.log('Accept button pressed');
    };
    return (
        <View style={styles.container}>
            <Card img={img} title="Diego Merino" content="10/04/2024 - 01:00PM" />
            <View>
                <ButtonGeneric
                    backgroundColor="reject"
                    fontSize="small"
                    width="small"
                    height="small"
                    onPress={handleAcceptPress}
                >
                    Accept
                </ButtonGeneric>
            </View>
        </View>

    );
};

export default SolicitudCitasScreen;
import React from 'react';
import Card from '../../components/Card';
import CardButton from '../../components/CardButton';
import { View } from 'react-native';
import { styles } from '../../theme';

import img from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona2.jpg';

const CitasActivasScreen = () => {
    return (
        <View style={styles.container}>
            <Card img={img} title="Fernando Samaniego" content="11/04/2024 - 01:00PM"/>
        </View>
    );
};

export default CitasActivasScreen;
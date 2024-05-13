import React from 'react';
import Card from '../../components/CardsTypes/Card';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../../themes/theme';
import img1 from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona5.jpg';
import img3 from '../../assets/images/persona2.jpg';
import img4 from '../../assets/images/persona3.jpg';
import img5 from '../../assets/images/persona4.jpg';
import img6 from '../../assets/images/persona5.jpg';

// Importa los datos del archivo JSON
import citasData from '../../data/citas.json';

const CitasActivasScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleScreen}>Citas Activas</Text>
            {/* Itera sobre los datos del archivo JSON y crea los componentes Card dinámicamente */}
            {citasData.map((cita, index) => (
                <Card 
                    key={index}
                    img={getImageByFilename(cita.img)} 
                    name={cita.name} 
                    date={cita.date} 
                    time={cita.time} 
                />
            ))}
        </ScrollView>
    );
};

// Función para obtener la imagen correspondiente según el nombre de archivo
const getImageByFilename = (filename) => {
    switch (filename) {
        case 'persona.jpg':
            return img1;
        case 'persona1.jpg':
            return img2;
        case 'persona2.jpg':
            return img3;
        case 'persona3.jpg':
            return img4;
        case 'persona4.jpg':
            return img5;
        case 'persona5.jpg':
            return img6;
        default:
            return null;
    }
};

export default CitasActivasScreen;

import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../themes/Appointments/CardTheme';

import ButtonGeneric from './ButtonGeneric';

const Card = ({ title, content, img }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAccept = () => {
    console.log('Aceptar');
    // Lógica para aceptar la cita
  };

  return (
    <View style={[styles.card, styles.boxShadow]}>
      <View style={styles.cardBackground} />
      <Image
        style={styles.card.image}
        source={img}
      />
      <View style={styles.card.textContainer}>
        <Text style={styles.card.title}>{title}</Text>
        <Text style={styles.card.body}>{content}</Text>
        <View style={styles.card.buttonContainer}>
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
      </View>
    </View>
  );
};

export default Card;

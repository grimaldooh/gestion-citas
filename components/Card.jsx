import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../themes/Appointments/CardTheme';
import CardButton from './CardButton';
import ModalComponent from './ModalComponent'; // Importa el componente Modal existente

const Card = ({ title, content, img }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAccept = () => {
    console.log('Aceptar');
    // Lógica para aceptar la cita
  };

  const handleReject = () => {
    console.log('Rechazar');
    setModalVisible(true); // Mostrar la modal al rechazar
  };

  const onReject = () => {
    console.log('Rechazar en la modal');
  }

  const onModify = () => {
    console.log('Modificar en la modal');
  }

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
        <CardButton
          onPress={handleAccept}
          title="Aceptar"
          buttonStyle={styles.card.acceptButton}
          textStyle={styles.card.buttonText}
        />
        <CardButton
          onPress={handleReject}
          title="Rechazar"
          buttonStyle={styles.card.rejectButton}
          textStyle={styles.card.buttonText}
        />
      </View>
    </View>
    <ModalComponent
      title={'Rechazo de cita'}
      message={'¿Qué deseas hacer con la cita?'}
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
    />
  </View>
);
};

export default Card;

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../themes/Appointments/CardTheme';
import Icon from "react-native-vector-icons/FontAwesome5";

const Card = ({citas,cita, setCitasPendientes, img, editarCita }) => {
  // Define el nombre del icono en función del estado
 
  
  const iconName = cita.status === 'pendiente' ? 'clock' : 'check';

  

  return (
    <View style={[styles.card, styles.boxShadow]}>
      <View style={styles.cardBackground} />
      {console.log(cita.id)}
      <Image
        style={styles.card.image}
        source={img}
      />
      <View style={styles.card.textContainer}>
        <Text style={styles.card.title}>{cita.name}</Text>
        <Text style={styles.card.body}>{cita.date} at {cita.time}</Text>
      </View>
      <TouchableOpacity onPress={() => editarCita(cita.id)}>
        <Icon style={styles.card.iconButton} name={iconName} size={18} color="#000" />
      </TouchableOpacity>
      
    </View>
  );
};

export default Card;
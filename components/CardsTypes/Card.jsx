import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../themes/Appointments/CardTheme';
import Icon from "react-native-vector-icons/FontAwesome5";

const Card = ({ name, date, time, img }) => {

  return (
    <View style={[styles.card, styles.boxShadow]}>
      <View style={styles.cardBackground} />
      <Image
        style={styles.card.image}
        source={img}
      />
      <View style={styles.card.textContainer}>
        <Text style={styles.card.title}>{name}</Text>
        <Text style={styles.card.body}>{date} - {time}</Text>
      </View>
    </View>
  );
};

export default Card;

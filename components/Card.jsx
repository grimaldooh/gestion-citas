import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../themes/Appointments/CardTheme';

const Card = ({ title, content, img }) => {

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
      </View>
    </View>
  );
};

export default Card;

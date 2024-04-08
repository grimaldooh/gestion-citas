import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../theme';
import CardButton from './CardButton';
const Card = ({ title, content, img }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.card.image}
        source={{ uri: img }}
      />
      <View style={styles.card.textContainer}>
        <Text style={styles.card.title}>{title}</Text>
        <Text style={styles.card.body}>{content}</Text>
        <View style={styles.card.buttonContainer}>
        <CardButton
                        onPress={() => console.log('Aceptar')}
                        title="Aceptar"
                        buttonStyle={styles.card.acceptButton}
                        textStyle={styles.card.buttonText}
                    />
                    <CardButton
                        onPress={() => console.log('Rechazar')}
                        title="Rechazar"
                        buttonStyle={styles.card.rejectButton}
                        textStyle={styles.card.buttonText}
                    />
        </View>

      </View>
    </View>
  );
};


export default Card;

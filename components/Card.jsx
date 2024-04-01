import React from 'react';
import { View, Text, } from 'react-native';

const Card = ({ title, content }) => {
  return (
    <View>
      <Text >{title}</Text>
      <Text >{content}</Text>
    </View>
  );
};

export default Card;
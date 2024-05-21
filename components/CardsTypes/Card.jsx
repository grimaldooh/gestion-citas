import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../../themes/Appointments/CardTheme";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome5";

const Card = ({ name, time, date, img, editarCita, status, id }) => {
  const iconName = status === "pendiente" ? "clock" : "check";

  return (
    <ScrollView>
      <View style={[styles.card, styles.boxShadow]}>
        <View style={styles.cardBackground} />
        <Image style={styles.card.image} source={img} />
        <View style={styles.card.textContainer}>
          <Text style={styles.card.title}>{name}</Text>
          <Text style={styles.card.body}>
            {date} at {time}
          </Text>
        </View>
        <TouchableOpacity
        >
          <View>
            <Icon
              onPress={() => editarCita(id)}
              style={styles.card.iconButton}
              name='edit'
              size={18}
              color="#000"
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  editarCita: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;

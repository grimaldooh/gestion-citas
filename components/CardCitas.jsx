import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../themes/Appointments/CardCitas";
import ButtonGeneric from "./ButtonGeneric";

import Icon from "react-native-vector-icons/Ionicons";

const Card = ({ title, content, img }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAccept = () => {
    console.log("Aceptar");
    // Lógica para aceptar la cita
  };

const handleReject = () => {
    console.log("Rechazar");
    // Lógica para rechazar la cita
  }

  return (
    <View style={[styles.card, styles.boxShadow]}>
      <View style={styles.cardBackground} />
      <Image style={styles.image} source={img} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{content}</Text>

        {!isCollapsed && (
          <View style={styles.buttonContainer}>
            <ButtonGeneric
              onPress={handleAccept}
              backgroundColor="accept"
              fontSize="small"
              width="small"
              height="small">
              Aceptar
            </ButtonGeneric>
            <ButtonGeneric
                onPress={handleReject}
              backgroundColor="reject"
              fontSize="small"
              width="small"
              height="small">
              Rechazar
            </ButtonGeneric>
          </View>
        )}
      </View>

      <Icon
        style={styles.iconButton}
        name={isCollapsed ? "arrow-down" : "arrow-up"}
        size={24}
        color="black"
        onPress={toggleCollapse}
      />
    </View>
  );
};

export default Card;

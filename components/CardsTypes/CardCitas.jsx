import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated, LayoutAnimation, Platform, UIManager } from "react-native";
import { styles } from "../../themes/Appointments/CardCitas";
import Button from "../CardCitas/Button";
import Icon from 'react-native-vector-icons/FontAwesome5';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Card = ({ title, content, img }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  const toggleCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCollapsed(!isCollapsed);
  };

  const handleAccept = () => {
    console.log("Aceptar");
    // Lógica para aceptar la cita
  };

  const handleReject = () => {
    console.log("Rechazar");
    // Lógica para rechazar la cita
  };

  return (
    <Animated.View style={[styles.card, styles.boxShadow, {opacity: fadeAnim}]}>
      <View style={styles.cardBackground} />
      <Image style={styles.image} source={img} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{content}</Text>

        {!isCollapsed && (
          <View style={styles.buttonContainer}>
            <Button 
              onPress={handleAccept} 
              iconName="check-circle" 
              backgroundColor="#00A416" 
              iconColor="white">
                Aceptar
            </Button>
            <Button 
              onPress={handleReject} 
              iconName="times-circle" 
              backgroundColor="#FF0000" 
              iconColor="white">
                Rechazar
            </Button>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={toggleCollapse}>
        <Icon
          name={isCollapsed ? "arrow-down" : "arrow-up"}
          size={19}
          color="black"
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Card;
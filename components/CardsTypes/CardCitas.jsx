import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
  Modal,
  TouchableHighlight,
} from "react-native";
import { styles } from "../../themes/Appointments/CardCitas";
import Button from "../Buttons/Button";
import Icon from "react-native-vector-icons/FontAwesome5";
import ModalConfirmacion from "../Modals/ModalConfirmacion";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Card = ({ name, date,time, img }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [cardColor, setCardColor] = useState("#FFD353");
  const [modalVisible, setModalVisible] = useState(false);
  const [action, setAction] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const toggleCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCollapsed(!isCollapsed);
    setCardColor("#FFD35");
  };

  const handleConfirm = () => {
    if (action === "accept") {
      handleAccept();
    } else if (action === "reject") {
      handleReject();
    }
    setModalVisible(false);
    setIsCollapsed(true);
  };

  const handleAccept = () => {
    console.log("Aceptar");
    setIsAccepted(true);
    setCardColor("#36A831");
    setIsRejected(false);
    // Lógica para aceptar la cita con API
  };

  const handleReject = () => {
    console.log("Rechazar");
    setIsRejected(true);
    setCardColor("#D23737");
    setIsAccepted(false);
    // Lógica para rechazar la cita con API
  };

  return (
    <Animated.View style={{ ...styles.card, backgroundColor: cardColor }}>
      <View style={styles.cardBackground} />
      <Image style={styles.image} source={img} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.body}>{date} at {time}</Text>
        

        {!isCollapsed && (
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                setAction("accept");
                setModalVisible(true);
              }}
              iconName="check-circle"
              backgroundColor="#00A416"
              iconColor="white">
              Aceptar
            </Button>
            <Button
              onPress={() => {
                setAction("reject");
                setModalVisible(true);
              }}
              iconName="times-circle"
              backgroundColor="#D23737"
              iconColor="white">
              Rechazar
            </Button>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.iconButton} onPress={toggleCollapse}>
        {isAccepted ? (
          <Icon name="check" size={18} color="#000" />
        ) : isRejected ? (
          <Icon name="times" size={18} color="#000" />
        ) : (
          <Icon name="chevron-down" size={18} color="#000" />
        )}
      </TouchableOpacity>
      <ModalConfirmacion
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleConfirm={handleConfirm}
      />
    </Animated.View>
  );
};

export default Card;

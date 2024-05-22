import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

//Importamos los componentes nesesarios
import Button from "../Buttons/Button";
import ModalConfirmacion from "../Modals/ModalConfirmacion";

//Importamos los themes nesesarios
import { styles } from "../../themes/Appointments/CardCitas";


if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Card = ({ cita, key, setCitasProximas, img }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
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
    cita.status = 2;
    console.log("ID de la cita : ", cita.id);

    // Lógica para aceptar la cita con API

    // Generar el JSON para la cita aceptada
    const acceptedCitaJson = JSON.stringify({
      id: cita.id,
      status: cita.status,
    });

    console.log("Cita aceptada JSON:", acceptedCitaJson);

    // Llamada a la API
    fetch(
      `https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/update/${cita.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: acceptedCitaJson,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleReject = () => {
    console.log("Rechazar");
    setIsRejected(true);
    setCardColor("#D23737");
    setIsAccepted(false);
    cita.status = 0;

    // Lógica para rechazar la cita con API

    // Generar el JSON para la cita rechazada
    const rejectedCitaJson = JSON.stringify({
      id: cita.id,
      status: cita.status,
    });

    console.log("Cita rechazada JSON:", rejectedCitaJson);

    // Llamada a la API
    fetch(
      `https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/delete/${cita.id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Actualizar el estado de las citas para excluir la cita rechazada
        setCitasProximas((prevCitas) =>
          prevCitas.filter((c) => c.id !== cita.id)
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Animated.View style={{ ...styles.card, backgroundColor: cardColor }}>
      <View style={styles.cardBackground} />
      <Image style={styles.image} source={img} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{cita.name}</Text>
        <Text style={styles.body}>
          {cita.date} at {cita.time}
        </Text>

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

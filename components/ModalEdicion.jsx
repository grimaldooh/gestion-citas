import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import {
  Divider,
  NativeBaseProvider,
  Heading,
  Stack,
  Button,
  Text,
} from "native-base";
import { settingsStyle } from "'../themes/PantallasStyles/SettingsTheme";
import DateTimePicker from "@react-native-community/datetimepicker";
import backArrow from "../../Imagenes/backArrow.png";

const ModalEdicion = ({
  cita,
  onClose,
  modalVisible,
  citas,
  setCitas,
  oldCita,
}) => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isDateChangeAllowed, setIsDateChangeAllowed] = useState(false);
  const [isOldCita, setIsOldCita] = useState(oldCita);

  const [nombre, setNombre] = useState(cita.nombre);
  const [fecha, setFecha] = useState(cita.fecha);
  const [state, setState] = useState(cita.state);

  useEffect(() => {
    setNombre(cita.nombre);
    setFecha(cita.fecha);
    setIsDatePickerVisible(false);
    setIsDateChangeAllowed(false);
    setIsOldCita(oldCita);
  }, [cita]);

  // modalVisible = true;

  const onDateChange = (event, selectedDate) => {
    setIsDateChangeAllowed(true);
    if (isDateChangeAllowed) {
      const currentDate = selectedDate || date;
      setIsDatePickerVisible(Platform.OS === "ios");
      setFecha(
        `${currentDate.getFullYear()}-${(
          "0" +
          (currentDate.getMonth() + 1)
        ).slice(-2)}-${("0" + currentDate.getDate()).slice(-2)}, ${(
          "0" + currentDate.getHours()
        ).slice(-2)}:${("0" + currentDate.getMinutes()).slice(-2)}`
      );
      setIsDateChangeAllowed(false);
    }
  };

  const confirmarCita = () => {
    Alert.alert(
      "Petición enviada",
      "Tu solicitud de reagendación ha sido enviada al cliente. Espera su respuesta.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const handleGuardar = () => {
    const indexCita = citas.findIndex((c) => c.id === cita.id);
    const nuevasCitas = [...citas];
    nuevasCitas[indexCita] = { ...cita, fecha }; // aqui se
    setCitas(nuevasCitas);
    setNombre(cita.nombre);
    cita.state = "reagendada";
    setState("reagendada");
    console.log("Cita actualizada:", { fecha, nombre, state });
    setIsDatePickerVisible(false);
    //Hacer la petición a la API
    onClose();
    confirmarCita();
  };

  const showDatePicker = () => {
    setIsDateChangeAllowed(true);

    setIsDatePickerVisible(true);
  };

  return (
    <View style={[{}]}>
      <Modal
        animationType="fade"
        transparent={true}
        // visible={modalVisible}
        visible={modalVisible}
        onRequestClose={onClose}
      >
        <View style={settingsStyle.overlay}>
          <View
            style={[settingsStyle.modalView, { justifyContent: "flex-start" }]}
          >
            <View
              style={{
                position: "absolute",
                padding: 10,
              }}
            >
              <TouchableOpacity onPress={onClose}>
                <Image
                  source={backArrow}
                  style={{
                    width: 30, // Ajusta el ancho de la imagen
                    height: 30, // Ajusta la altura de la imagen
                    // Posiciona la imagen de manera absoluta
                    top: 10, // Ajusta la distancia desde la parte superior del modal
                    left: 10, // Ajusta la distancia desde el lado izquierdo del modal
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={[{ width: 250, marginTop: 15 }]}>
              <Text
                style={{
                  fontWeight: "bold",
                  alignSelf: "center",
                  fontSize: 20,
                }}
              >
                Modificar cita
              </Text>

              <Text
                style={{
                  alignSelf: "flex-start",
                  marginTop: 25,
                  fontWeight: "bold",
                }}
              >
                Informacion de la cita{" "}
              </Text>

              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Nombre : </Text>
                <Text>{cita.nombre}</Text>
              </View>

              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Fecha : </Text>
                <Text>{cita.fecha}</Text>
              </View>
            </View>
            <Text style={{ marginTop: 25, marginLeft: 10 }}>
              Añadir mensaje :{" "}
            </Text>
            <TextInput
              style={[
                settingsStyle.input,
                {
                  justifyContent: "flex-start",
                  padding: 10,
                  width: 250,
                  height: 100,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 10,
                  textAlignVertical: "top",
                },
              ]}
              placeholder={"Escribe un mensaje para " + cita.nombre}
              borderRadius={10}
              multiline={true}
              //onChangeText={setNombre}
            />
            {/* <Text style={{ marginTop: 10, marginLeft: 10 }}>Fecha : </Text>
            <TextInput
              style={settingsStyle.input}
              onChangeText={setFecha}
              placeholder={cita ? cita.fecha : ""}
            /> */}

            <Button
              onPress={showDatePicker}
              style={{
                marginBottom: 15,
                marginTop: 5,
              }}
              size="sm"
              variant="subtle"
              colorScheme="cyan"
            >
              <Text style={{ textAlign: "left" }}>Cambiar fecha y hora</Text>
            </Button>
            <View style={{ width: "85%" }}>
              {isDatePickerVisible && (
                <DateTimePicker
                  testID="datePicker"
                  value={date}
                  mode={"datetime"}
                  is24Hour={true}
                  display="default"
                  onChange={onDateChange}
                />
              )}
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              {isOldCita && (
                <Button
                  onPress={onClose}
                  style={{ marginTop: 15 }}
                  size="sm"
                  variant="subtle"
                  colorScheme="red"
                >
                  <Text>Cancelar cita</Text>
                </Button>
              )}
              <Button
                onPress={() => {
                  console.log("Botón Guardar cambios presionado");
                  handleGuardar();
                  onClose();
                }}
                style={{ marginTop: 15 }}
                size="sm"
                variant="subtle"
                colorScheme="cyan"
              >
                <Text>Enviar solicitud </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalEdicion;

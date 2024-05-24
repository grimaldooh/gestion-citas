import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Divider, Button, Text } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Ionicons";

//importamos componentes
import { ModalForms } from "../../themes/Appointments/modalFormsTheme";
import ModalConfirmacion from "../Modals/ModalConfirmacion";

const ModalEdicion = ({
  cita,
  onClose,
  modalVisible,
  citas,
  setCitasPendientes,
  oldCita,
}) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isDateChangeAllowed, setIsDateChangeAllowed] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isOldCita, setIsOldCita] = useState(oldCita);
  const [mode, setMode] = useState("date"); // Add this line
  const [name, setName] = useState(cita.name);
  const [dateCita, setDateCita] = useState(cita.date);
  const [timeCita, setTimeCita] = useState(cita.time);
  const [status, setStatus] = useState(cita.status);
  const [modalVisibleConfirmacion, setModalVisibleConfirmacion] =
    useState(false);

  useEffect(() => {
    setName(cita.name);
    setDateCita(cita.date);
    setTimeCita(cita.time);
    //setTime(cita.time);
    setIsDatePickerVisible(false);
    setIsDateChangeAllowed(false);
    setIsOldCita(oldCita);
  }, [cita]);

  // modalVisible = true;

  const onDateChange = (event, selectedValue) => {
    const currentDate = selectedValue || date;
    setDate(currentDate);
    setDateCita(
      `${currentDate.getFullYear()}-${(
        "0" +
        (currentDate.getMonth() + 1)
      ).slice(-2)}-${("0" + currentDate.getDate()).slice(-2)}`
    );
    setIsDatePickerVisible(false);
  };

  const onTimeChange = (event, selectedValue) => {
    const currentTime = selectedValue;
    setTime(currentTime);
    setTimeCita(
      `${("0" + currentTime.getHours()).slice(-2)}:${(
        "0" + currentTime.getMinutes()
      ).slice(-2)}`
    );
    setIsTimePickerVisible(false);
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
    //console.log("Citas actualizadas:", time);
    cita.time = `${timeCita}:00`;
    cita.date = dateCita;
    setName(cita.name);
    cita.duration = duration;
    cita.status = 2;
    setStatus("reagendada");
    console.log("Cita actualizada:", { dateCita, name, status });
    setIsDatePickerVisible(false);
    console.log("dateCita:", cita.date);
    console.log("timeCita:", cita.time);
    console.log("duration:", cita.duration);
    console.log("status:", cita.status);
    //Hacer la petición a la API
    // Generar el JSON para la cita actualizada
    const updatedCitaJson = JSON.stringify({
      startDate: cita.date,
      startTime: cita.time.slice(0, 8), // Tomar solo las primeras 8 caracteres de la hora para asegurar el formato correcto
      durationMinutes: cita.duration,
      status: cita.status,
    });

    // Hacer la petición a la API con el JSON de la cita actualizada

    fetch(
      `https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/update/${cita.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: updatedCitaJson,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const nuevasCitas = [...citas];
    nuevasCitas[indexCita] = { ...cita }; // Actualiza la dateCita de la cita    setCitasPendientes(nuevasCitas);
    setCitasPendientes(nuevasCitas); // Actualiza el estado citas con el nuevo array
    onClose();
    confirmarCita();
  };

  const handleCancelar = () => {
    // Lógica para cancelar la cita con API
    // Generar el JSON para la cita cancelada
    const canceledCitaJson = JSON.stringify({
      id: cita.id,
      status: 0,
    });

    console.log("Cita cancelada JSON:", canceledCitaJson);

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

        const indexCita = citas.findIndex((c) => c.id === cita.id);
        const nuevasCitas = [...citas];
        nuevasCitas.splice(indexCita, 1);
        setCitasPendientes(nuevasCitas);
        console.log("Cita cancelada:", { dateCita, name, status });
        setCitasPendientes((prevCitas) =>
          prevCitas.filter((c) => c.id !== cita.id)
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    onClose();
  };

  const showTimePicker = () => {
    //setIsDateChangeAllowed(true);
    setMode("time");
    setIsTimePickerVisible(true);
  };

  const showDatePicker = () => {
    setIsDateChangeAllowed(true);
    setMode("date");
    setIsDatePickerVisible(true);
  };

  const handleConfirm = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 80 })}>
      <Modal
        animationType="fade"
        transparent={true}
        // visible={modalVisible}
        visible={modalVisible}
        onRequestClose={onClose}>
        <View style={ModalForms.overlay}>
          <View style={[ModalForms.modalContainerEdicion]}>
            <View>
              <View>
                <Text style={ModalForms.title}>Modificar cita</Text>
                <TouchableOpacity onPress={onClose}>
                  <Icon
                    style={ModalForms.iconModalEdicion}
                    name="close"
                    size={26}
                    color="#FFF"
                  />
                </TouchableOpacity>
              </View>
              <Text style={ModalForms.label}>
                <Text style={{ color: "white" }}>Informacion de la cita </Text>
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={ModalForms.label}>Nombre : </Text>
                <Text style={ModalForms.text}>{cita.name}</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={ModalForms.label}>Fecha : </Text>
                <Text style={ModalForms.text}>
                  {cita.date}, {cita.time}
                </Text>
              </View>
            </View>
            <Divider style={{ marginTop: 10, marginBottom: 10 }} />
            <Text style={ModalForms.label}>Añadir mensaje : </Text>
            <TextInput
              style={ModalForms.inputLarge}
              placeholder={"Escribe un mensaje para " + cita.name}
              borderRadius={10}
              multiline={true}></TextInput>

            <TouchableOpacity
              style={ModalForms.button.modify}
              onPress={showTimePicker}>
              <Text style={ModalForms.buttonText}>Cambiar Hora</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={ModalForms.button.modify}
              onPress={showDatePicker}>
              <Text style={ModalForms.buttonText}>Cambiar Fecha</Text>
            </TouchableOpacity>

            <View style={{ width: "85%" }}>
              {isDatePickerVisible && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onDateChange}
                />
              )}
            </View>

            <View style={{ width: "85%" }}>
              {isTimePickerVisible && (
                <DateTimePicker
                  testID="TimePicker"
                  value={time}
                  mode={"time"}
                  is24Hour={true}
                  display="default"
                  onChange={onTimeChange}
                />
              )}
            </View>
            <Divider style={{ marginTop: 15 }} />
            <View
              style={{ flexDirection: "row", marginTop: 15, marginBottom: 10 }}>
              <Text style={ModalForms.label}>
                Duración de la cita (minutos) :{" "}
              </Text>
              <TextInput
                style={ModalForms.inputSmall}
                value={duration.toString()}
                onChangeText={setDuration}
                keyboardType="numeric"
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}>
              {isOldCita && (
                <Button
                  onPress={() => {
                    setModalVisibleConfirmacion(true);
                  }}
                  style={{ marginTop: 15 }}
                  size="sm"
                  colorScheme="red">
                  <Text style={{ color: "white" }}>Cancelar cita</Text>
                </Button>
              )}
              <Button
                onPress={() => {
                  //setModalVisibleConfirmacion(true);
                  handleGuardar();
                }}
                style={{ marginTop: 15 }}
                size="sm"
                colorScheme="green">
                <Text style={{ color: "white" }}>Enviar solicitud </Text>
              </Button>
            </View>
          </View>
        </View>
        <ModalConfirmacion
          modalVisible={modalVisibleConfirmacion}
          setModalVisible={setModalVisibleConfirmacion}
          handleConfirm={() => {
            setModalVisibleConfirmacion(false);
            handleCancelar();
          }}
        />
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default ModalEdicion;

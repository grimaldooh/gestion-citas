import React, { useState, useEffect } from "react";
import {View, TouchableOpacity,Image, Modal, TextInput, Platform, Alert } from "react-native";
import { Divider, NativeBaseProvider, Heading, Stack, Button, Text } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import backArrow from "../../assets/images/backArrow.png";

import { CardConfig } from "../../themes/PantallasStyles/SettingsTheme";
import { ModalForms } from "../../themes/Appointments/modalFormsTheme";

const ModalEdicion = ({cita, onClose, modalVisible, citas, setCitas, oldCita}) => {
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

  useEffect(() => {
    setName(cita.name);
    setDateCita(cita.date);
    setTimeCita(cita.time);
    setTime(cita.time);
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
    const currentTime = selectedValue || date;
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
    const nuevasCitas = [...citas];
    nuevasCitas[indexCita] = { ...cita, date, time }; // Actualiza la dateCita de la cita    setCitas(nuevasCitas);
    //console.log("Citas actualizadas:", time);
    cita.time = timeCita;
    cita.date = dateCita;
    setName(cita.name);
    cita.duration = duration;
    cita.status = "aceptada";
    setStatus("reagendada");
    console.log("Cita actualizada:", { dateCita, name, status });
    setIsDatePickerVisible(false);
    //Hacer la petición a la API
    // Generar el JSON para la cita actualizada
    const updatedCitaJson = JSON.stringify({
      id: cita.id,
      status: cita.status,
      date: cita.date,
      time: cita.time,
      duration: cita.duration,
  });

  // Hacer la petición a la API con el JSON de la cita actualizada
    onClose();
    confirmarCita();
  };

  const showTimePicker = () => {
    setIsDateChangeAllowed(true);
    setMode("time");
    setIsTimePickerVisible(true);
  };

  const showDatePicker = () => {
    setIsDateChangeAllowed(true);
    setMode("date");
    setIsDatePickerVisible(true);
  };

  return (
      <Modal
        animationType="fade"
        transparent={true}
        // visible={modalVisible}
        visible={modalVisible}
        onRequestClose={onClose}
      >
        <View style={ModalForms.overlay}>
          <View style={[CardConfig.modalView, { justifyContent: "flex-start" }]}>
            <View style={{ position: "absolute", padding: 10 }}>
              <TouchableOpacity onPress={onClose}>
                <Image source={backArrow}
                  style={{
                    width: 30,
                    height: 30,
                    top: 33,
                    left: 25,
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
                <Text>{cita.name}</Text>
              </View>

              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Fecha : </Text>
                <Text>
                  {cita.date}, {cita.time}
                </Text>
              </View>
            </View>
            <Text style={{ marginTop: 25, marginLeft: 10 }}>
              Añadir mensaje :{" "}
            </Text>
            <TextInput
              style={[
                CardConfig.input,
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
              placeholder={"Escribe un mensaje para " + cita.name}
              borderRadius={10}
              multiline={true}
              //onChangeText={setName}
            />
            {/* <Text style={{ marginTop: 10, marginLeft: 10 }}>dateCita : </Text>
            <TextInput
              style={CardConfig.input}
              onChangeText={setDateCita}
              placeholder={cita ? cita.dateCita : ""}
            /> */}

            <Button
              onPress={showTimePicker}
              style={{
                marginBottom: 15,
                marginTop: 5,
              }}
              size="sm"
              variant="subtle"
              colorScheme="cyan"
            >
              <Text style={{ textAlign: "left" }}>Cambiar hora</Text>
            </Button>

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
              <Text style={{ textAlign: "left" }}>Cambiar fecha</Text>
            </Button>
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
                  value={date}
                  mode={"time"}
                  is24Hour={true}
                  display="default"
                  onChange={onTimeChange}
                />
              )}
            </View>
            <Divider style={{ marginTop: 15 }} />
            <View style={{ flexDirection: "row", marginTop: 15 , marginBottom: 10}}>
              <Text style={{marginTop:3, fontWeight:"bold"}}>Duración de la cita (minutos) :   </Text>
              <TextInput
                style={{borderWidth:1, borderColor:"black", textAlign:"center", width:35}}
                placeholder={""}
                borderRadius={10}

                onChangeText={setDuration}
              />
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
  );
};

export default ModalEdicion;

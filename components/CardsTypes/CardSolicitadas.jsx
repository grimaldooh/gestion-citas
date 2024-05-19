import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import {
  Divider,
  NativeBaseProvider,
  Heading,
  Stack,
  Button,
} from "native-base";

import { citaGestor } from "../styles/global";
import checkmark from "../../Imagenes/checkmark.png";
import crossmark from "../../Imagenes/crossmark.webp";
import ModalEdicion from "./modalEdicion";

export function CitasSolicitadasHoy({ citas, setCitasSolicitadasHoy }) {
  const [modalEdicionVisible, setModalEdicionVisible] = useState(false);
  const [selectedCitaId, setSelectedCitaId] = useState(null);
  const [selectedCita, setSelectedCita] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const { aceptedCita, setAceptedCita } = useState(false);

  const closeModal = () => {
    setModalEdicionVisible(false);
  };

  const editarCita = (id) => {
    // Implementar la lógica para editar el usuario con `id`
    console.log("Editar usuario con ID:", id);
    const citaSeleccionada = citas.find((cita) => cita.id === id);
    if (citaSeleccionada) {
      setModalEdicionVisible(true);
      setSelectedCita(citaSeleccionada);
    }
  };

  // const [citas, setCitasSolicitadasHoy] = useState([
  //   {
  //     nombre: "Bart Simpson",
  //     fecha: "hoy : 10:45 a.m",
  //     image: require("../../Imagenes/foto.png"),
  //     id: 1,
  //     state: "",
  //   },
  //   {
  //     nombre: "Lionel Messi",
  //     fecha: "hoy : 12:30 p.m",
  //     image: require("../../Imagenes/foto.png"),
  //     id: 2,
  //     state: "",
  //   },
  //   {
  //     nombre: "CR7",
  //     fecha: "mañana : 4:30 p.m",
  //     image: require("../../Imagenes/foto.png"),
  //     id: 3,
  //     state: "",
  //   },
  //   {
  //     nombre: "Elon Musk",
  //     fecha: "14,4,24 11:00 a.m",
  //     image: require("../../Imagenes/foto.png"),
  //     id: 4,
  //     state: "",
  //   },
  // ]);

  return (
    <NativeBaseProvider>
      <View style={[{ marginTop: 10, marginBottom: 50 }]}>
        {citas.map((cita) => (
          <View
            key={cita.id}
            style={[
              {
                flexDirection: "column",
                borderRadius: 20,
                //padding: 10,
                borderWidth: 1,
                borderColor: "black",
                marginTop: 35,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 15,
              },
            ]}>
            <View
              style={[
                {
                  flexDirection: "row",
                  padding: 10,
                },
              ]}>
              <Image
                source={cita.image}
                style={{ width: 90, height: 90, borderRadius: 25 }}
              />
              <Divider bg="black" thickness="1" mx="2" orientation="vertical" />
              <View
                style={[
                  citaGestor.citasContainer,
                  { borderRadius: 25, padding: 5 },
                ]}>
                <View style={[{ flexDirection: "column" }]}>
                  <View style={citaGestor.citasTop}>
                    <Heading size="md">{cita.nombre}</Heading>
                  </View>

                  <View style={citaGestor.citas}>
                    <Text>{cita.fecha}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[{ marginTop: 10, marginBottom: 10, maxWidth: "95%" }]}>
              <Divider
                bg="black"
                thickness="1"
                mx="2"
                orientation="horizontal"
              />
            </View>
            {selectedCitaId !== cita.id && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "80%",
                  marginLeft: "10%",
                  padding: 3,
                }}>
                <Stack
                  mb="2.5"
                  mt="1.5"
                  direction={{
                    base: "row",
                    md: "row",
                  }}
                  space={2}
                  mx={{
                    base: "auto",
                    md: "0",
                  }}>
                  <Button
                    size="sm"
                    variant="subtle"
                    onPress={() => {
                      setSelectedCitaId(cita.id);
                      setSelectedAction("aceptar");
                    }}>
                    <Text>Aceptar</Text>
                  </Button>
                  <Button
                    size="sm"
                    variant="subtle"
                    colorScheme="emerald"
                    onPress={() => editarCita(cita.id)}>
                    <Text>Modificar fecha</Text>
                  </Button>
                  <Button
                    size="sm"
                    variant="subtle"
                    colorScheme="secondary"
                    onPress={() => {
                      setSelectedCitaId(cita.id);
                      setSelectedAction("rechazar");
                    }}>
                    <Text>Rechazar</Text>
                  </Button>
                </Stack>
              </View>
            )}

            {selectedCitaId === cita.id && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "80%",
                  marginLeft: "10%",
                  marginBottom: 10,
                }}>
                <Button
                  size="sm"
                  variant="subtle"
                  colorScheme={
                    selectedAction === "rechazar" ? "red" : undefined
                  }
                  onPress={() => {
                    // Aquí puedes poner cualquier otra lógica que necesites ejecutar cuando se haga clic en "Confirmar"
                    setSelectedCitaId(null);
                    if (selectedAction === "aceptar") {
                      cita.state = "aceptada";
                    } else if (selectedAction === "rechazar") {
                      cita.state = "rechazada";
                    }
                    //confirmarCita();
                  }}>
                  <Text>Confirmar</Text>
                </Button>
                <Button
                  size="sm"
                  variant="subtle"
                  colorScheme={selectedAction === "aceptar" ? "red" : undefined}
                  onPress={() => {
                    setSelectedCitaId(null);
                    // confirmarCita();
                  }}>
                  <Text>Cancelar</Text>
                </Button>
              </View>
            )}
            <View style={{ width: "100%" }}>
              {selectedCita && (
                <ModalEdicion
                  cita={selectedCita}
                  onClose={closeModal}
                  modalVisible={modalEdicionVisible}
                  citas={citas}
                  setCitas={setCitasSolicitadasHoy}
                />
              )}
            </View>
            {cita.state === "aceptada" && (
              <View
                style={{
                  flex: 1,
                  backgroundColor: "lightgreen",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}>
                  <View>
                    <Image
                      source={checkmark}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Cita aceptada
                    </Text>

                    <Text style={{ marginTop: 15 }}>{cita.nombre} </Text>
                    <Text style={{ marginTop: 5 }}>{cita.fecha}</Text>
                  </View>
                </View>
                <View style={{ marginTop: 45 }}>
                  <Text>Se envió una notificación al solicitante</Text>
                </View>
              </View>
            )}

            {cita.state === "rechazada" && (
              <View
                style={{
                  flex: 1,
                  backgroundColor: "lightcoral",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}>
                  <View>
                    <Image
                      source={crossmark}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Cita rechazada
                    </Text>

                    <Text style={{ marginTop: 15 }}>{cita.nombre} </Text>
                    <Text style={{ marginTop: 5 }}>{cita.fecha}</Text>
                  </View>
                </View>
                <View style={{ marginTop: 45 }}>
                  <Text>Se envió una notificación al solicitante</Text>
                </View>
              </View>
            )}

            {cita.state === "reagendada" && (
              <View
                style={{
                  flex: 1,
                  backgroundColor: "lightblue",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}>
                  <View>
                    <Image
                      source={crossmark}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>
                  <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      Cita reagendada
                    </Text>

                    <Text style={{ marginTop: 15 }}>{cita.nombre} </Text>
                    <Text style={{ marginTop: 5 }}>{cita.fecha}</Text>
                  </View>
                </View>
                <View style={{ marginTop: 45 }}>
                  <Text>Se envió una peticion de cambio al solicitante</Text>
                </View>
              </View>
            )}
          </View>
        ))}
      </View>
    </NativeBaseProvider>
  );
}

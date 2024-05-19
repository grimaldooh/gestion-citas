import React, { useState, useContext, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

//Importamos componentes nesesarios
import ButtonGeneric from "../Buttons/ButtonGeneric";

//Importamos Estilos Nesesarios
import { ModalForms } from "../../themes/Appointments/modalFormsTheme";
import { styles } from "../../themes/theme";
import { CardConfig } from "../../themes/PantallasStyles/SettingsTheme";
import UserIdContext from "../../context/userContext";

const AboutAppModal = ({ visible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profession, setProfession] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { userId } = useContext(UserIdContext);

  const [user, setUser] = useState({
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    address: "Cortez 123, Ensenada, Baja California",
    profession: "Dentista",
  });

  useEffect(() => {
    // Llamada a la API para obtener la información del usuario
    fetch(
      `https://24a5-187-188-39-222.ngrok-free.app/api/User/read/${userId}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Actualizar el estado del usuario con los datos obtenidos de la API
        setUser({
          id: data.id,
          name: data.fullName,
          email: data.email,
          address: data.address,
          profession: data.profession,
          phoneNumber: data.phoneNumber,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userId]); // Dependencia para el useEffect, se ejecutará cada vez que cambie el userId

  const saveChanges = () => {
    // Actualizar el estado del usuario con los nuevos valores
    setUser({
      ...user,
      name: name,
      email: email,
      address: address,
      profession: profession,
      phoneNumber: phoneNumber,
    });

    // Generar el JSON para el usuario actualizado
    const updatedUserJson = JSON.stringify({
      id: user.id,
      fullName: name,
      email: email,
      address: address,
      profession: profession,
      phoneNumber: phoneNumber,
    });

    console.log("Usuario actualizado JSON:", updatedUserJson);

    // Llamada a la API
    fetch(
      `https://24a5-187-188-39-222.ngrok-free.app/api/User/update/${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: updatedUserJson,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:");
        // Actualizar el estado del usuario con los datos actualizados
        setUser({
          id: data.id,
          name: name,
          email: email,
          address: address,
          profession: profession,
          phoneNumber: phoneNumber,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      onClose();

   
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={ModalForms.overlay}>
        <View style={ModalForms.modalContainer}>
          <Text style={styles.title}>Configuracion del Perfil</Text>
          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}
          >
            Nombre:
            <Text style={[{ color: "white" }]}> {user.name}</Text>
          </Text>

          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}
          >
            Correo:
            <Text style={[{ color: "white" }]}> {user.email}</Text>
          </Text>

          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}
          >
            Domicilio:
            <Text style={[{ color: "white" }]}> {user.address}</Text>
          </Text>

          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}
          >
            Profesión:
            <Text style={[{ color: "white" }]}> {user.profession}</Text>
          </Text>
          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}
          >
            Telefono:
            <Text style={[{ color: "white" }]}> {user.phoneNumber}</Text>
          </Text>

          <TouchableOpacity
            style={ModalForms.button.modify}
            onPress={handlePress}
          >
            <Text style={ModalForms.buttonText}>Modificar información</Text>
          </TouchableOpacity>
          <ButtonGeneric onPress={onClose}>Cerrar</ButtonGeneric>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={ModalForms.overlay}>
              <View style={ModalForms.modalContainerCenter}>
                <Text style={ModalForms.title.blanco}>
                  Modificar información
                </Text>

                <Text style={ModalForms.label}>Nombre: </Text>
                <TextInput
                  style={ModalForms.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Ingresa el nombre a modificar                               "
                />

                <Text style={ModalForms.label}>Correo electronico: </Text>
                <TextInput
                  style={ModalForms.input}
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Ingresa el Correo a modificar                                "
                />

                <Text style={ModalForms.label}>Domicilio: </Text>
                <TextInput
                  style={ModalForms.input}
                  onChangeText={setAddress}
                  value={address}
                  placeholder="Ingresa la direccion a modificar                             "
                />

                <Text style={ModalForms.label}>Profesión: </Text>
                <TextInput
                  style={ModalForms.input}
                  onChangeText={setProfession}
                  value={profession}
                  placeholder="Ingresa la profesion a modificar                             "
                />
                <Text style={ModalForms.label}>Telefono: </Text>
                <TextInput
                  style={ModalForms.input}
                  onChangeText={setPhoneNumber}
                  value={phoneNumber}
                  placeholder="Ingresa el telefono a modificar                             "
                />
                <TouchableOpacity
                  style={ModalForms.button.accept}
                  onPress={() => saveChanges()}
                >
                  <Text style={ModalForms.buttonText}>Guardar Informacion</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </Modal>
  );
};

export default AboutAppModal;

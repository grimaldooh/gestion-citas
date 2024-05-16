import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";

//Importamos componentes nesesarios
import ButtonGeneric from "../ButtonGeneric";
import TextInputModal from "../InputsType/TextInputModal";

//Importamos Estilos Nesesarios
import { ModalForms } from "../../themes/Appointments/modalFormsTheme";
import { styles } from "../../themes/theme";
import { CardConfig } from "../../themes/PantallasStyles/SettingsTheme";

const AboutAppModal = ({ visible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profession, setProfession] = useState("");

  const [user, setUser] = useState({
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    address: "Cortez 123, Ensenada, Baja California",
    profession: "Dentista",
  });

  const saveChanges = () => {
    // Actualizar el estado del usuario con los nuevos valores
    setUser({
      ...user,
      name: name,
      email: email,
      address: address,
      profession: profession,
    });

    // Generar el JSON para el usuario actualizado
    const updatedUserJson = JSON.stringify({
      id: user.id,
      name: name,
      email: email,
      address: address,
      profession: profession,
    });

    console.log("Usuario actualizado JSON:", updatedUserJson);

    // Aquí puedes hacer la petición a la API con el JSON del usuario actualizado
    // ...

    setModalVisible(!modalVisible);
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
      onRequestClose={onClose}>
      <View style={ModalForms.overlay}>
        <View style={ModalForms.modalContainer}>
          <Text style={styles.title}>Configuracion del Perfil</Text>
          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}>
            Nombre:
            <Text style={[{ color: "white" }]}> {user.name}</Text>
          </Text>

          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}>
            Correo:
            <Text style={[{ color: "white" }]}> {user.email}</Text>
          </Text>

          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}>
            Domicilio:
            <Text style={[{ color: "white" }]}> {user.address}</Text>
          </Text>

          <Text
            style={[
              CardConfig.userInformation,
              { color: "#FFD353", fontWeight: "bold" },
            ]}>
            Profesión:
            <Text style={[{ color: "white" }]}> {user.profession}</Text>
          </Text>

          <TouchableOpacity
            style={ModalForms.button.modify}
            onPress={handlePress}>
            <Text style={ModalForms.buttonText}>Modificar información</Text>
          </TouchableOpacity>
          <ButtonGeneric onPress={onClose}>Cerrar</ButtonGeneric>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={ModalForms.overlay}>
              <View style={CardConfig.modalView}>
                <Text style={styles.titleModal}>Modificar información</Text>

                <Text style={{ marginTop: 25, marginLeft: 10 }}>Nombre: </Text>
                <TextInput
                  style={ModalForms.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Ingresa el nombre a modificar                               "
                />

                <Text style={{ marginTop: 10, marginLeft: 10 }}>
                  Correo electronico:{" "}
                </Text>
                <TextInput
                  style={ModalForms.input}
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Ingresa el Correo a modificar                                "
                />

                <Text style={{ marginTop: 10, marginLeft: 10 }}>
                  Domicilio:{" "}
                </Text>
                <TextInput
                  style={ModalForms.input}
                  onChangeText={setAddress}
                  value={address}
                  placeholder="Ingresa la direccion a modificar                             "
                />

                <Text style={{ marginTop: 10, marginLeft: 10 }}>
                  Profesión:{" "}
                </Text>
                <TextInput
                  style={ModalForms.input}
                  onChangeText={setProfession}
                  value={profession}
                  placeholder="Ingresa la profesion a modificar                             "
                />
                <Button title="Guardar cambios" onPress={() => saveChanges()} />
              </View>
            </View>
          </Modal>
          
        </View>
      </View>
    </Modal>
  );
};

export default AboutAppModal;

import React, { useState } from 'react';
import { View, Text , TextInput, Button, Modal} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { CardConfig } from "../themes/PantallasStyles/SettingsTheme";
import TextInputModal from '../components/InputsType/TextInputModal';


function SettingsView() {
    const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [profession, setProfession] = useState('');

  const [user, setUser] = useState({
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    address: 'Cortez 123, Ensenada, Baja California',
    profession: 'Dentista',
  });

  const saveChanges = () => {
    // Actualizar el estado del usuario con los nuevos valores
    setUser({
        ...user,
        name: name,
        email: email,
        address: address,
        profession: profession
    });

    // Generar el JSON para el usuario actualizado
    const updatedUserJson = JSON.stringify({
        id: user.id,
        name: name,
        email: email,
        address: address,
        profession: profession
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
    setUser({...user, [name]: value});


  };

  return (
    <View style={CardConfig.container}>
      <View style={CardConfig.userContainer}>
        <Text style={CardConfig.title}>Datos del usuario</Text>
        <Text style={CardConfig.userInformation}>Nombre: {user.name}</Text>
        <Text style={CardConfig.userInformation}>Correo: {user.email}</Text>
        <Text style={CardConfig.userInformation}>Domicilio: {user.address}</Text>
        <Text style={CardConfig.userInformation}>Profesión: {user.profession}</Text>
        <View style={{justifyContent: 'flex-end' }}>
            <Button title="Modificar información" onPress={handlePress} />
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={CardConfig.overlay}>
        <View style={[CardConfig.modalView, { justifyContent: 'flex-start' }]}>
            <Text style={{fontWeight : "bold"}}>Modificar información</Text>

            <Text style={{marginTop : 25, marginLeft:10}}>Nombre: </Text>
            <TextInput style={ModalForms.input} editable={true} placeholder='Duración de la cita'  />
            <TextInput
                style={[CardConfig.input, {justifyContent : "flex-start"}]}
                
                onChangeText={setName}
                value={name}
            />
            <Text style={{marginTop : 10, marginLeft:10}}>Correo electronico: </Text>
            <TextInput
              style={CardConfig.input}
              onChangeText={setEmail}
              value={email}
            />
            <Text style={{marginTop : 10, marginLeft:10}}>Domicilio: </Text>
            <TextInput
              style={CardConfig.input}
              onChangeText={setAddress}
              value={address}
            />
            <Text style={{marginTop : 10, marginLeft:10}}>Profesión: </Text>
            <TextInput
              style={CardConfig.input}
              onChangeText={setProfession}
              value={profession}
            />
            <Button
              title="Guardar cambios"
              onPress={() => saveChanges() }
            />
          </View>
        </View>
      </Modal>
      
    </View>
  );
}

export default SettingsView;

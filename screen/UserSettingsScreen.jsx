import React, { useState } from 'react';
import { View, Text , TextInput, Button, Modal} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { CardConfig } from "../themes/PantallasStyles/SettingsTheme";


function SettingsView() {
    const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({
    nombre: 'Juan Pérez',
    correo: 'juan.perez@example.com',
    domicilio: 'Cortez 123, Ensenada, Baja California',
    profesion: 'Dentista',
  });

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
        <Text style={CardConfig.userInformation}>Nombre: {user.nombre}</Text>
        <Text style={CardConfig.userInformation}>Correo: {user.correo}</Text>
        <Text style={CardConfig.userInformation}>Domicilio: {user.domicilio}</Text>
        <Text style={CardConfig.userInformation}>Profesión: {user.profesion}</Text>
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

            <Text style={{marginTop : 25, marginLeft:10}}>Nombre : </Text>
            <TextInput
                style={[CardConfig.input, {justifyContent : "flex-start"}]}
                
                onChangeText={(value) => handleChange('nombre', value)}
                value={user.nombre}
            />
            <Text style={{marginTop : 10, marginLeft:10}}>Correo electronico: </Text>
            <TextInput
              style={CardConfig.input}
              onChangeText={(value) => handleChange('correo', value)}
              value={user.correo}
            />
            <Text style={{marginTop : 10, marginLeft:10}}>Domicilio: </Text>
            <TextInput
              style={CardConfig.input}
              onChangeText={(value) => handleChange('domicilio', value)}
              value={user.domicilio}
            />
            <Text style={{marginTop : 10, marginLeft:10}}>Profesión: </Text>
            <TextInput
              style={CardConfig.input}
              onChangeText={(value) => handleChange('profesion', value)}
              value={user.profesion}
            />
            <Button
              title="Guardar cambios"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      
    </View>
  );
}

export default SettingsView;
import React from 'react';
import { Modal, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Importamos los componentes nesesarios
import ButtonGeneric from '../Buttons/ButtonGeneric';

//Importamos los estilo
import { ModalForms } from '../../themes/Appointments/modalFormsTheme';
import { styles } from '../../themes/theme';

const SessionModal = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={ModalForms.overlay}>
                <View style={ModalForms.modalContainerCenter}>
                    <View style={{ flexDirection: 'row', left: 15, marginLeft: 10 }}>
                        <Icon name="error" size={30} color="#FF0000" style={{ marginRight: 10 }} />
                        <Text style={ModalForms.title}>Error al iniciar sesión</Text>
                    </View>
                    <Text style={ModalForms.description}>
                        Su usuario o contraseña son incorrectos. {'\n'}
                        Por favor, verifique sus datos e intente de nuevo. Si olvidó su contraseña, puede
                    </Text>
                    <ButtonGeneric onPress={onClose}>
                        Cerrar
                    </ButtonGeneric>
                </View>
            </View>
        </Modal>
    );
};

export default SessionModal;
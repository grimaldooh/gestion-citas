import React from 'react';
import { Modal, View, Text, Image } from 'react-native';
import ButtonGeneric from '../ButtonGeneric';
import { ModalForms } from '../../themes/Appointments/modalFormsTheme';
import { styles } from '../../themes/theme';

const SessionModal = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={ModalForms.overlay}>
                <View style={ModalForms.modalContainerCenter}>
                    <Text style={ModalForms.title}>Error al iniciar sesión</Text>
                    <Text style={ModalForms.description}>Su usuario o contraseña son incorrectos. {'\n'}
                    Por favor, verifique sus datos e intente de nuevo.
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
import React, { useState } from 'react';
import { Modal, View, Text, Switch } from 'react-native';
import ButtonGeneric from '../ButtonGeneric';
import { ModalForms } from '../../themes/Appointments/modalFormsTheme';
import { styles } from '../../themes/theme';

const NotificationSettingsModal = ({ onClose, visible }) => {
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

    const toggleSwitch = () => setIsNotificationEnabled(previousState => !previousState);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={ModalForms.overlay}>
                <View style={ModalForms.modalContainer}>
                    <Text style={styles.title}>Configurar Notificaciones</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.textGeneral}>Activar/desactivar notificaciones</Text>
                        <Switch
                            style={{top: -22}}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isNotificationEnabled}
                        />
                    </View>
                    <ButtonGeneric onPress={onClose}>
                        Cerrar
                    </ButtonGeneric>
                </View>
            </View>
        </Modal>
    );
};

export default NotificationSettingsModal;
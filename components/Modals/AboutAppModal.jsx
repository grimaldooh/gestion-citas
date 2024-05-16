import React from 'react';
import { Modal, View, Text, Image } from 'react-native';

//Importamos componentes nesesarios
import ButtonGeneric from '../Buttons/ButtonGeneric';

//Importamos Estilos Nesesarios
import { ModalForms } from '../../themes/Appointments/modalFormsTheme';
import { styles } from '../../themes/theme';
import { CardConfig } from '../../themes/PantallasStyles/SettingsTheme';

const AboutAppModal = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={ModalForms.overlay}>
                <View style={ModalForms.modalContainer}>
                    <Text style={styles.title}>Acerca de la aplicación</Text>
                    <Text style={styles.textGeneral}>Esta aplicación fue desarrollada con pasión
                        y dedicación por un equipo de estudiates de ISyTE. {' '} Nuestro objetivo es
                        proporcionar una experiencia de usuario unica y ayudar a mejorar la eficiencia
                        y productividad de nuestros usuarios. Agradecemos tu apoyo y confianza en nosotros.</Text>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={CardConfig.logoCamaleon}
                            source={require('../../assets/images/camaleonLogo.png')} // Reemplaza './path-to-your-image.png' con la ruta de tu imagen
                        />
                    </View>
                    <Text style={styles.description}>Version Alpha 0.1</Text>
                    <ButtonGeneric onPress={onClose}>
                        Cerrar
                    </ButtonGeneric>
                </View>
            </View>
        </Modal>
    );
};

export default AboutAppModal;
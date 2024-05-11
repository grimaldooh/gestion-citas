import React, { useState } from 'react';
import { View, Text, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Importamos los componentes nesesarios
import CardSettings from '../../components/CardsTypes/CardSettings';
import ButtonGeneric from '../../components/ButtonGeneric'
import NotificationSettingsModal from '../../components/Modals/notificationsSettingsModal';
import AboutAppModal from '../../components/Modals/AboutAppModal';

// Importamos los estilos
import { styles } from '../../themes/theme';

const SettingsScreen = () => {
    const navigation = useNavigation();
    const [modalVisibleAbout, setModalVisibleAbout] = useState(false);
    const [ModalVisibleNotification, setModalVisibleNotification] = useState(false);

    const handleLogout = () => {
        // Lógica de cierre de sesión...
        console.log("Cerrado de Sesion con Exito!");

        // Una vez que el usuario ha cerrado la sesión correctamente, restablece la pila de navegación
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <View style={[styles.container, { alignItems: 'center' }]}>
            <Text style={styles.titleScreen}>Configuraciones</Text>
            <CardSettings
                leftIconName="user"
                rightIconName="chevron-right"
                title="Configuracion de Perfil"
                description="Foto de perfil, descripción, etc."
                onRightIconPress={() => navigation.navigate('SettingsNavigator', { screen: 'UserSettingsScreen' })}                />
            <CardSettings
                leftIconName="bell"
                rightIconName="chevron-right"
                title="Configurar Notificaciones"
                description="Desactivar notificaciones, sonido, etc."
                onRightIconPress={() => setModalVisibleNotification(true)}
            />
            <CardSettings
                leftIconName="globe"
                rightIconName="chevron-right"
                title="Idioma de la aplicación"
                description="Cambiar el idioma de la aplicación"
                onRightIconPress={() => console.log('Idioma presionado')}
            />
            <CardSettings
                leftIconName="info-circle"
                rightIconName="chevron-right"
                title="Acerca de la aplicación"
                description="Información del desarrollador, versión, etc."
                onRightIconPress={() => setModalVisibleAbout(true)}
            />
            <CardSettings
                leftIconName="sign-out"
                rightIconName="chevron-right"
                title="Cerrar Sesión"
                description="Salir de la aplicación"
                onRightIconPress={handleLogout}
            />
            <NotificationSettingsModal
                visible={ModalVisibleNotification}
                onClose={() => setModalVisibleNotification(false)}
            />
            <AboutAppModal
                visible={modalVisibleAbout}
                onClose={() => setModalVisibleAbout(false)}
            />
        </View>
    );
};

export default SettingsScreen;
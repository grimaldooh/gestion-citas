import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// Importamos los componentes necesarios
import CardSettings from '../../components/CardsTypes/CardSettings';

// Importamos los estilos
import { styles } from '../../themes/theme';

const SettingsScreen = () => {
    const navigation = useNavigation();

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
                onRightIconPress={() => console.log('Perfil presionado')}
            />
            <CardSettings
                leftIconName="bell"
                rightIconName="chevron-right"
                title="Configurar Notificaciones"
                description="Desactivar notificaciones, sonido, etc."
                onRightIconPress={() => console.log('Notificaciones presionado')}
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
                title="Acerda de la aplicación"
                description="Informacion del desarrollador, version, etc."
                onRightIconPress={() => console.log('Acerca de presionado')}
            />
            <CardSettings
                leftIconName="globe"
                rightIconName="chevron-right"
                title="Cerrar sesión"
                description="Cerrar la sesión de la aplicación"
                onRightIconPress={handleLogout}
            />
        </View>
    );
};

export default SettingsScreen;
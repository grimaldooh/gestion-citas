import React from 'react';
import { View, Text } from 'react-native';

// Importamos los componentes necesarios
import CardSettings from '../../components/CardsTypes/CardSettings';

// Importamos los estilos
import { styles } from '../../themes/theme';

const SettingsScreen = () => {
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
                leftIconName="sign-out"
                rightIconName="chevron-right"
                title="Cerrar sesión"
                description="Cerrar sesión de la aplicación"
                onRightIconPress={() => console.log('Cerrar sesión presionado')}
            />
        </View>
    );
};

export default SettingsScreen;
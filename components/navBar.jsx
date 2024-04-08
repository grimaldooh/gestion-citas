// Importamos las librerias necesarias
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { FAB } from 'react-native-paper';
import ModalForm from './modalForms';

// Importamos los componentes de las pantallas
import SolicitudCitasScreen from '../screen/dashboard/SolicitudCitasScreen';
import CitasActivasScreen from '../screen/dashboard/CitasActivasScreen';
import CalendarioScreen from '../screen/dashboard/CalendarioScreen';
import AjustesScreen from '../screen/dashboard/SettingsScreen';

// Importamos los estilos
import { screenOptions } from '../theme';
import { fabStyle } from '../theme';

const Tab = createBottomTabNavigator()

const Navegacion = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <>
            <Tab.Navigator
                screenOptions={screenOptions}
            >    
                <Tab.Screen
                    name="SolicitudCitas" 
                    component={SolicitudCitasScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="CitasActivas" 
                    component={CitasActivasScreen} 
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="calendar" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Calendario" 
                    component={CalendarioScreen} 
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="calendar-outline" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Ajustes" 
                    component={AjustesScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="settings" color={color} size={30} />
                        ),
                    }}
                />
            </Tab.Navigator>
            <FAB
                style={fabStyle}
                icon="plus"
                onPress={() => setModalVisible(true)}
                />
                {modalVisible && <ModalForm onClose={() => setModalVisible(false)} />}
        </>
    );
}

export default Navegacion;
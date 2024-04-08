// Importamos las librerias nesesarias
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Importamos los componentes de las pantallas
import SolicitudCitasScreen from '../screen/dashboard/SolicitudCitasScreen';
import CitasActivasScreen from '../screen/dashboard/CitasActivasScreen';
import CalendarioScreen from '../screen/dashboard/CalendarioScreen';
import AjustesScreen from '../screen/dashboard/SettingsScreen';

// Importamos los estilos
import { screenOptions } from '../theme';

const Tab = createBottomTabNavigator()

const Navegacion = () => {
    return (
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
    );
}

export default Navegacion;
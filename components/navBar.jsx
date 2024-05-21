import React, { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { FAB } from "react-native-paper";
import ModalForm from "./Modals/modalForms";

import { fetchCitas , crearCita} from '../services/citaService'; // Asegúrate de ajustar la ruta del import según la ubicación de tu archivo api.js


// Importamos los componentes de las pantallas
import SolicitudCitasScreen from "../screen/dashboard/SolicitudCitasScreen";
import CitasActivasScreen from "../screen/dashboard/CitasActivasScreen";
import CalendarioScreen from "../screen/dashboard/CalendarioScreen";
import AjustesScreen from "../screen/dashboard/SettingsScreen";

// Importamos los estilos
import { screenOptions } from "../themes/Appointments/NavBar";
import { fabStyle } from "../themes/Appointments/NavBar";
import UserIdContext from "../context/userContext";

const Tab = createBottomTabNavigator();

const Navegacion = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [citas, setCitasPendientes] = useState([]);
  const { userId } = useContext(UserIdContext);
  const [refresh, setRefresh] = useState(false); 


  useEffect(() => {
  fetchCitas(userId)
    .then((citasApi) => {
      setCitasPendientes(citasApi);
    });
}, [userId, refresh]);

  console.log(citas);

console.log(userId);
//const citasUser = citas;
// Ordenar las citas por fecha de manera descendente
const citasUser = citas
  .filter(cita => (Number(cita.serviceProviderId) === Number(userId) || Number(cita.serviceProviderId) === 2) && new Date(cita.date) >= new Date())
  .sort((a, b) => new Date(a.date) - new Date(b.date));

  // En el componente Navegacion
  const crearCitaHandler = (appointmentJson) => {
    crearCita(appointmentJson)
      .then((newAppointment) => {
        setCitasPendientes((prevCitas) => [
          ...prevCitas,
          newAppointment,
        ]);
        setRefresh(!refresh); // Cambiar el estado de refresh para forzar la actualización del efecto
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  return (
    <>
      <Tab.Navigator
        screenOptions={{ ...screenOptions, headerShown: false }}
        animationType="spring"
      >
        <Tab.Screen
          name="SolicitudCitas"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="time" color={color} size={30} />
            ),
          }}
        >
          {() => (
            <SolicitudCitasScreen
              citas={citasUser}
              setCitasPendientes={setCitasPendientes}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="CitasActivas"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="checkmark-circle" color={color} size={30} />
            ),
          }}
        >
          {() => (
            <CitasActivasScreen
              citas={citasUser}
              setCitasPendientes={setCitasPendientes}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Calendario"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="calendar-outline" color={color} size={30} />
            ),
          }}
        >
          {() => (
            <CalendarioScreen
              citas={citasUser}
              setCitasCalendario={setCitasPendientes}
            />
          )}
        </Tab.Screen>
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
      <FAB style={fabStyle} icon="plus" onPress={() => setModalVisible(true)} />
      {modalVisible && (
        <ModalForm
          onClose={() => setModalVisible(false)}
          citasPendientes={citasUser}
          setCitasPendientes={setCitasPendientes}
          crearCita={crearCitaHandler}
        />
      )}
    </>
  );
};

export default Navegacion;

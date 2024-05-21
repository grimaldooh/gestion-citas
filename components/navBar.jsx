import React, { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { FAB } from "react-native-paper";
import ModalForm from "./Modals/modalForms";

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
    fetch(
      "https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/GetAllAppointments/3" 
    )
      .then((response) => response.json())
      .then((data) => {
        const citasApi = data.map((cita) => ({
          id: cita.id,
          img: cita.userImage,
          name: cita.clientName,
          date: cita.startDate,
          time: cita.startTime,
          status: cita.status,
          duration: cita.durationMinutes,
          serviceProviderId: cita.serviceProviderId,
        }));
        setCitasPendientes(citasApi);
      });
  }, [userId,refresh]);

  console.log(citas);

console.log(userId);
//const citasUser = citas;
const citasUser = citas.filter(cita => Number(cita.serviceProviderId) === Number(userId) || Number(cita.serviceProviderId) === 2);console.log("lllllllllllllll");
// console.log(citasUser);

  // En el componente Navegacion
const crearCita = (appointmentJson) => {
    // Hacer la petición POST a la API
    fetch("https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: appointmentJson,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
  
        // Hacer la petición GET a la API para obtener los detalles de la cita recién creada
        fetch(
          `https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/read/${data.id}`
        )
          .then((response) => response.json())
          .then((newAppointment) => {
            // Mapear las propiedades de la cita a un nuevo objeto
            const mappedAppointment = {
              id: newAppointment.id,
              img: newAppointment.userImage,
              name: newAppointment.clientName,
              date: newAppointment.startDate,
              time: newAppointment.startTime,
              status: newAppointment.status,
              duration: newAppointment.durationMinutes,
            };
  
            // Añadir la nueva cita al array de citas
            setCitasPendientes((prevCitas) => [
              ...prevCitas,
              mappedAppointment,
            ]);
            setRefresh(!refresh); // Cambiar el estado de refresh para forzar la actualización del efecto

          })
          .catch((error) => {
            console.error("Error:", error);
          });
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
          crearCita={crearCita}
        />
      )}
    </>
  );
};

export default Navegacion;

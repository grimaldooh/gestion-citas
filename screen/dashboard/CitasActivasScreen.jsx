import React, { useState } from "react";
import Card from "../../components/CardsTypes/Card";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../../themes/theme";
import img1 from "../../assets/images/persona.jpg";
import img2 from "../../assets/images/persona5.jpg";
import img3 from "../../assets/images/persona2.jpg";
import img4 from "../../assets/images/persona3.jpg";
import img5 from "../../assets/images/persona4.jpg";
import img6 from "../../assets/images/persona5.jpg";
import ModalEdicion from "../../components/Modals/ModalEdicion";
import { NativeBaseProvider } from "native-base";


// Importa los datos del archivo JSON
import citasData from "../../data/citas.json";

const CitasActivasScreen = () => {

    const [modalEdicionVisible, setModalEdicionVisible] = useState(false);
  const [selectedCita, setselectedCita] = useState(null);

  const closeModal = () => {
    setModalEdicionVisible(false);
  };

  const editarCita = (id) => {
    // Implementar la lógica para editar el usuario con `id`
    
    console.log("Editar usuario con ID:", id);
    const citaSeleccionada = citas.find((cita) => cita.id === id);
    console.log("Editar usuario con ID:", citaSeleccionada);
    if (citaSeleccionada) {
      setModalEdicionVisible(true);
      setselectedCita(citaSeleccionada);
    }
  };
  const [citas, setCitasPendientes] = useState([
    {
      img: "persona.jpg",
      name: "Juan Pérez",
      date: "13-05-2024",
      time: "10:45AM",
      id: 1,
      status: "pendiente",
      duration: 30,
    },
    {
      img: "persona1.jpg",
      name: "María Rodríguez",
      date: "12-05-2024",
      time: "02:30PM",
      id: 2,
      status: "pendiente",
      duration: 45,
    },
    {
      img: "persona2.jpg",
      name: "Luisa Gómez",
      date: "14-05-2024",
      time: "03:15PM",
      id: 3,
      status: "pendiente",
      duration: 60,
    },
    {
      img: "persona3.jpg",
      name: "Karla Martínez",
      date: "15-05-2024",
      time: "11:20AM",
      id: 4,
      status: "pendiente",
      duration: 30,
    },
    {
      img: "persona4.jpg",
      name: "Pedro Sánchez",
      date: "17-05-2024",
      time: "09:00AM",
      id: 5,
      status: "pendiente",
      duration: 45,
    },
    {
      img: "persona5.jpg",
      name: "Ana López",
      date: "16-05-2024",
      time: "01:55PM",
      id: 6,
      status: "pendiente",
      duration: 60,
    },
    {
      img: "persona5.jpg",
      name: "Ana López",
      date: "16-05-2024",
      time: "01:55PM",
      id: 7,
      status: "pendiente",
      duration: 60,
    },
    {
      img: "persona5.jpg",
      name: "Ana López",
      date: "16-05-2024",
      time: "01:55PM",
      id: 8,
      status: "pendiente",
      duration: 60,
    },
  ]);

  return (
    <NativeBaseProvider>
    <ScrollView style={styles.container}>
      <Text style={styles.titleScreen}>Citas Activas</Text>
      {/* Itera sobre los datos del archivo JSON y crea los componentes Card dinámicamente */}
      {citas.map((cita, index) => (
        <Card
          id = {cita.id}
          name = {cita.name}
          time = {cita.time}
          date = {cita.date}
          status = {cita.status}
          setCitasPendientes={setCitasPendientes}
          img={getImageByFilename(cita.img)}
          editarCita={editarCita}
        />
      ))}
      <View>
        {selectedCita && (
          <ModalEdicion
            cita={selectedCita}
            onClose={closeModal}
            modalVisible={modalEdicionVisible}
            citas={citas}
            setCitas={setCitasPendientes}
            oldCita={true}
          />
        )}
      </View>
    </ScrollView>
    </NativeBaseProvider>
  );
};

// Función para obtener la imagen correspondiente según el nombre de archivo
const getImageByFilename = (filename) => {
  switch (filename) {
    case "persona.jpg":
      return img1;
    case "persona1.jpg":
      return img2;
    case "persona2.jpg":
      return img3;
    case "persona3.jpg":
      return img4;
    case "persona4.jpg":
      return img5;
    case "persona5.jpg":
      return img6;
    default:
      return null;
  }
};

export default CitasActivasScreen;

import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CardCitas from "../../components/CardsTypes/CardCitas";
import { styles } from "../../themes/theme";
import img1 from "../../assets/images/persona.jpg";
import img2 from "../../assets/images/persona5.jpg";
import img3 from "../../assets/images/persona2.jpg";
import img4 from "../../assets/images/persona3.jpg";
import img5 from "../../assets/images/persona4.jpg";
import img6 from "../../assets/images/persona5.jpg";
import citasData from "../../data/citas.json";

const SolicitudCitasScreen = () => {
  const [citas, setCitasPendientes] = useState([
    {
        "img": "persona.jpg",
        "name": "Juan Pérez",
        "date": "13-05-2024",
        "time": "10:45AM",
        "id": 1,
        "status": "pendiente"
    },
    {
        "img": "persona1.jpg",
        "name": "María Rodríguez",
        "date": "12-05-2024",
        "time": "02:30PM",
        "id": 2,
        "status": "pendiente"
    },
    {
        "img": "persona2.jpg",
        "name": "Luisa Gómez",
        "date": "14-05-2024",
        "time": "03:15PM",
        "id": 3,
        "status": "pendiente"
    },
    {
        "img": "persona3.jpg",
        "name": "Karla Martínez",
        "date": "15-05-2024",
        "time": "11:20AM",
        "id": 4,
        "status": "pendiente"
    },
    {
        "img": "persona4.jpg",
        "name": "Pedro Sánchez",
        "date": "17-05-2024",
        "time": "09:00AM",
        "id": 5,
        "status": "pendiente"
    },
    {
        "img": "persona5.jpg",
        "name": "Ana López",
        "date": "16-05-2024",
        "time": "01:55PM",
        "id": 6,
        "status": "pendiente"
    },
    {
        "img": "persona5.jpg",
        "name": "Ana López",
        "date": "16-05-2024",
        "time": "01:55PM",
        "id": 7,
        "status": "pendiente"
    },
    {
        "img": "persona5.jpg",
        "name": "Ana López",
        "date": "16-05-2024",
        "time": "01:55PM",
        "id": 8,
        "status": "pendiente"
    }

  ]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleScreen}>Citas Activas</Text>
      {/* Recorre todos los datos del archivo JSON y crea los componentes Card dinámicamente */}
      {citas.map((cita, index) => (
        <CardCitas
          key={cita.id}
          cita={cita}
          setCitasPendientes={setCitasPendientes}
          img={getImageByFilename(cita.img)} 
        />
      ))}
    </ScrollView>
  );
};

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
export default SolicitudCitasScreen;


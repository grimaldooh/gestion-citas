import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import CardCitas from "../../components/CardsTypes/CardCitas";
import { styles } from "../../themes/theme";
import img1 from "../../assets/images/persona.jpg";
import img2 from "../../assets/images/persona5.jpg";
import img3 from "../../assets/images/persona2.jpg";
import img4 from "../../assets/images/persona3.jpg";
import img5 from "../../assets/images/persona4.jpg";
import img6 from "../../assets/images/persona5.jpg";

const SolicitudCitasScreen = ({ citas, setCitasPendientes }) => {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleScreen}>Citas Activas</Text>
      {/* Recorre todos los datos del archivo JSON y crea los componentes Card dinámicamente */}
      {citas.map((cita, index) => (
        <CardCitas
          key={cita.id}
          id={cita.id}
          cita={cita}
          setCitasProximas={setCitasPendientes}
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

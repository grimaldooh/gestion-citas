import React, { useState, useContext } from "react";
import { NativeBaseProvider } from "native-base";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";

//Importamos las imagenes ocupadas
import img1 from "../../assets/images/persona.jpg";
import img2 from "../../assets/images/persona5.jpg";
import img3 from "../../assets/images/persona2.jpg";
import img4 from "../../assets/images/persona3.jpg";
import img5 from "../../assets/images/persona4.jpg";
import img6 from "../../assets/images/persona5.jpg";

//Importamos los componentes y archivos nesesarios
import ModalEdicion from "../../components/Modals/ModalEdicion";
import Card from "../../components/CardsTypes/Card";
import UserIdContext from "../../context/userContext";

//Importamos los themes nesesarios
import { styles } from "../../themes/theme";


// Importa los datos del archivo JSON

const CitasActivasScreen = ({ citas, setCitasPendientes }) => {
  const citasActivas = citas.filter((cita) => cita.status === 2);

  const [modalEdicionVisible, setModalEdicionVisible] = useState(false);
  const [selectedCita, setselectedCita] = useState(null);
  const { userId } = useContext(UserIdContext);

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

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.titleScreen}>Citas Activas</Text>
        <ScrollView style={styles.scrollContainer}>
          {/* Itera sobre los datos del archivo JSON y crea los componentes Card dinámicamente */}
          {citasActivas.map((cita, index) => (
            <Card
              id={cita.id}
              name={cita.name}
              time={cita.time}
              date={cita.date}
              status={cita.status}
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
                  setCitasPendientes={setCitasPendientes}
                  oldCita={true}
                />
              )}
          </View>
        </ScrollView>
      </View>
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
      return { uri: filename };
  }
};

export default CitasActivasScreen;

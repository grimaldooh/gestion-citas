import React, { useState, useEffect,  } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { styles } from '../themes/theme';
import { LocaleConfig } from 'react-native-calendars';
import { NativeBaseProvider } from 'native-base';
import moment, { duration } from 'moment-timezone';

import Card from './CardsTypes/Card';
import ModalEdicion from '../components/Modals/ModalEdicion';

import DefaulImage from '../assets/images/default.jpg';
import img1 from "../assets/images/persona.jpg"
import img2 from "../assets/images/persona5.jpg";
import img3 from "../assets/images/persona2.jpg";
import img4 from "../assets/images/persona3.jpg";
import img5 from "../assets/images/persona4.jpg";
import img6 from "../assets/images/persona5.jpg";

const CalendarComponent = () => {
  LocaleConfig.locales['es'] = {
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: [
      'Ene.',
      'Feb.',
      'Mar.',
      'Abr.',
      'May.',
      'Jun.',
      'Jul.',
      'Ago.',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dic.',
    ],
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  };
  LocaleConfig.defaultLocale = 'es';
  const today = moment().tz('America/Tijuana'); // use moment-timezone for date formatting
  const currentDate = today.format('YYYY-MM-DD');
  const [selectedCita, setselectedCita] = useState(null);
  const [modalEdicionVisible, setModalEdicionVisible] = useState(false);
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

  const [items, setItems] = useState({});
  useEffect(() => {
    const loadedItems = loadItems();
    setItems(loadedItems);
  }, [citas]);

  const loadItems = () => {
    const newItems = {};

    citas.forEach(cita => {
      const fechaCita = moment(cita.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
      if (!newItems[fechaCita]) {
        newItems[fechaCita] = [];
      }
      newItems[fechaCita].push({
        name: cita.name,
        date: cita.date,
        time: cita.time,
        img: cita.img,
        status: cita.status,
        duration: cita.duration,
        id: cita.id,
        height: 50,
      });
    });

    return newItems;
  };

  const renderItem = item => {
    return (
      
      <View style={styles.cardContainer}>
        <Card
        name={item.name}
        time={item.time}
        date={item.date}
        status={item.status}
        img={item.img === "persona.jpg" ? img1 : item.img === "persona1.jpg" ? img2 : item.img === "persona2.jpg" ? img3 : item.img === "persona3.jpg" ? img4 : item.img === "persona4.jpg" ? img5 : img6}
        id={item.id}
        editarCita={editarCita}
      />
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
    );
  };

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Agenda</Text>
      <View style={styles.calendarContainer}>
        <Agenda
          selected={currentDate}
          items={items}
          renderItem={renderItem}
          minDate='2022-01-01'
          theme={{
            calendarBackground: '#001D3D',
            textSectionTitleColor: '#FFD353',
            selectedDayBackgroundColor: '#ffd353',
            selectedDayTextColor: '#001D3D',
            todayTextColor: '#FFD353',
            dayTextColor: '#ffffff',
            textDisabledColor: '#8c8c8c',
            dotColor: '#ffd353',
            selectedDotColor: '#001D3D',
            monthTextColor: '#FFD353',
            textDayFontSize: 14,
            arrowColor: "#ffd353",
          }}
        />
      </View>
    </View>
    </NativeBaseProvider>
  );
};

export default CalendarComponent;

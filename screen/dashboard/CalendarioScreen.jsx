import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';

//Importamos los themes
import { styles } from '../../themes/theme';
import Card from '../../components/CardsTypes/Card';
import img5 from '../../assets/images/persona5.jpg';

import { List } from 'react-native-paper';


const CalendarioScreen = (citas) => {
  const [items, setItems] = useState({}); 
  //const fechas = citas.map(cita => cita.fecha.split(",")[0]);

  /*const markedDates = fechas.reduce((acc, fecha) => {
    acc[fecha] = {
      selected: true,
      marked: true,
      selectedColor: "darkgreen",
    };
    return acc;
  }, {});*/

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = new Date(time).toISOString().split('T')[0];
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3) + 1; // Genera un número aleatorio de items para cada día
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Cita ' + (j + 1) + ' para ' + strTime,
              height: 150
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {newItems[key] = items[key];});
      setItems(newItems);
    }, 1000);
  };

  // Obtén la fecha actual en formato YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  return (
    <View>
      <CalendarComponent citas={citasData}/>
    </View>
  );
};

export default CalendarioScreen;

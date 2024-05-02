import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';

//Importamos los themes
import { styles } from '../../themes/theme';
import Card from '../../components/CardsTypes/Card';
import img5 from '../../assets/images/persona5.jpg';

const CalendarioScreen = () => {
  const [items, setItems] = useState({});

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
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Calendario</Text>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={today}
        minDate={today}
        pastScrollRange={1}
        renderItem={(item, firstItemInDay) => {
          return (
            <Card 
              title={item.name} 
              content="Nombre del paciente" 
              img={img5} 
            />
          );
        }}
        theme={{
          calendarBackground: '#001D3D', // Fondo del calendario
          todayButtonTextColor: '#ECB000', // Color del texto del botón de hoy
          agendaTodayColor: '#ECB000', // Color del marcador de hoy
          dotColor: 'transparent', // Color de los puntos en el calendario
          selectedDayBackgroundColor: '#ECB000', // Color de fondo del día seleccionado
          arrowColor: '#ECB000', // Color de las flechas de navegación
          textSectionTitleColor: '#FFF',
          textSectionTitleDisabledColor: '#C7C7C7',
          textDisabledColor: 'rgba(98, 98, 98, 0.3)',
          textInactiveColor: '#fff',
          backgroundColor: 'transparent',
          agendaDayNumColor: '#001D3D',
          todayBackgroundColor: '#001D3D',
          agenda: {
            main: {
              backgroundColor: '#001D3D', // Cambia el fondo de la agenda
            },
          },
        }}
        style={{
          backgroundColor: '#001D3D'
        }}
      />
    </View>
  );
};

export default CalendarioScreen;

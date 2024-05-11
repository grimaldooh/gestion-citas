import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { styles } from '../themes/theme';
import Card from '../components/CardsTypes/Card';

const CalendarioComponent = ({ citas }) => {
  
  // Obtén la fecha actual en formato DD-MM-YYYY
  const today = new Date(); // crea una fecha nueva
  const utcOffset = -420; // UTC-7 son -420 minutos de UTC (utc-7 es horario de tj) considerar dinamico para cada zona horaria
  const gmt7Date = new Date(today.getTime() + utcOffset);
  const currentDate = gmt7Date.toISOString().split('T')[0];

  const datesArray = citas.map(cita => cita.date);
  console.log(datesArray,currentDate);

   return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Calendario</Text>
      <Agenda
        initialDate={currentDate}
        pastScrollRange={1}
        theme={{
          calendarBackground: '#001D3D', // Fondo del calendario
          todayButtonTextColor: '#ECB000', // Color del texto del botón de hoy
          agendaTodayColor: '#ECB000', // Color del marcador de hoy
          dotColor: 'transparent', // Color de los puntos en el calendario
          selectedDayBackgroundColor: '#ECB000', // Color de fondo del día seleccionado
          arrowColor: '#ECB000', // Color de las flechas de navegación
          textSectionTitleColor: '#FFF',
          textSectionTitleDisabledColor: '#C7C7C7',
          textDisabledColor: 'rgba(98, 98, 98, 0.9)',
          textInactiveColor: '#fff',
          backgroundColor: 'transparent',
          agendaDayNumColor: '#001D3D',
          todayBackgroundColor: '#001D3D'
        }}
      />
    </View>
  );
};

export default CalendarioComponent;
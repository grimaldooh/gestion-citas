import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { styles } from '../themes/theme';
import { LocaleConfig } from 'react-native-calendars';
import Card from './CardsTypes/Card';
import moment from 'moment-timezone';
import DefaulImage from '../assets/images/default.jpg';

const CalendarComponent = ({ citas }) => {
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
        height: 50,
      });
    });
  
    return newItems;
  };
  const renderItem = (item) => {
      return (
        <Card
          name ={item.name} 
          time = {item.time}
          date = {item.date}
          img = {DefaulImage}
        >
  
        </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Agenda</Text>
      <View style={styles.calendarContainer}>
        <Agenda
          selected={currentDate}
          items={items}
          renderItem={renderItem}
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
  );
};

export default CalendarComponent;

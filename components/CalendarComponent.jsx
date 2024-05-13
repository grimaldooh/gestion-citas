import React from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { styles } from '../themes/theme';
import { LocaleConfig } from 'react-native-calendars';
import moment from 'moment-timezone'; // added for date formatting

const localeConfig = {
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  today: 'Hoy'
};

LocaleConfig.locales.es = localeConfig;
LocaleConfig.defaultLocale = 'es';

const CalendarComponent = ({ citas }) => {
  const today = moment().tz('America/Tijuana'); // use moment-timezone for date formatting
  const currentDate = today.format('YYYY-MM-DD');
  console.log(today, currentDate)

  // Función para renderizar los elementos en la Agenda
  const renderItem = (reservation, isFirst) => {
    return (
      <View style={styles.item}>
        <Text>{reservation.name}</Text>
      </View>
    );
  };

  // Función para renderizar los días en la Agenda
  const renderDay = (date, item) => {
    return (
      <View style={styles.day}>
        <Text>{date ? date.day : 'No hay día'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Agenda</Text>
      <View style={styles.calendarContainer}>
        <Agenda
          selected={currentDate}
          items={{
            '2012-05-22': [{name: 'item 1 - any js object'}],
            '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
            '2012-05-24': [],
            '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
          }}
          markedDates={{
            '2024-05-16': { marked: true },
            '2024-05-17': { marked: true },
            '2024-05-18': { marked: true },
            '2021-05-19': { marked: true }
          }}
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

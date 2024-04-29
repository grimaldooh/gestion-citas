import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { styles } from '../../themes/theme';
import WeekCalendar from '../../components/WeekCalendar';
import Card from '../../components/CardsTypes/Card'; // Importa tu componente Card
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
          items[strTime].push({
            name: 'Cita para ' + strTime,
            height: 150
          });
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {newItems[key] = items[key];});
      setItems(newItems);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Calendario</Text>
      {/* <WeekCalendar/> */}
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-05-16'}
        renderItem={(item, firstItemInDay) => {
          return (
            <Card 
              title={item.name} 
              content="Aquí va el contenido de la tarjeta" 
              img={img5} 
            />
          );
        }}
        theme={{
          agendaDayTextColor: '#000',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
          calendarBackground: '#fff',
        }}
      />
    </View>
  );
};

export default CalendarioScreen;
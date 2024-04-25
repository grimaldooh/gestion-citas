import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const WeekCalendar = () => {
  // Obtener la fecha actual
  const today = new Date();
  // Establecer la fecha seleccionada y la fecha actual en formato de cadena
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(today.getDay()); // Día actual por defecto
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const getWeekRange = () => {
    const currentDay = today.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - currentDay); // Start from the beginning of the current week
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6); // End at the end of the current week
    return { startDate, endDate };
  };

  const { startDate, endDate } = getWeekRange();

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    weekDays.push({ dayName: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][day.getDay()], date: new Date(day) });
  }

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    // Obtener el índice del día seleccionado en la semana
    const selectedIndex = weekDays.findIndex((d) => d.date.toISOString().split('T')[0] === day.dateString);
    setSelectedDayIndex(selectedIndex);
  };

  const renderDayItem = (day, index) => {
    // Determinar si el día actual está seleccionado
    const isSelected = selectedDayIndex === index;
    
    // Aplicar estilos diferentes según si el día está seleccionado o no
    const dayItemStyles = isSelected ? styles.selectedDayItem : styles.dayItem;

    return (
      <View key={index} style={dayItemStyles}>
        <Text style={styles.dayText}>{day.dayName}</Text>
        <TouchableOpacity onPress={() => {
          setSelectedDate(day.date.toISOString().split('T')[0]);
          setSelectedDayIndex(index);
        }}>
          <Text style={styles.numberDay}>{day.date.getDate().toString()}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.dayCarousel}>
        {weekDays.map((day, index) => renderDayItem(day, index))}
        <TouchableOpacity style={styles.buttonCalendar} onPress={toggleCalendar}>
          <Text>Calendario</Text>
        </TouchableOpacity>
      </View>
      {showCalendar && (
        <View style={styles.calendarContainer}>
          <Calendar
            current={selectedDate}
            onDayPress={onDayPress}
            hideExtraDays
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dayCarousel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 40
  },
  dayItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    opacity: 0.15, // Hacer que los días no seleccionados se vean más opacos
  },
  selectedDayItem: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center', // Hacer el seleccionador de día más redondo cuando está seleccionado
  },
  dayText: {
    fontWeight: 'bold',
    color: '#FFD353', // Color de texto personalizado
  },
  numberDay: {
    fontWeight: 'light',
    color: '#FFD353',
    justifyContent: 'center',
    alignItems: 'center',// Numero no seleccionados
  },
  calendarContainer: {
    borderRadius: 20, // Hacer el seleccionador de día más redondo
    opacity: 0.7, // Ajustar la transparencia del seleccionador de día
    overflow: 'hidden', // Asegurar que el borde redondo sea visible
  },
  buttonCalendar: {
    backgroundColor: '#FFD353',
    padding: 10,
    borderRadius: 20,
  },
});

export default WeekCalendar;

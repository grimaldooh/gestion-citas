import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const WeekCalendar = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(today.getDay());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const getWeekRange = () => {
    const currentDay = today.getDay();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - currentDay);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
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
    const selectedIndex = weekDays.findIndex((d) => d.date.toISOString().split('T')[0] === day.dateString);
    setSelectedDayIndex(selectedIndex);
  };

  const renderDayItem = (day, index) => {
    const isSelected = selectedDayIndex === index;
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
      </View>
      <TouchableOpacity style={styles.buttonCalendar} onPress={toggleCalendar}>
        <Text>Calendario</Text>
      </TouchableOpacity>
      {showCalendar && (
        <View>
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
    paddingHorizontal: 8,
    paddingVertical: 5,
    opacity: 0.15,
  },
  selectedDayItem: {
    borderRadius: 20,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    color: '#FFD353',
    fontSize: 12,
  },
  numberDay: {
    fontWeight: 'light',
    color: '#FFD353',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18
  },
  calendarContainer: {
    
  },
  buttonCalendar: {
    backgroundColor: '#FFD353',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 50,
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default WeekCalendar;

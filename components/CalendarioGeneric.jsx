import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CalendarioScreen = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const onChangeTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        setTime(currentTime);
    };

    const saveAppointment = () => {
        console.log(`Nombre: ${name}`);
        console.log(`Número de Teléfono: ${phoneNumber}`);
        console.log(`Fecha: ${date.toLocaleDateString()}`);
        console.log(`Hora: ${time.toLocaleTimeString()}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Número de Teléfono:</Text>
            <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="numeric" />

            <Text style={styles.label}>Fecha:</Text>
            <TextInput style={styles.input} value={date.toLocaleDateString()} editable={false} />
            <TouchableOpacity style={styles.button} onPress={() => setShowDatePicker(true)}>
                <Text style={styles.buttonText}>Seleccionar Fecha</Text>
            </TouchableOpacity>
            {showDatePicker && <DateTimePicker value={date} mode="date" display="default" onChange={onChangeDate} />}

            <Text style={styles.label}>Hora:</Text>
            <TextInput style={styles.input} value={time.toLocaleTimeString()} editable={false} />
            <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
                <Text style={styles.buttonText}>Seleccionar Hora</Text>
            </TouchableOpacity>
            {showTimePicker && <DateTimePicker value={time} mode="time" display="default" onChange={onChangeTime} />}

            <TouchableOpacity style={styles.button} onPress={saveAppointment}>
                <Text style={styles.buttonText}>Guardar Cita</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CalendarioScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#FFD353',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 10,
        fontSize: 16,
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    button: {
        backgroundColor: '#4B9ACF',
        margin: 10,
        borderRadius: 6,
        alignItems: 'center',
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
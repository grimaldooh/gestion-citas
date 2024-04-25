import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ModalForm = ({ onClose }) => {
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
        onClose(); // Cerrar el modal después de guardar
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
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

                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Regresar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center', // Centrar contenido verticalmente
        alignItems: 'center', // Centrar contenido horizontalmente
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo negro con transparencia
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%', // Reducir el ancho para centrar el contenido
        backgroundColor: '#001D4D',
        borderRadius: 20, // Redondear todas las esquinas
        padding: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#FFD353',
    },
    input: {
        borderWidth: 0.5,
        //borderColor: '#DDD',
        padding: 5,
        fontSize: 13,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '100%', // Ajustar al ancho del contenedor
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#FFD353',
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        padding: 8,
        width: '100%', // Ajustar al ancho del contenedor
        left: -5,
    },
    buttonText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '400'
    },
});

export default ModalForm;
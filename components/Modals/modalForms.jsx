import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ModalForms } from '../../themes/Appointments/modalFormsTheme';
import { duration } from 'moment-timezone';

const ModalForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [duration, setDuration] = useState(0);
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

    const appointmentCreateAPI = async (appointment) => {  
       
    }

    const saveAppointment = () => {
        // Formatear la cita para que se adapte al JSON que pide la API
        const appointmentJson = JSON.stringify({
            clientName: name,
            phoneNumber: phoneNumber,
            startDate: date.toISOString().split('T')[0], // Formato "YYYY-MM-DD"
            startTime: time.toTimeString().split(' ')[0], // Formato "HH:MM:SS"
            durationMinutes: duration,
            userImage: "si",
            serviceProviderId: 2,
            clientFBID: 0,
            status: 2
        });
    
        console.log("Cita JSON:", appointmentJson);
    
        // Hacer la petición POST a la API
        fetch('https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: appointmentJson
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
        onClose(); // Cerrar el modal después de guardar
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={onClose}
        >
            <View style={ModalForms.overlay}>
                <View style={ModalForms.modalContainer}>
                    <Text style={ModalForms.label}>Nombre:</Text>
                    <TextInput style={ModalForms.input} value={name} onChangeText={setName} />

                    <Text style={ModalForms.label}>Número de Teléfono:</Text>
                    <TextInput style={ModalForms.input} value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="numeric" />

                    <Text style={ModalForms.label}>Fecha:</Text>
                    <TextInput style={ModalForms.input} value={date.toLocaleDateString()} editable={false} />
                    <TouchableOpacity style={ModalForms.button} onPress={() => setShowDatePicker(true)}>
                        <Text style={ModalForms.buttonText}>Seleccionar Fecha</Text>
                    </TouchableOpacity>
                    {showDatePicker && <DateTimePicker value={date} mode="date" display="default" onChange={onChangeDate} />}

                    <Text style={ModalForms.label}>Hora:</Text>
                    <TextInput style={ModalForms.input} value={time.toLocaleTimeString()} editable={false} />
                    <TouchableOpacity style={ModalForms.button} onPress={() => setShowTimePicker(true)}>
                        <Text style={ModalForms.buttonText}>Seleccionar Hora</Text>
                    </TouchableOpacity>
                    {showTimePicker && <DateTimePicker value={time} mode="time" display="default" onChange={onChangeTime} />}

                    <Text style={ModalForms.label}>Duración (minutos):</Text>
                    <TextInput style={ModalForms.input} value={duration} editable={true} placeholder='Duración de la cita' onChangeText={setDuration} />


                    <TouchableOpacity style={ModalForms.button} onPress={saveAppointment}>
                        <Text style={ModalForms.buttonText}>Guardar Cita</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ModalForms.button} onPress={onClose}>
                        <Text style={ModalForms.buttonText}>Regresar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ModalForm;
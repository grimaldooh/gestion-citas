import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ModalForms } from '../../themes/Appointments/modalFormsTheme';

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
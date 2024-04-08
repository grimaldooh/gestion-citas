import React from 'react';
import { Text } from 'react-native';

import TextInput from './TextInput';
import { styles } from '../theme';

export const fields = [
    { label: 'Nombre', placeholder: 'Ingrese su nombre' },
    { label: 'Apellido Paterno', placeholder: 'Ingrese su Apellido Paterno' },
    { label: 'Apellido Materno', placeholder: 'Ingrese su Apellido Materno' },
    { label: 'Seleccionar Fecha', placeholder: 'Ingresa la fecha' },
    { label: 'Hora de Inicio y de Finalización', placeholder: 'Ingresa la hora' },
    { label: 'Motivo de Consulta', placeholder: 'Ingresa el motivo de consulta' },
];

const InputField = ({ label, placeholder }) => (
    <>
        <Text>{label}:</Text>
        <TextInput 
            style={styles.inputModal}
            placeholder={placeholder}
            secureTextEntry={false}
        />
    </>
);

export default InputField;
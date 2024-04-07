import React from 'react';
import Card from '../components/Card';

const AppointmentScreen = () => {
    return (
        <>
            <Card title="Nombre de la persona 1" content="Fecha: 12/12/2021 - Hora: 10:00" img="../assets/images/persona.jpg" />
            <Card title="Nombre de la persona 2" content="Fecha: 12/12/2021 - Hora: 10:00" img="../assets/images/persona2.jpg" />
        </>
    );
};

export default AppointmentScreen;

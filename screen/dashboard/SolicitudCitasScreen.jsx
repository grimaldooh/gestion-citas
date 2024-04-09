import React from 'react';
import Card from '../../components/Card';

//se importan las imagenes de las personas
import img from '../../assets/images/persona.jpg';
import img2 from '../../assets/images/persona2.jpg';

const SolicitudCitasScreen = () => {
    return (
        <>
            <Card img={img} title="Aqui tus citas ajio" content="Todas tus citas estaran aqui" />
            <Card img={img2} title="Aqui tus citas ajio" content="Todas tus citas estaran aqui" />

        </>
    );
};

export default SolicitudCitasScreen;
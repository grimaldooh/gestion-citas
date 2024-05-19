import { Container } from "native-base";
import { StyleSheet } from "react-native";

export const ModalForms = StyleSheet.create({
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
        color: '#FFF',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '100%', // Ajustar al ancho del contenedor
        marginBottom: 10,
    },
    inputModalModifyPeril: {
        borderWidth: 0.5,
        //borderColor: '#DDD',
        padding: 5,
        fontSize: 13,
        borderRadius: 12,
        color: '#000',
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
        reject:{
            backgroundColor: 'red',
            margin: 5,
            borderRadius: 5,
            alignItems: 'center',
            padding: 8,
            width: '100%', // Ajustar al ancho del contenedor
            left: -5,
        },
        accept:{
            backgroundColor: 'green',
            margin: 5,
            borderRadius: 5,
            alignItems: 'center',
            padding: 8,
            width: '100%', // Ajustar al ancho del contenedor
            left: -5,
        },
        modify:{
            backgroundColor: '#4380BE',
            margin: 5,
            borderRadius: 5,
            alignItems: 'center',
            padding: 8,
            width: '100%', // Ajustar al ancho del contenedor
            left: -5,
        }
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '400'
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD353',
        textAlign: 'center',
        marginBottom: 5,
        blanco:{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFF',
            textAlign: 'center',
            marginBottom: 10,
        }
    },
    description: {
        fontSize: 15,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 10,
        padding: 5,
    },
    modalContainerCenter: {
        position: 'absolute',
        bottom: 280,
        width: '80%', // Reducir el ancho para centrar el contenido
        backgroundColor: '#001D4D',
        borderRadius: 20, // Redondear todas las esquinas
        padding: 20,
    },    
    modalContainerEdicion: {
        position: 'absolute',
        bottom: 140,
        width: '85%', // Reducir el ancho para centrar el contenido
        backgroundColor: '#001D4D',
        borderRadius: 20, // Redondear todas las esquinas
        padding: 20,
    },
    text: {
        color: '#FFF',
        fontSize: 13,
        marginBottom: 0,
    },
    inputLarge: {
        //borderWidth: 0.5,
        //borderColor: '#DDD',
        padding: 5,
        fontSize: 13,
        borderRadius: 12,
        color: '#FFF',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '100%',
        marginBottom: 10,
        height: 100,
    },
    inputSmall: {
        padding: 5,
        fontSize: 13,
        borderRadius: 6,
        color: '#FFF',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '20%',
        right: -10,
        marginBottom: 10,
        height: 30,
    },
    iconModalEdicion: {
        top: -30,
    }
});

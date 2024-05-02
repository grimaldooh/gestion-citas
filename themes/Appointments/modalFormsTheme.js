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

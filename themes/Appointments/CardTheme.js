import { StyleSheet } from 'react-native';
import { rejectButtonStyle } from '../theme';

export const styles = StyleSheet.create({
    
    card: {
        position: 'relative', // Para poder posicionar la imagen de manera absoluta
        padding: 5,
        backgroundColor: '#FFD353',
        width: 300, // Ancho de la tarjeta
        height: 100, // Altura de la tarjeta
        borderRadius: 20,
        marginLeft: 45, // Margen izquierdo para separar las tarjetas
        marginTop: 100, // Margen superior para separar las tarjetas
        flexDirection: 'row', // Para alinear la imagen y el texto en la misma fila
        alignItems: 'center', // Para alinear verticalmente el contenido
        alignSelf: 'center', // Para centrar la tarjeta en la pantalla  
        marginVertical: -80, // Para agregar un margen vertical entre las tarjetas,
        image: {
            position: 'absolute', // Para posicionar la imagen encima del rectángulo
            top: '0%', // Para centrar verticalmente la imagen
            left: -50, // Para mover la imagen hacia la izquierda y superponerla parcialmente fuera del rectángulo
            width: 100, // Ancho de la imagen circular
            height: 100, // Altura de la imagen circular
            borderRadius: 50, // Para hacer la imagen circular
            zIndex: 1, // Para asegurar que la imagen esté encima del rectángulo de la tarjeta
            shadowColor: '#000000',
            borderWidth: 2,
            borderColor: '#FFC300',
        },
        textContainer: {
            marginLeft: 50, // Ajusta el margen entre la imagen y el texto según sea necesario
        },
        title: {
            fontSize: 14,
            fontWeight: '800',
            fontFamily: 'Plus Jakarta Sans',
            marginVertical: 5,
        },
        body: {
            fontSize: 11,
            fontWeight: '300',
            fontFamily: 'Plus Jakarta Sans',
            color: '#FFFFFF',
            backgroundColor: '#003C89', // Color de fondo
            borderRadius: 5, // Borde redondeado
            width: "100%",
            padding: 2, // Espacio interior para que el texto no toque el borde
            paddingLeft: 5, // Espacio interior a la izquierda
            paddingRight: 5, // Espacio interior a la derecha
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            width: 100
        },
        acceptButton: {
            backgroundColor: '#33cf65',
            fontSize: 10,
            fontFamily: 'Plus Jakarta Sans',
            alignItems: 'center',
            borderRadius: 10,
            marginRight: 5,
            width: 75,
            height: 20,
            top: 37,
            left: 15,
        },
        rejectButton: rejectButtonStyle,
        buttonText: {
            color: '#ffffff',
        }
    },

});
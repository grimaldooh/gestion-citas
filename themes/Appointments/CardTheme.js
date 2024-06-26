import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        position: 'relative',
        backgroundColor: '#FFD353',
        width: '80%',
        //width: 315,
        height: 70,
        borderRadius: 10,
        top: -50,
        marginLeft: 45,
        marginTop: 100,
        marginBottom: -40,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        image: {
            position: 'absolute', // Para posicionar la imagen encima del rectángulo
            top: -5, // Para centrar verticalmente la imagen
            left: -50, // Para mover la imagen hacia la izquierda y superponerla parcialmente fuera del rectángulo
            width: 85, // Ancho de la imagen circular
            height: 85, // Altura de la imagen circular
            borderRadius: 50, // Para hacer la imagen circular
            zIndex: 1, // Para asegurar que la imagen esté encima del rectángulo de la tarjeta
            shadowColor: '#000000',
            borderWidth: 2,
            borderColor: '#FFC300',
        },
        textContainer: {
            top: -5,
            marginLeft: 40, // Ajusta el margen entre la imagen y el texto según sea necesario
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
            //marginTop: 10,
            margin: -10,
            padding: 10,
            borderRadius: 15,
            top: 40,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            backgroundColor: '#FFD353', // Reemplaza 'yourColor' con el color que desees
        },
        iconButton: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginLeft: 40,
            right: 10,
            left: 55,
        },
        iconContainer:{
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            left: 135,
            marginTop: 19,
        },
    },
});
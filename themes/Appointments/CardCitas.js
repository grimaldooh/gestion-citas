import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Estilos para la tarjeta en general
    card: {
        position: 'relative',
        padding: 5,
        backgroundColor: '#FFD353',
        width: 315,
        height: 70,
        borderRadius: 10,
        top: -30,
        marginLeft: 45,
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: -80,
    },
    // Estilos para la imagen en la tarjeta
    image: {
        position: 'absolute',
        top: -5,
        left: -50,
        width: 85,
        height: 85,
        borderRadius: 50,
        zIndex: 1,
        shadowColor: '#000000',
        borderWidth: 2,
        borderColor: '#FFC300',
    },
    // Estilos para el contenedor de texto en la tarjeta
    textContainer: {
        top: -5,
        marginLeft: 40,
    },
    // Estilos para el título en la tarjeta
    title: {
        fontSize: 14,
        fontWeight: '800',
        fontFamily: 'Plus Jakarta Sans',
        marginVertical: 5,
    },
    // Estilos para el cuerpo de texto en la tarjeta
    body: {
        fontSize: 11,
        fontWeight: '300',
        fontFamily: 'Plus Jakarta Sans',
        color: '#FFFFFF',
        backgroundColor: '#003C89',
        borderRadius: 5,
        width: 150,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
    },
    // Estilos para el contenedor de botones en la tarjeta
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: -30,
        padding: 10,
        borderRadius: 15,
        left: 15,
        top: 30,
        width: 250,
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#FFD353',
    },
    // Estilos para el botón de icono en la tarjeta
    iconButton: {
        justifyContent: 'flex-end',
        marginLeft: 40,
        right: 10,
    },
});
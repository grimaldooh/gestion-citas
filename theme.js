import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: '#001D3D',
        padding: 50,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: '100%',
        height: '65%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    // Estilos para la pantalla de RegistroScreen
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    input: {
        width: '99%',
        height: 40,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        borderWidth: 0,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 20,
        color: '#000000',
        textAlign: 'center',
    },
    description: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 20,
        textAlign: 'center',
    },
    // Estilos para la pantalla de LoginScreen
    button: {
        backgroundColor: '#ECB000',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    facebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3169FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 15,
    },
    facebookLogo: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    facebookButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    logoContainer: {
        width: 150, // 280 con logo camaleon
        height: 150, // 100 con logo camaleon
        position: 'absolute',
        top: 50,
        left: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,
        width: '130%',
        height: '17%',
    },
    signupButton: {
        color: '#FFC300',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    //Entradas de texto de la modal
    inputModal: {
        height: 40,
        borderColor: '#CFCFCF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
    },
    //Botones de la modal
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    modal: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modal: {
            backgroundColor: '#FFF',
            padding: 20,
            borderRadius: 10,
        },
        closeButton: {
            position: 'absolute',
            top: 10,
            right: 10,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
        },
        modifyButton: {
            backgroundColor: '#334fcf',
            fontSize: 11,
            alignItems: 'center',
            fontFamily: 'Plus Jakarta Sans',
            borderRadius: 10,
            width: 75,
            height: 20,
        },
        closePosition: {
            flexDirection: 'row',
            placeContent: 'space-between',

        }
    },
    // Estilos para la pantalla de SolicitudCitasScreen
    card: {
        position: 'relative', // Para poder posicionar la imagen de manera absoluta
        padding: 5,
        backgroundColor: '#FFD353',
        width: 290, // Ancho de la tarjeta
        height: 90, // Altura de la tarjeta
        borderRadius: 10,
        flexDirection: 'row', // Para alinear la imagen y el texto en la misma fila
        alignItems: 'center', // Para alinear verticalmente el contenido
        alignSelf: 'center', // Para centrar la tarjeta en la pantalla  
        marginVertical: 15, // Para agregar un margen vertical entre las tarjetas
        image: {
            position: 'absolute', // Para posicionar la imagen encima del rectángulo
            top: '0%', // Para centrar verticalmente la imagen
            left: -50, // Para mover la imagen hacia la izquierda y superponerla parcialmente fuera del rectángulo
            width: 100, // Ancho de la imagen circular
            height: 100, // Altura de la imagen circular
            borderRadius: 50, // Para hacer la imagen circular
            zIndex: 1, // Para asegurar que la imagen esté encima del rectángulo de la tarjeta
        },
        textContainer: {
            marginLeft: 50, // Ajusta el margen entre la imagen y el texto según sea necesario
        },
        title: {
            fontSize: 15,
            fontWeight: '600',
            fontFamily: 'Plus Jakarta Sans',
            marginVertical: 5,
        },
        body: {
            fontSize: 11,
            fontWeight: '300',
            fontFamily: 'Plus Jakarta Sans',
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
        },
        rejectButton: {
            backgroundColor: '#cf334f',
            fontSize: 11,
            alignItems: 'center',
            fontFamily: 'Plus Jakarta Sans',
            borderRadius: 10,
            width: 75,
            height: 20,
        },
        buttonText: {
            color: '#ffffff',
        }
    },
    //Entradas de texto de la modal
    inputModal: {
        width: '100%',
        height: 40,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    labelStyle: {
    },
    titleModal: {
        fontSize: 18,
        marginTop: -15,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    //Botones de la modal
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});


export const screenOptions = {
    tabBarActiveTintColor: '#FFBB00',
    tabBarInactiveTintColor: '#282828',
    tabBarInactiveBackgroundColor: '#FFFFFF',
    tabBarShowLabel: false,
    tabBarStyle: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 25,
        borderRadius: 15,
        borderTopWidth: 20,
        borderTopColor: '#FFFFFF',
        height: 70,
        paddingBottom: 14,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    tabBarIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const fabStyle = {
    position: 'absolute',
    backgroundColor: '#FFBB00',
    margin: 80,
    right: 0,
    bottom: 0,
    marginRight: 180,
};

export const modalContentStyle = {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 100,
};

export const button = {
    backgroundColor: '#FFBB00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
};

export const buttonSave = {
    backgroundColor: '#059500',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 100,
    marginHorizontal: 20,
};

export const buttonReturn = {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 100,
    marginHorizontal: 20,
};
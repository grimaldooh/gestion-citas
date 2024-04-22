import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0, // No desplazamiento horizontal
            height: 7, // Desplazamiento vertical hacia abajo
        },
        shadowOpacity: 1.43,
        shadowRadius: 1.51,
        borderBottomWidth: 3,
        borderBottomColor: '#000000',
        elevation: 10,
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
   
    // Estilos para la pantalla de SolicitudCitasScreen
    container: {
        flex: 1,
        backgroundColor: '#001D3D',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    cardBackground: {
        position: 'absolute', // Para posicionar la tarjeta detrás de la tarjeta original
        top: 50, // Aumenta este valor para mover la tarjeta más hacia abajo
        left: 20, // Para mover la tarjeta hacia la derecha
        right: 10, // Para hacer la tarjeta más pequeña
        bottom: 10, // Para hacer la tarjeta más pequeña
        width: 260, // Ancho de la tarjeta
        height: 90, // Altura de la tarjeta
        backgroundColor: '#FFD353', // Color de fondo de la tarjeta
        borderRadius: 20, // Borde redondeado de la tarjeta
        zIndex: -99999, // Para asegurar que la tarjeta esté detrás de la tarjeta original
        justifyContent: 'center', // Para centrar el contenido de la tarjeta
        alignItems: 'center', // Para centrar el contenido de la tarjeta
    },
    
    //Entradas de texto de la modal
    inputModal: {
        width: '100%',
        height: 40,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        paddingLeft: 15,
        backgroundColor: '#f8f8f8',
        fontSize: 16,
        color: '#333333',
    },
    labelStyle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000000',
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
    backgroundColor: 'transparent',
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

// In theme.js

export const rejectButtonStyle = {
    backgroundColor: '#cf334f',
    fontSize: 11,
    alignItems: 'center',
    fontFamily: 'Plus Jakarta Sans',
    borderRadius: 10,
    width: 75,
    height: 20,
};


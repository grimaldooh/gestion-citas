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
        position: 'absolute',
        color: '#FFC300',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    // Aqui es la screen de AppointmentScreen
    container: {
        flex: 1,
        backgroundColor: '#001D3D',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
            width:100
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
          buttonText:{
            color: '#ffffff',
            
          }
    }
    ,
    
});

export const navigationStyles = {
    headerStyle: {
        backgroundColor: '#001D3D',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

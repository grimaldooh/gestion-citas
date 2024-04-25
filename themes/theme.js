import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
//Estilo del componente de boton generico
    button: {
        backgroundColor: '#ECB000',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        accept: {
            backgroundColor: '#33cf65', // Color de fondo para botones de aceptación
        },
        reject: {
            backgroundColor: '#f44336', // Color de fondo para botones de rechazo
        },
        modify: {
            backgroundColor: '#2196f3', // Color de fondo para botones de modificación
        },
        // Estilos para botones pequeños
        smallButton: {
            height: 40,
            width: 100,
        },
        // Estilos para botones grandes
        largeButton: {
            height: 60,
            width: 200,
        },
        // Estilos de texto para botones pequeños
        smallButtonText: {
            fontSize: 8,
        },
        // Estilos de texto para botones grandes
        largeButtonText: {
            fontSize: 20,
        },
    },
    //Aqui termina el estilo del boton generico

// Estilos Generales de Titulo, Descripción y Entradas de Texto
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    titleScreen:{
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#9C9C9C',
        textAlign: 'center',
        top: 50,
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
        top: -15,
        marginBottom: 20,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#001D3D',
    },
    
    
//Estilo del componente ModalForms
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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

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

export const rejectButtonStyle = {
    backgroundColor: '#cf334f',
    fontSize: 11,
    alignItems: 'center',
    fontFamily: 'Plus Jakarta Sans',
    borderRadius: 10,
    width: 75,
    height: 20,
};

export const acceptButton = {
    fontFamily: 'Plus Jakarta Sans',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 5,
    top: 37,
    left: 15,
};

export const buttonGeneric = {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    accept: {
        backgroundColor: '#33cf65'
    },
    reject: {
        backgroundColor: '#f44336'
    },
    modify: {
        backgroundColor: '#2196f3'
    },
    loginColor: {
        backgroundColor: '#ECB000'
    },
    smallButton: {
        height: 40,
        width: 100,
    },
    largeButton: {
        height: 60,
        width: 200,
    },
    smallButtonText: {
        fontSize: 14,
    },
    largeButtonText: {
        fontSize: 20,
    },
    extraLarge: {
        height: 80,
        width: 300,
    },
}

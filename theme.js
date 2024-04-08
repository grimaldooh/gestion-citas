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
        color: '#FFC300',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    // Aqui es la screen de AppointmentScreen
    container: {
        flex: 1,
        backgroundColor: '#001D3D',
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


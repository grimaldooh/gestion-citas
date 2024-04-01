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
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 15,
        color: '#000000',
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
        borderRadius: 20,
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
        borderRadius: 5,
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
        width: 280,
        height: 100,
        position: 'absolute',
        top: 100,
        left: 65,
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
    },
    signupButton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
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

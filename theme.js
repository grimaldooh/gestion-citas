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
    facebookText: {
        color: '#FFFFFF',
        marginTop: 15,
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
});

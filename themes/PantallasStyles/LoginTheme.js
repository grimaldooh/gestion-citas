import { StyleSheet } from 'react-native';

export const Login = StyleSheet.create({
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
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3169FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 15,
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
        //position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,
        margin: 120,
        width: '130%',
        height: '17%',
    },
    signupButton: {
        color: '#FFC300',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
})
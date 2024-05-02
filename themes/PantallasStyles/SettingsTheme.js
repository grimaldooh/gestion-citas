import { StyleSheet } from 'react-native';

export const CardConfig = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFD353',
        marginVertical: 5,
        borderRadius: 15,
        shadowColor: '#000000',
        height: 'auto',
        width: '90%',
        top: 50,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 13,
    },
});
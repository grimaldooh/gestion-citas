import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    }
});
import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa el ícono de Ionicons
import CardButton from './CardButton';
import { styles } from '../theme';

const ModalComponent = ({ title, message, visible, onClose }) => {
    
    const onReject = () => {
        console.log('Rechazar en la modal');
    }

    const onModify = () => {
        console.log('Modificar en la modal');
    }
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modal.container}>
                <View style={styles.modal.modal}>
                    <View style={styles.modal.closePosition}>
                    <Text style={styles.modal.title}>{title}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text>{message}</Text>
                    <View style={styles.modal.buttonContainer}>
                        <CardButton onPress={onModify} title="Modificar" buttonStyle={styles.modal.modifyButton}  />
                        <CardButton onPress={onReject} title="Rechazar" buttonStyle={styles.card.rejectButton}  />
                    </View>
                </View>
            </View>
        </Modal>
    );
};



export default ModalComponent;

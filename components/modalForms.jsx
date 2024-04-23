// ModalForm.js
import React from 'react';
import { Modal, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { modalStyle, modalContentStyle, buttonSave, buttonReturn, styles } from '../themes/theme';

import TextInputModal from './TextInputModal';
import { fields } from './InputField';

const ModalForm = ({ onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={onClose}
        >
            <View style={modalStyle}>
                <ScrollView>
                    <View style={modalContentStyle}>
                        <Text style={styles.titleModal}>Registra una Cita</Text>
                        {fields.map((field, index) => (
                            <>
                                {/* <Text style={styles.labelStyle}>{field.label}</Text>  */}
                                <TextInputModal key={index} {...field} />
                            </>
                        ))}
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                onPress={onClose}
                                style={buttonSave}
                            >
                                <Text>Guardar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={onClose}
                                style={buttonReturn}
                            >
                                <Text>Regresar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

export default ModalForm;
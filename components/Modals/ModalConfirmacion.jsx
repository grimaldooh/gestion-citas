// ModalConfirmacion.jsx
import React from "react";
import { Modal, View, Text, TouchableHighlight } from "react-native";
import { styles } from "../../themes/theme";
import { ModalForms } from "../../themes/Appointments/modalFormsTheme";
import ButtonGeneric from "../Buttons/ButtonGeneric";

const ModalConfirmacion = ({
  modalVisible,
  setModalVisible,
  handleConfirm,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={ModalForms.overlay}>
        <View style={ModalForms.modalContainer}>
          <Text style={styles.title}>¿Estás seguro?</Text>
          <View
            style={{
              padding: 2,
              marginHorizontal: 50,
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <ButtonGeneric
              backgroundColor="accept"
              fontSize="small"
              width="small"
              height="small"
              onPress={handleConfirm}>
              Confirmar
            </ButtonGeneric>
            <ButtonGeneric
              backgroundColor="reject"
              fontSize="small"
              width="small"
              height="small"
              onPress={() => setModalVisible(!modalVisible)}>
              Cancelar
            </ButtonGeneric>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmacion;

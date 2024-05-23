import React from "react";
import { Modal, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// Importamos los componentes necesarios
import ButtonGeneric from "../Buttons/ButtonGeneric";

// Importamos los estilos
import { ModalForms } from "../../themes/Appointments/modalFormsTheme";

const PaymentModal = ({ visible, onClose, onPayNow }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={ModalForms.overlay}>
        <View style={ModalForms.modalContainerCenter}>
          <View style={{ flexDirection: "row", left: 15, marginLeft: 10 }}>
            <Icon
              name="error"
              size={30}
              color="#FF0000"
              style={{ marginRight: 10 }}
            />
            <Text style={ModalForms.title}>Error en el Pago</Text>
          </View>
          <Text style={ModalForms.description}>
            El pago no se ha podido realizar correctamente. {"\n"}
            Por favor, intente de nuevo o use otro método de pago.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}>
            <ButtonGeneric onPress={onClose}>Cerrar</ButtonGeneric>
            <ButtonGeneric onPress={onPayNow}>Pagar Ahora</ButtonGeneric>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;

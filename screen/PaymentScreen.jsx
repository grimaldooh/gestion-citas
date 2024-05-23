import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { captureOrder, getOrderDetails } from "../services/paypalService";

const PaymentScreen = ({ route, navigation }) => {
  const { orderId } = route.params;
  const [orderDetails, setOrderDetails] = useState(null);

  const handleCaptureOrder = async () => {
    try {
      const captureResponse = await captureOrder(orderId);
      console.log("Orden capturada:", captureResponse);
      Alert.alert("Pago realizado", "El pago se ha realizado correctamente.", [
        {
          text: "OK",
          onPress: async () => {
            const details = await getOrderDetails(orderId);
            setOrderDetails(details);
            console.log("Detalles de la orden:", details);
          },
        },
      ]);
    } catch (error) {
      console.error("Error al capturar la orden:", error);
      Alert.alert("Error", "No se pudo capturar la orden.");
    }
  };

  useEffect(() => {
    handleCaptureOrder();
  }, []);

  return (
    <View>
      <Text>Procesando el pago...</Text>
      {orderDetails && (
        <View>
          <Text>Detalles de la Orden:</Text>
          <Text>{JSON.stringify(orderDetails, null, 2)}</Text>
        </View>
      )}
    </View>
  );
};

export default PaymentScreen;

import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
  Linking,
} from "react-native";
import { View } from "react-native-animatable";
import {
  createPayPalOrder,
  capturePayPalOrder,
} from "../services/paypalService";
import PayPalLogo from "../assets/images/paypal_logo.png";

const PayPalButton = ({ onPaymentSuccess }) => {
  const handlePayPalPayment = async () => {
    try {
      const currency = "USD"; // ejemplo de moneda
      // Generar un valor aleatorio entre 1 y 3
      const value = (Math.random() * 2 + 1).toFixed(2);
      // Generar una referencia aleatoria de 7 caracteres
      const reference = Math.random().toString(36).substring(2, 9);

      const order = await createPayPalOrder(value, currency, reference);
      if (order && order.data && order.data.orderId) {
        // Redirigir al usuario al sitio de PayPal para realizar el pago
        Linking.openURL(order.data.approvalUrl);

        // Esperar a que el usuario complete el pago (aquí puedes usar una lógica de eventos o temporizador)

        // Capturar el pago una vez que el usuario haya completado el pago
        const capture = await capturePayPalOrder(order.data.orderId);
        if (capture && capture.data && capture.data.status === "COMPLETED") {
          // El pago se ha completado con éxito
          onPaymentSuccess();
        } else {
          Alert.alert("Error", "Error al capturar el pago de PayPal");
        }
      } else {
        Alert.alert("Error", "Error al crear la orden de PayPal");
      }
    } catch (error) {
      console.error("Error en el pago con PayPal", error);
      Alert.alert(
        "Error",
        "Hubo un problema con el pago de PayPal. Inténtalo de nuevo."
      );
    }
  };

  return (
    <View style={styles.containerPaypal}>
      <TouchableOpacity style={styles.button} onPress={handlePayPalPayment}>
        <Image source={PayPalLogo} style={styles.logo} />
        <Text style={styles.text}>Pagar con PayPal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPaypal: {},
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0070ba",
    height: 40,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: 5,
  },
  logo: {
    width: 100,
    height: 20,
    marginRight: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PayPalButton;

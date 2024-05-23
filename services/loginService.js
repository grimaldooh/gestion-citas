import { jwtDecode } from 'jwt-decode';
import { Alert } from 'react-native';

//importamos servicios adicionales
import { Linking } from 'react-native';
import { captureOrder } from './paypalService';


export const LoginAPI = async (email, password) => {
    const API_URL_LOGIN = 'https://24a5-187-188-39-222.ngrok-free.app/api/User/login';
    try {
        const response = await fetch(API_URL_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        const data = await response.json();
        console.log('Respuesta de la API:', data);

        const token = data.token;
        console.log('Token JWT:', token);

        const decodedToken = jwtDecode(token);
        console.log('Token decodificado:', decodedToken);

        // Verificar el estado del pago
        if (decodedToken.PaymentStatus === 'True') {
            return decodedToken;
        } else {
            // Mostrar alerta y denegar el inicio de sesión
            const paypalPaymentUrl = decodedToken.PaypalPaymentUrl;
            const orderId = decodedToken.orderId;  // Asegúrate de tener el orderId del token decodificado
            Alert.alert(
                'Error de pago',
                'No ha realizado el pago para acceder a la aplicación',
                [
                    {
                        text: 'Cerrar',
                        onPress: () => console.log('Cerrar presionado'),
                        style: 'cancel'
                    },
                    {
                        text: 'Pagar',
onPress: () => {
    // Redirigir a la URL de pago de PayPal
    Linking.openURL(paypalPaymentUrl)
        .then(() => {
            // Capturar la orden
            return captureOrder(orderId);
        })
        .then(captureResponse => {
            console.log('Orden capturada:', captureResponse);
            Alert.alert('Pago realizado', 'El pago se ha realizado correctamente.');
        })
        .catch(error => {
            console.error('Error al redirigir a PayPal o capturar la orden:', error);
            Alert.alert('Error', 'No se pudo procesar el pago.');
        });
}
                    }
                ],
                { cancelable: false }
            );
            return null;
        }

    } catch (error) {
        console.error('Error en la API de inicio de sesión:', error);
        Alert.alert('Error', 'Error en la respuesta de la API');
        return null;
    }
};



export const RegisterAPI = async (fullName, email, password, phoneNumber, address, profession, imageUrl) => {
    const API_URL_REGISTER = 'https://24a5-187-188-39-222.ngrok-free.app/api/User/register'
    try {
        const response = await fetch(API_URL_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, email, password, phoneNumber, address, profession, imageUrl })
        });
        console.log(JSON.stringify({ fullName, email, password, phoneNumber, address, profession, imageUrl }));
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const LogoutAPI = async () => {
    const API_URL_LOGOUT = 'https://24a5-187-188-39-222.ngrok-free.app/api/User/login'
    try {
        const response = await fetch(API_URL_LOGOUT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Asegúrate de enviar el token en los encabezados si es necesario para la API
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        // Elimina el token del almacenamiento local
        localStorage.removeItem('token');

        return response;
    } catch (error) {
        console.error(error);
    }
}

export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

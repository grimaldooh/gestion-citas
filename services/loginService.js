import { jwtDecode } from 'jwt-decode';

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

        // Decodificar el token
        const decodedToken = jwtDecode(token);
        console.log('Token decodificado:', decodedToken);

        return decodedToken;

    } catch (error) {
        console.error('Error al hacer la solicitud a la API:', error);
        throw error;
    }
};




export const RegisterAPI = async (fullName,email, password, phoneNumber, address, profession, imageUrl) => {
    const API_URL_REGISTER = 'https://24a5-187-188-39-222.ngrok-free.app/api/User/register'
    try {
        const response = await fetch(API_URL_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName,email, password, phoneNumber, address, profession, imageUrl })
        });
        console.log(JSON.stringify({ fullName,email, password, phoneNumber, address, profession, imageUrl}));
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}
import { jwtDecode } from 'jwt-decode';

export const LoginAPI = async (email, password) => {
    const API_URL_LOGIN = 'https://a4b3-187-190-138-154.ngrok-free.app/api/User/login';
    try {
        const response = await fetch(API_URL_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta de la API, Login Services');
        }
        const data = await response.json();
        const token = data.token;
        const decodedToken = jwtDecode(token);
        return decodedToken;
    }
    catch (error) {
        console.error(error);
    }
}




export const RegisterAPI = async (fullName, email, password, phoneNumber, address, profession, imageUrl) => {
    const API_URL_REGISTER = 'https://a4b3-187-190-138-154.ngrok-free.app/api/User/register'
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
    const API_URL_LOGOUT = 'https://a4b3-187-190-138-154.ngrok-free.app/api/User/login'
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

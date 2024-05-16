export const LoginAPI = async (email, password) => {
    const API_URL_LOGIN = 'https://24a5-187-188-39-222.ngrok-free.app/api/User/login'
    try {
        const response = await fetch(API_URL_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();

            // Imprime el token en la consola
            //console.log(data.token);
        }

        return response;
    } catch (error) {
        console.error(error);
    }
}

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

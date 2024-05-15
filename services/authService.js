
export const LoginAPITest = async (userId, password) => {
    try {
        const url = `${API_URL}?userId=${encodeURIComponent(userId)}&password=${encodeURIComponent(password)}`;
        console.log('Cuerpo de la solicitud:', JSON.stringify({ userId, password })); // Imprimir el cuerpo de la solicitud en la consola
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};


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
        return response;
    } catch (error) {
        console.error(error);
    }

}
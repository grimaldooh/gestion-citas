const API_URL = 'https://localhost:7114/api/Users';

export const LoginAPI = async (userId, password) => {
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


export const RegisterAPI = async (fullName, email, password) => {
    try {
        const response = await fetch(API_URL + 'register', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName,
                email,
                password
            })
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
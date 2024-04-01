const API_URL = 'AQUI_VA_LA_API';

export const LoginAPI = async (username, password) => {
    try {
        const response = await fetch(API_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

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
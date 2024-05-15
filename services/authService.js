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
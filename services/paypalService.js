const API_BASE_URL = 'https://a4b3-187-190-138-154.ngrok-free.app/api/User/CheckUserPayment';

export const checkPayment = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId })
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};


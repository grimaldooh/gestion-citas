const API_BASE_URL = 'https://24a5-187-188-39-222.ngrok-free.app/api/PaypalService';

export const captureOrder = async (orderId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/capture-order/${orderId}`, {
            method: 'POST',
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response body:', errorText);
            throw new Error('Error al capturar la orden');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en captureOrder:', error);
        throw error;
    }
};

export const getOrderDetails = async (orderId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/order-details/${orderId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response body:', errorText);
            throw new Error('Error al obtener los detalles de la orden');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en getOrderDetails:', error);
        throw error;
    }
};

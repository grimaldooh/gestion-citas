import { Linking } from 'react-native';


export const createPayPalOrder = async (value, currency, reference) => {
  const API_URL_CREATE_ORDER = `https://24a5-187-188-39-222.ngrok-free.app/api/PaypalService/create-order?value=${value}&currency=${currency}&reference=${reference}`;

  try {
    const response = await fetch(API_URL_CREATE_ORDER, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseData = await response.json();

    if (responseData && responseData.orderId && responseData.approvalUrl) {
      console.log('Order ID:', responseData.orderId);
      console.log('Redirecting to payment:', responseData.approvalUrl);
      // Open the approvalUrl in the browser
      Linking.openURL(responseData.approvalUrl);
      return { data: responseData, error: null }; // Devolvemos la respuesta con el orderID
    } else {
      throw new Error('Order ID or approval URL not found in response');
    }
  } catch (error) {
    console.error('Error creating PayPal order', error);
    return { data: null, error: error.message }; // Devolvemos el mensaje de error
  }
};

export const capturePayPalOrder = async (orderId) => {
  const API_URL_CAPTURE_ORDER = `https://24a5-187-188-39-222.ngrok-free.app/api/PaypalService/capture-order?orderId=${orderId}`;
  //https://24a5-187-188-39-222.ngrok-free.app/api/PaypalService/capture-order?orderId=2SR744303J0385740

  try {
    const response = await fetch(API_URL_CAPTURE_ORDER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orderId })
    });

    if (!response.ok) {
      throw new Error('Error capturing PayPal order');
    }

    const responseData = await response.json();
    console.log('Capture response:', responseData);
    return { data: responseData, error: null }; // Devolvemos la respuesta
  } catch (error) {
    console.error('Error capturing PayPal order', error);
    return { data: null, error: error.message }; // Devolvemos el mensaje de error
  }
};


export const getPayPalOrderDetails = async (orderId) => {
  try {
    const queryParams = new URLSearchParams({ orderId });
    const response = await fetch(`${API_BASE_URL}/order-details?${queryParams}`);
    if (!response.ok) {
      throw new Error('Error getting PayPal order details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error getting PayPal order details', error);
    throw error;
  }
};

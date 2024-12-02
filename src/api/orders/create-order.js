import api from '../api';

export async function createOrder(orderData) {
  try {
    const response = await api('pedido', 'POST', orderData);
    console.log('order created:', response);
  } catch (error) {
    console.error('Error creating order:', error);
  }
}
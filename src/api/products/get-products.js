import apiRequest from '../api';

export async function getProducts(establishmentId) {
  try {
    const response = await apiRequest('produto', 'GET', null, establishmentId);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
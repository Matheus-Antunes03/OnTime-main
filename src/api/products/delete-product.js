import apiRequest from '../api';

export async function deleteProduct(productId) {
  try {
    const response = await apiRequest('produto', 'DELETE', null, productId);
    return response;
  } catch (error) {
    console.error('Error deleting product:', error);
    return [];
  }
}
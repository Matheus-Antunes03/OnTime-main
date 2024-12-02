import api from '../api';

export async function createProduct(productData) {
  try {
    const response = await api('produto', 'POST', productData);
    console.log('Product created:', response);
  } catch (error) {
    console.error('Error creating product:', error);
  }
}
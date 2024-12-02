import apiRequest from '../api';

export async function getEstablishments() {
  try {
    const response = await apiRequest('estabelecimento', 'GET', null, null);
    console.log('Establishments fetched:', response);
    return response;
  } catch (error) {
    console.error('Error fetching establishments:', error);
    return [];
  }
}
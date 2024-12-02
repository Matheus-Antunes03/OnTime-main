import api from '../api';

export async function createEstablishment(establishmentData) {
  try {
    const response = await api('estabelecimento', 'POST', establishmentData);
    console.log('Establishment created:', response);
  } catch (error) {
    console.error('Error creating establishment:', error);
  }
}
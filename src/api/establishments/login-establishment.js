import api from '../api';

export async function loginEstablishment(cnpj) {
  try {
    const response = await api('estabelecimento/login', 'POST', {cnpj});
    console.log('Establishment logged in:', response[0]);
    return response[0];
  } catch (error) {
    console.error('Error logging in:', error);
  }
}
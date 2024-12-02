import api from '../api';

export async function loginUser(cpf) {
  try {
    const response = await api('usuario/login', 'POST', {cpf});
    console.log('User logged in:', response);
    return response[0];
  } catch (error) {
    console.error('Error logging in:', error);
  }
}
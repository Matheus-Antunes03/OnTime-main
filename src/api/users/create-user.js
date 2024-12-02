import api from '../api';

export async function createUser(userData) {
  try {
    const response = await api('usuario', 'POST', userData);
    console.log('User created:', response);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
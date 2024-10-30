// src/AppStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 100, // Altura do cabeçalho
    backgroundColor: '#ff4400', // Cor de fundo do cabeçalho
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40, // Raio do canto inferior esquerdo
    borderBottomRightRadius: 40, // Raio do canto inferior direito
    overflow: 'hidden', // Para garantir que o raio funcione corretamente
  },
  footer: {
    height: 70, // Altura do rodapé
    backgroundColor: '#ff4400', // Cor de fundo do rodapé
  },
  content: {
    flex: 1, // O conteúdo ocupa o espaço restante
    justifyContent: 'center', // Centraliza o conteúdo
    alignItems: 'center', // Centraliza o conteúdo
  },
});

export default styles;

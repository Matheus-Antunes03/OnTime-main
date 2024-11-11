import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',  // Posiciona o botão de voltar fora do fluxo principal
    left: 10,              // Define a posição à esquerda
    justifyContent: 'center',
    alignItems: 'center',
  },
  voltar: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 140,
    height: 60,
  },
});

export default styles;

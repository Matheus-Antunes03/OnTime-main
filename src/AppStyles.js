import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: '#ff4400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 100,
    backgroundColor: '#ff4400',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  headerUsuario: {
    height: 100,
    width: "100%",
    backgroundColor: '#ff4400',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    position: "absolute"
  },
  footer: {
    height: 70,
    backgroundColor: '#ff4400',
  },
  selecionadoHome: {
    backgroundColor: "#ffffff",
    width: 33,
    height: 3,
    borderRadius: 20,
    marginLeft: 35,
    marginBottom: 20,
    marginTop: 887,
    position: "absolute"
  },
  selecionadoMapa: {
    backgroundColor: "#ffffff",
    width: 35,
    height: 3,
    borderRadius: 20,
    marginLeft: 138,
    marginBottom: 20,
    marginTop: 887,
    position: "absolute"
  },
  selecionadoPesquisa: {
    backgroundColor: "#ffffff",
    width: 33,
    height: 3,
    borderRadius: 20,
    marginLeft: 245,
    marginBottom: 20,
    marginTop: 887,
    position: "absolute"
  },
  selecionadoUsuario: {
    backgroundColor: "#ffffff",
    width: 41,
    height: 3,
    borderRadius: 20,
    marginLeft: 342,
    marginBottom: 20,
    marginTop: 887,
    position: "absolute"
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  contentUsuario: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#ff4400",
  },
  carrinho: {
    position: 'absolute',
    marginLeft: 325,
    marginTop: 100
  },
  usuario: {
    position: 'relative',
    
  },
  cards: {
    alignItems: "center",
    marginTop: 115
  },
  gradient2: {
    position: 'absolute',
    bottom: 0, // O gradiente começa da parte inferior da imagem
    left: 0,
    top: 800,
    right: 0,
    height: 100, // Defina a altura do gradiente
  },
  meu_carrinho: {
    color: "#ff4400",
    fontSize: 40,
    fontWeight: 600,
    textAlign: "center"
  },
  divisoria: {
    backgroundColor: "#ff4400",
    width: "95%",
    height: 7,
    borderRadius: 20,
    marginLeft: 10
  },
  card_carrinho: {
    alignItems: "center",
    marginTop: 20
  },
});

export default styles;

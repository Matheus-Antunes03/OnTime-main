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
});

export default styles;

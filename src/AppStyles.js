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
  footer: {
    height: 70,
    backgroundColor: '#ff4400',
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
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

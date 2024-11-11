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
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cards: {
    alignItems: "center",
    marginTop: 25
  },
});

export default styles;

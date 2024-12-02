import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  content: {
    backgroundColor: "#ff4400",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 20,
    marginTop: 20,
    width: 400
  },
  title: {
    fontSize: 30,
    color: '#ff4400',
    fontWeight: 600,
    textAlign: "center"
  },
  divisoria: {
    width: "95%",
    height: 5,
    backgroundColor: "#ff4400",
    borderRadius: 20
  },
  label: {
    color: "#ffffff",
    fontSize: 23,
    marginTop: 15
  },
  input: {
    height: 40,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    marginTop: 5,
    fontSize: 20
  },
  cadastrar: {
    width: 200,
    height: 60,
    backgroundColor: "#ff4400",
    padding: 5,
    borderRadius: 20,
    marginTop: 40
  },
  texto: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: 600,
    textAlign: "center",
  }
});

export default styles;

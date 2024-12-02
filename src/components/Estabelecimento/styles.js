import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ff4400',
      },
      imageContainer: {
        position: 'relative',
        width: '100%',
        height: 300,
      },
      foto: {
        width: '100%',
        height: '100%',
        marginTop: 70
      },
      gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 270,
        right: 0,
        height: 100,
      },
      nome: {
        color: "#ffffff",
        fontSize: 40,
        letterSpacing: 3,
        fontWeight: 600,
        textAlign: "center"
      },
      divisoria: {
        backgroundColor: "#ffffff",
        width: "95%",
        height: 7,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 10
      },
      divisoria2: {
        backgroundColor: "#ffffff",
        width: "95%",
        height: 4,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 10
      },
      opcoes: {
        flexDirection: "row",
        marginTop: 20,
      },
      icone: {
        width: 50,
        height: 50,
        marginLeft: 20
      },
      opcao: {
        color: "#ffffff",
        fontSize: 30,
        marginLeft: 20
      }
});

export default styles;

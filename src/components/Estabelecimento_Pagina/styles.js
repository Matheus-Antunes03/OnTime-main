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
        fontSize: 30,
        letterSpacing: 3,
        fontWeight: 600,
        textAlign: "center"
      },
      endereco: {
        color: "#ffffff",
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
      produtos: {
        color: "#ffffff",
        fontSize: 30,
        textAlign: "center",
        fontWeight: 600
      },
      cards: {
        alignSelf: "center",
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.75,
        shadowRadius: 20,
        elevation: 10,
    },
    adicionarProduto: {
      width: 70,
      height: 70,
      backgroundColor: "#ffffff",
      borderRadius: 50,
      marginTop: 30,
      alignSelf: 'center'
    },
    adicionarProdutoTexto: {
      color: '#ff4400',
      fontWeight: 800,
      fontSize: 60,
      textAlign: "center",
      marginTop: -13
    }
});

export default styles;

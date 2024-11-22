import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: 380,
      height: 180,
      backgroundColor: "#ff4400",
      borderRadius: 30,
      flexDirection: 'row',
      paddingTop: 10
    },
    content: {
      flexDirection: "column"
    },
    img_check: {
        flexDirection: "column",
        paddingLeft: 10,
    },
    foto: {
      width: 160,
      height: 70,
      marginTop: 10
    },
    nome: {
      color: "#ffffff",
      fontSize: 20,
      fontWeight: 500
    },
    botao: {
        width: 50,
        height: 50,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 10,
        marginLeft: 60
    },
    lapis: {
        width: 30,
        height: 30,
    },
    preco: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        width: 220,
        height: 60,
        paddingTop: 25,
        paddingBottom: 10,
        paddingLeft: 10,
        marginLeft: -80,
        marginTop: 25,
        flexDirection: "row"
    },
    desconto: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: 600,
        width: 70,
        height: 60,
        backgroundColor: "#D43800",
        marginTop: -25,
        marginLeft: 45,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        fontFamily: "sans-serif",
        paddingTop: 15,
        paddingLeft: 5
    },
    valor: {
        color: "#ff4400",
        fontSize: 25,
        fontWeight: 600,
        marginTop: -15
    },
  });
  
  export default styles;
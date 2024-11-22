import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: 380,
      height: 180,
      backgroundColor: "#ff4400",
      borderRadius: 30,
      flexDirection: 'row',
      paddingTop: 20
    },
    content: {
      flexDirection: "column"
    },
    img_check: {
        flexDirection: "column",
        paddingLeft: 20,
        paddingRight: 20
    },
    foto: {
      width: 160,
      height: 70,
      marginTop: 35
    },
    nome: {
      color: "#ffffff",
      fontSize: 18,
    },
    nomeMercado: {
        color: "#ffffff",
        fontSize: 13,
    },
    preco: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        width: 182,
        height: 65,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        marginTop: 10
    },
    lado:{
        flexDirection: "row"
    },
    de: {
        color: "#FF8D64",
        fontSize: 15,
        fontWeight: 400
    },
    custo: {
        backgroundColor: "#D43800",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: 55,
        height: 35,
        marginLeft: "auto",
        padding: 3
    },
    desconto: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 600
    },
    valor: {
        color: "#ff4400",
        fontSize: 20,
        fontWeight: 600,
        marginTop: -15
    },
  });
  
  export default styles;
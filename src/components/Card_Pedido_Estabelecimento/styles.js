import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: 380,
      height: 200,
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
        paddingLeft: 20,
        paddingRight: 20
    },
    foto: {
      width: 160,
      height: 70,
      marginTop: 40
    },
    pedido: {
      color: "#ffffff",
      fontSize: 30,
      fontWeight: 600
    },
    infos: {
        color: "#ffffff",
        fontSize: 20,
    },
    preco: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        width: 181,
        height: 50,
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        marginTop: 5
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
        fontSize: 25,
        fontWeight: 600,
        marginTop: -15
    },
  });
  
  export default styles;
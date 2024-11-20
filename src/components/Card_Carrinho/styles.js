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
    },
    nome: {
      color: "#ffffff",
      fontSize: 18,
    },
    preco: {
      flexDirection: "column",
      backgroundColor: "#ffffff",
      width: 181,
      height: 50,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      marginTop: 30
    },
    valor: {
        color: "#ff4400",
        fontSize: 30,
        textAlign: "center",
        fontWeight: 600
    }
  });
  
  export default styles;
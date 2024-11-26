import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: 250,
      height: 150,
      backgroundColor: "#ff4400",
      borderRadius: 20,
      alignSelf: "center",
      marginTop: 200,
      paddingTop: 10,
      marginLeft: 150
    },
    nome: {
      color: "#ffffff",
      fontSize: 22,
      alignSelf: "center"
    },
    lista: {
      marginLeft: 30,
    },
    item: {
      color: "#ffffff",
      fontSize: 15
    },
    desconto: {
      backgroundColor: "#ffffff",
      width: 130,
      height: 50,
      borderTopLeftRadius: 40,
      borderBottomLeftRadius: 40,
      paddingLeft: 13,
      marginTop: 30,
      marginLeft: 121
    },
    porcento: {
      color: "#ff4400",
      fontWeight: 600
    },
    lado: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    triangulo: {
      width: 0,
      height: 0,
      borderLeftWidth: 25,
      borderRightWidth: 25,
      borderBottomWidth: 50,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "#ff4400",
      transform: [{ rotate: "180deg" }],
      alignSelf: "center",
      marginLeft: 220
    }
  });
  
  export default styles;
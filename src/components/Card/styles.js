import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: 380,
      height: 180,
      backgroundColor: "#ff4400",
      borderRadius: 30,
      flexDirection: 'row',
    },
    content: {
      flexDirection: "column",
      padding: 20
    },
    foto: {
      width: 160,
      height: 180,
      borderRadius: 30
    },
    nome: {
      color: "#ffffff",
      fontSize: 25,
      fontWeight: 600
    },
    lista: {
      flexDirection: "column",
    },
    item: {
      color: "#ffffff",
      fontSize: 15,
      marginLeft: 20
    }
  });
  
  export default styles;
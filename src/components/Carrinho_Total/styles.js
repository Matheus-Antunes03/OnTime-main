import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: 'space-between',
    flexDirection: "row"
  },
  valor:{
    backgroundColor: "#ff4400",
    width: 260,
    height: 70,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  total: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: 500
  },
  comprar: {
    color: "#ffffff",
    fontFamily: "sans-serif",
    fontSize: 28,
    width: 150,
    height: 70,
    padding: 18,
    backgroundColor: "#ff4400",
    fontWeight: 600,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  });
  
  export default styles;
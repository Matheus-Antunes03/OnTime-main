import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff4400",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo:{
        width: 280,
        height: 170
    },
    nome: {
        color: "#ffffff",
        fontWeight: 600,
        fontSize: 20,
        marginTop: 20,
        textAlign: "center",
    },
    campo: {
        width: 300,
        height: 30,
        borderRadius: 50,
        backgroundColor: "#ffffff",
        paddingLeft: 5
    },
    entrar: {
        width: 200,
        height: 70,
        fontSize: 30,
        color: "#ff4400",
        textAlign: "center",
        padding: 20,
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
        borderRadius: 50,
        fontWeight: 600,
        marginTop: 30
    }
});
  
export default styles;
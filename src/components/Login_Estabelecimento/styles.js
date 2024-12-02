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
        paddingLeft: 5,
        marginTop: 10,
    },
    entrar: {
        width: 200,
        height: 70,
        padding: 15,
        backgroundColor: "#ffffff",
        borderRadius: 50,
        marginTop: 30
    },
    texto: {
        color: '#ff4400',
        fontWeight: 700,
        fontSize: 30,
        textAlign: "center"
    }
});
  
export default styles;
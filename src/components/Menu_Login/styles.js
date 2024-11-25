import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    texto: {
        color: "#ff4400",
        fontSize: 30,
        textAlign: "center",
        fontWeight: 600,
        marginTop: 5
    },
    card: {
        backgroundColor: "#ff4400",
        width: 250,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginTop: 50
    },
    botao: {
        borderColor: "#ffffff",
        borderWidth: 8,
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    icone: {
        width: 150,
        height: 150,
    },
    sou: {
        color: "#ffffff",
        fontWeight: 600,
        fontSize: 15,
        textAlign: "center",
    }
});
  
export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    nome: {
        color: "#ffffff",
        fontSize: 25,
        textAlign: "left",
        padding: 15
    },
    foto: {
        width: 350,
        height: 150,
        marginTop: 50
    },
    content: {
        width: "100%",
        height: 420,
        backgroundColor: "#ff4400",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 10
    },
    venda: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    vendido: {
        backgroundColor: "#ffffff",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: 190,
        height: 60,
        padding: 10
    },
    por: {
        color: "#ff4400",
        fontSize: 15,
        fontWeight: 500
    },
    preco: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: 190,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    lado:{
        flexDirection: "row"
    },
    de: {
        color: "#FF8D64",
        fontSize: 18,
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
        fontSize: 30,
        fontWeight: 600
    },
    content2: {
        flexDirection: "row"
    },
    infos: {
        backgroundColor: "#ffffff",
        width: 280,
        height: 120,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 20
    },
    infos_prod: {
        color: "#ff4400",
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        padding: 10
    },
    informacao: {
        color: "#000000",
        fontSize: 15,
        paddingLeft: 20
    },
    adicionar: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        width: 90,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginTop: 20,
        paddingLeft: 15
    },
    carrinho_adicionar:{
        width: 50,
        height: 50
    },
    esp_comprar: {
        width: "100%",
        height: 100,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 40,
        padding: 20,
        alignItems: "center"
    },
    comprar: {
        color: "#ffffff",
        backgroundColor: "#ff4400",
        width: 200,
        height: 60,
        fontSize: 30,
        textAlign: "center",
        fontWeight: 600,
        padding: 10,
        fontFamily: "sans-serif",
        borderRadius: 50
    },
});
  
export default styles;
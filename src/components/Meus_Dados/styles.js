import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
      },
      imageContainer: {
        position: 'relative',
        width: '100%',
        height: 300,
      },
      foto: {
        width: '100%',
        height: '100%',
        marginTop: 70
      },
      fundo: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      },
      nome: {
        color: "#ff4400",
        fontSize: 50,
        letterSpacing: 3,
        fontWeight: 600,
        textAlign: "center"
      },
      divisoria: {
        backgroundColor: "#ff4400",
        width: "95%",
        height: 7,
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 10
      },
      titulo: {
        color: "#ff4400",
        fontSize: 27,
        fontWeight: 600,
        marginLeft: 20,
        marginTop: 10
      },
      item: {
        color: "#ff4400",
        fontSize: 20,
        fontWeight: 400,
        marginLeft: 20
      },
      editar: {
        width: 150,
        height: 60,
        backgroundColor: "#ff4400",
        borderRadius: 40,
        alignSelf: "center",
        color: "#ffffff",
        fontFamily: "sans-serif",
        textAlign: "center",
        fontSize: 30,
        paddingTop: 10,
        fontWeight: 600
      }
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ff4400', // Cor de fundo laranja
      },
      imageContainer: {
        position: 'relative',
        width: '100%',
        height: 300, // Altura da imagem
      },
      foto: {
        width: '100%',
        height: '100%',
        marginTop: 70
      },
      gradient: {
        position: 'absolute',
        bottom: 0, // O gradiente começa da parte inferior da imagem
        left: 0,
        top: 270,
        right: 0,
        height: 100, // Defina a altura do gradiente
      },
      nome: {
        color: "#ffffff",
        fontSize: 30,
        letterSpacing: 3,
        fontWeight: 600,
        textAlign: "center"
      },
      endereco: {
        color: "#ffffff",
        textAlign: "center"
      },
      divisoria: {
        backgroundColor: "#ffffff",
        width: "95%",
        height: 7,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 10
      },
      produtos: {
        color: "#ffffff",
        fontSize: 30,
        textAlign: "center",
        fontWeight: 600
      },
      cards: {
        alignSelf: "center",
        borderRadius: 20, // Para suavizar os cantos
        shadowColor: "#000000", // Cor da sombra (iOS)
        shadowOffset: { width: 0, height: 0 }, // Deslocamento da sombra (iOS)
        shadowOpacity: 0.75, // Transparência da sombra (iOS)
        shadowRadius: 20, // Desfoque da sombra (iOS)
        elevation: 10, // Intensidade da sombra (Android)
    },
    
});

export default styles;

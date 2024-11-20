import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importando o LinearGradient
import styles from './styles';
import { TouchableOpacity } from 'react-native';

export function Estabelecimento({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/supermercado_centro.jpg')} style={styles.foto} />
        
        {/* Gradiente esfumaçado entre a imagem e a cor #ff4400 */}
        <LinearGradient
          colors={['transparent', '#ff4400']} // A cor vai transitar de transparente para laranja
          style={styles.gradient}
        />
      </View>
      <Text style={styles.nome}>SuperMercado Centro</Text>
      <View style={styles.divisoria}></View>
      <TouchableOpacity style={styles.opcoes} onPress={() => navigation.navigate('Cadastro_Produto')}>
        <Image source={require('../../../assets/produtos.png')} style={styles.icone} />
        <Text style={styles.opcao}>Produtos</Text>
      </TouchableOpacity>
      <View style={styles.divisoria2}></View>
      <TouchableOpacity style={styles.opcoes} onPress={() => navigation.navigate('Meus_Dados')}>
        <Image source={require('../../../assets/cesta.png')} style={styles.icone} />
        <Text style={styles.opcao}>Pedidos</Text>
      </TouchableOpacity>
      <View style={styles.divisoria2}></View>
      <TouchableOpacity style={styles.opcoes} onPress={() => navigation.navigate('Sobre')}>
        <Image source={require('../../../assets/estabelecimento.png')} style={styles.icone} />
        <Text style={styles.opcao}>Meus Dados</Text>
      </TouchableOpacity>
      <View style={styles.divisoria2}></View>
      <TouchableOpacity style={styles.opcoes} onPress={() => navigation.navigate('Sobre')}>
        <Image source={require('../../../assets/sobre.png')} style={styles.icone} />
        <Text style={styles.opcao}>Sobre Nós</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Estabelecimento;

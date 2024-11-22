import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importando o LinearGradient
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { Card_Produto } from '../Card_Produto';

export function Estabelecimento_Pagina({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/supermercado_centro.jpg')} style={styles.foto} />
        <LinearGradient
          colors={['transparent', '#ff4400']}
          style={styles.gradient}
        />
      </View>
      <View style={styles.top}>
        <Text style={styles.nome}>SuperMercado Centro</Text>
        <Text style={styles.endereco}>Av. Flores, 1364</Text>
      </View>
      <View style={styles.divisoria}></View>
      <Text style={styles.produtos}>Produtos</Text>
      <View style={styles.cards} >
        <Card_Produto navigation={navigation} />
      </View>

    </View>
  );
}

export default Estabelecimento_Pagina;

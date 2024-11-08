import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';

export function Cabecalho_Pesquisa() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/logo.jpg')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Pesquise por um produto ou estabelecimento..."
        placeholderTextColor="#888"
      />
    </View>
  );
}

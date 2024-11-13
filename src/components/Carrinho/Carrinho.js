import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Carrinho({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Carrinhos')}>
        <Image source={require('../../../assets/carrinho.png')} style={styles.carrinho} />
      </TouchableOpacity>
    </View>
  );
}
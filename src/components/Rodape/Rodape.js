import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export function Rodape() {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/casa.png')}  />
        <Image source={require('../../../assets/bussola.png')}  />
        <Image source={require('../../../assets/lupa.png')}  />
        <Image source={require('../../../assets/usuario.png')}  />
    </View>
  );
}
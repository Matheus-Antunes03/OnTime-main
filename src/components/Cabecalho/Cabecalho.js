import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export function Cabecalho() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/logo.jpg')}
        style={styles.logo}
      />
    </View>
  );
}

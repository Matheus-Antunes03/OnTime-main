import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Usuario() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/fotoPerfil.jpg')} style={styles.foto} />
    </View>
  );
}
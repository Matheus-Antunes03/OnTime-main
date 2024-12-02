import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Cabecalho_So_Voltar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../../../assets/voltar.png')} style={styles.voltar} />
      </TouchableOpacity>
    </View>
  );
}

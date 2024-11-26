import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Card({ navigation }) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Estabelecimento_Perfil')}>
        <Image source={require('../../../assets/supermercado_centro.jpg')} style={styles.foto} />
        <View style={styles.content}>
          <Text style={styles.nome}>Supermercado Centro</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
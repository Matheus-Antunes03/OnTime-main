import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './styles';

export function Card_Mapa({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Estabelecimento')} style={styles.container}>
        <Text style={styles.nome}>Supermercado Centro</Text>
        <View style={styles.lado}>
          <View style={styles.desconto}>
            <Text style={styles.porcento}>descontos de</Text>
            <Text style={styles.porcento}>até 60%</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.triangulo}/>
    </View>
  );
}
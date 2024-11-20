import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function Carrinho_Total() {
  return (
    <View style={styles.container}>
        <View style={styles.valor}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>R$ 4,45</Text>
        </View>
        <TouchableOpacity style={styles.comprar}>Comprar</TouchableOpacity>
    </View>
  );
}
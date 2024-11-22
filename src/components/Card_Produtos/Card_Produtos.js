import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Card_Pedidos() {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.img_check}>
            <Text style={styles.nome}>Barra de chocolate ao leite</Text>
            <Text style={styles.nome}>90g - Lacta</Text>
            <Image source={require('../../../assets/lacta90.png')} style={styles.foto} />
        </View>
        <View style={styles.content}>
            <TouchableOpacity style={styles.botao}>
                <Image source={require('../../../assets/lapis.png')} style={styles.lapis} />
            </TouchableOpacity>
            <View style={styles.preco}>
                <Text style={styles.valor}>R$ 4,45</Text>
                <View style={styles.desconto}>-50%</View>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
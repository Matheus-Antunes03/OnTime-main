import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Card_Pedido() {

  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.img_check}>
            <Image source={require('../../../assets/lacta90.png')} style={styles.foto} />
        </View>
        <View style={styles.content}>
            <Text style={styles.pedido}>Pedido 01</Text>
            <Text style={styles.infos}>Data: 07/10/2024</Text>
            <Text style={styles.infos}>Horário: 15:25</Text>
            <View style={styles.preco}>
                <Text style={styles.valor}>Total: R$ 4,45</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';
import { PedidosContext } from '../../context/context';

export function Card_Carrinho({ navigation }) {
  const { pedidos } = useContext(PedidosContext);

  return (
    <View>
      {pedidos.map((pedido, index) => (
        <TouchableOpacity key={index} style={styles.container} onPress={() => navigation.navigate('Produto')}>
          <View style={styles.img_check}>
            <CheckBox uncheckedColor="#ffffff" checkedColor="#38D900" checked={pedido.isChecked} onPress={() => pedido.setIsChecked(!pedido.isChecked)}/>
            <Image source={require('../../../assets/lacta90.png')} style={styles.foto} />
          </View>
          <View style={styles.content}>
            <Text style={styles.nome}>{pedido.nome}</Text>
            <Text style={styles.nome}>{pedido.marca}</Text>
            <View style={styles.preco}>
              <Text style={styles.valor}>R$ {pedido.preco}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
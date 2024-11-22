import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Meus_Dados_Estabelecimento() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/supermercado_centro.jpg')} style={styles.foto} />
      </View>
      <View style={styles.fundo}>
        <Text style={styles.nome}>SuperMercado Centro</Text>
        <View style={styles.divisoria}></View>
        <Text style={styles.titulo}>Nome</Text>
        <Text style={styles.item}>SuperMercado Centro</Text>
        <Text style={styles.titulo}>CNPJ</Text>
        <Text style={styles.item}>87.342.678/0001-30</Text>
        <Text style={styles.titulo}>E-mail</Text>
        <Text style={styles.item}>supercentro@gmail.com</Text>
        <Text style={styles.titulo}>Telefone</Text>
        <Text style={styles.item}>(47) 98835-7647</Text>
        <Text style={styles.titulo}>Endereço</Text>
        <Text style={styles.item}>Avenida Flores, 1364</Text>
        <TouchableOpacity style={styles.editar}>Editar</TouchableOpacity>
      </View>
    </View>
  );
}

export default Meus_Dados_Estabelecimento;
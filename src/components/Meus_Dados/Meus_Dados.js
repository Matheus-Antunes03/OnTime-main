import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Meus_Dados() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/fotoPerfil.jpg')} style={styles.foto} />
      </View>
      <View style={styles.fundo}>
        <Text style={styles.nome}>Marília</Text>
        <View style={styles.divisoria}></View>
        <Text style={styles.titulo}>Nome</Text>
        <Text style={styles.item}>Marília Souza Santos</Text>
        <Text style={styles.titulo}>Data de Nascimento</Text>
        <Text style={styles.item}>13/12/1999</Text>
        <Text style={styles.titulo}>E-mail</Text>
        <Text style={styles.item}>marilia.ss@gmail</Text>
        <Text style={styles.titulo}>Telefone</Text>
        <Text style={styles.item}>(47) 98855-4377</Text>
        <Text style={styles.titulo}>CPF</Text>
        <Text style={styles.item}>125.928.460-34</Text>
        <TouchableOpacity style={styles.editar}>Editar</TouchableOpacity>
      </View>
    </View>
  );
}

export default Meus_Dados;
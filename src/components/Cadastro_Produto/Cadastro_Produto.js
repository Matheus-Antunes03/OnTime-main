import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

export function Cadastro_Produto() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>
      <View style={styles.divisoria}></View>
      <View style={styles.content}>
        <Text style={styles.label}>Nome do produto</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Marca</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.label}>Preço</Text>
        <TextInput style={styles.input} keyboardType="decimal-pad" />
        <Text style={styles.label}>Data de validade</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
        <Text style={styles.label}>Peso</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Index')} style={styles.cadastrar}>Cadastrar</TouchableOpacity>
    </View>
  );
}
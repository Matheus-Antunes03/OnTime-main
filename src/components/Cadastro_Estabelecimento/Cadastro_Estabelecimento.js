import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

export function Cadastro_Estabelecimento() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Estabelecimento</Text>
      <View style={styles.divisoria}></View>
      <View style={styles.content}>
        <Text style={styles.label}>Nome do estabelecimento</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Endereço</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
        <Text style={styles.label}>Inscrição Municipal</Text>
        <TextInput style={styles.input} keyboardType="phone-pad" />
        <Text style={styles.label}>CNPJ</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Index')} style={styles.cadastrar}>Cadastrar</TouchableOpacity>
    </View>
  );
}
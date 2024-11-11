import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

export function Cadastro_Cliente({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>
      <View style={styles.divisoria}></View>
      <View style={styles.content}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} keyboardType="phone-pad" />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} keyboardType="email-address"/>
        <Text style={styles.label}>Estado</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Cidade</Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.cadastrar} onPress={() => navigation.navigate('Home')}>Cadastrar</TouchableOpacity>
    </View>
  );
}
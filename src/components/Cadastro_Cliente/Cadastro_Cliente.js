import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

function Cadastro_Cliente() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>
      <TextInput placeholder="Nome Completo" style={styles.input} />
      <TextInput placeholder="CPF" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Telefone" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Estado" style={styles.input} />
      <TextInput placeholder="Cidade" style={styles.input} />
      <Button title="Selecionar arquivo para upload" onPress={() => {}} />
      <Button title="Cadastrar" color="#f4511e" onPress={() => {}} />
    </View>
  );
}

export default Cadastro_Cliente;
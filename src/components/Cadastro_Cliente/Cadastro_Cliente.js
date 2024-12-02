import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import {createUser} from '../../api/users/create-user';

export function Cadastro_Cliente({ navigation }) {
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  const handleCadastrar = async () => {
    const userData = {
      nome,
      dataNasc,
      telefone,
      cpf,
    };

    try {
      await createUser(userData);
      navigation.navigate('Index');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o cliente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>
      <View style={styles.divisoria}></View>
      <View style={styles.content}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput style={styles.input} value={dataNasc} onChangeText={setDataNasc} keyboardType="numeric" />
        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} value={cpf} onChangeText={setCpf} keyboardType="numeric" />
      </View>
      <TouchableOpacity style={styles.cadastrar} onPress={handleCadastrar}>
        <Text style={styles.texto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
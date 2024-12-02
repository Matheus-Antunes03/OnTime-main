import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { createEstablishment } from '../../api/establishments/create-establishment';

export function Cadastro_Estabelecimento({ navigation }) {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [inscricaoMunicipal, setInscricaoMunicipal] = useState('');
  const [cnpj, setCnpj] = useState('');

  const handleCadastrar = async () => {
    const estabelecimentoData = {
      nome,
      endereco,
      inscricaoMunicipal,
      cnpj,
    };

    try {
      await createEstablishment(estabelecimentoData);
      navigation.navigate('Index');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o estabelecimento.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Estabelecimento</Text>
      <View style={styles.divisoria}></View>
      <View style={styles.content}>
        <Text style={styles.label}>Nome do estabelecimento</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        <Text style={styles.label}>Endereço</Text>
        <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />
        <Text style={styles.label}>Inscrição Municipal</Text>
        <TextInput style={styles.input} value={inscricaoMunicipal} onChangeText={setInscricaoMunicipal} />
        <Text style={styles.label}>CNPJ</Text>
        <TextInput style={styles.input} value={cnpj} onChangeText={setCnpj} />
      </View>
      <TouchableOpacity style={styles.cadastrar} onPress={handleCadastrar}>
        <Text style={styles.texto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
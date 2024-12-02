import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { createProduct } from '../../api/products/create-product';

export function Cadastro_Produto({ navigation }) {
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [peso, setPeso] = useState('');

  const handleCadastrar = async () => {
    const produtoData = {
      nome,
      marca,
      preco,
      dataValidade,
      peso,
      idEstabelecimento: 1
    };

    try {
      await createProduct(produtoData);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o produto.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>
      <View style={styles.divisoria}></View>
      <View style={styles.content}>
        <Text style={styles.label}>Nome do produto</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        <Text style={styles.label}>Marca</Text>
        <TextInput style={styles.input} value={marca} onChangeText={setMarca} />
        <Text style={styles.label}>Preço</Text>
        <TextInput style={styles.input} value={preco} onChangeText={setPreco} keyboardType="decimal-pad" />
        <Text style={styles.label}>Data de validade</Text>
        <TextInput style={styles.input} value={dataValidade} onChangeText={setDataValidade} keyboardType="numeric" />
        <Text style={styles.label}>Peso</Text>
        <TextInput style={styles.input} value={peso} onChangeText={setPeso} keyboardType="numeric" />
      </View>
      <TouchableOpacity style={styles.cadastrar} onPress={handleCadastrar}>
        <Text style={styles.texto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
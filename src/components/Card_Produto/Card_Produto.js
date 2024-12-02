import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { getProducts } from '../../api/products/get-products';
import { deleteProduct } from '../../api/products/delete-product';

export function Card_Produto({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const estabelecimentoId = 1;
        const produtosData = await getProducts(estabelecimentoId);
        setProdutos(produtosData);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os produtos.');
      }
    };

    fetchProdutos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProdutos(produtos.filter(produto => produto.id !== id));
      Alert.alert('Sucesso', 'Produto excluído com sucesso.');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir o produto.');
    }
  };

  return (
    <View>
      {produtos.map((produto) => (
        <View key={produto.id} style={styles.container}>
          <TouchableOpacity style={styles.content} onPress={() => navigation.navigate('Produto')}>
            <View style={styles.img_check}>
            </View>
            <View style={styles.content}>
              <Text style={styles.nome}>{produto.nome}</Text>
              <Text style={styles.nome}>{produto.marca}</Text>
              <Text style={styles.nomeMercado}>SuperMercado Centro</Text>
              <View style={styles.preco}>
                <Text style={styles.valor}>R$ {produto.preco}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.excluir} onPress={() => handleDelete(produto.id)}>
            <Text style={styles.excluirTexto}>Excluir</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
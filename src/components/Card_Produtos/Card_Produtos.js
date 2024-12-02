import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { getProducts } from '../../api/products/get-products';
import { PedidosContext, UserContext } from '../../context/context';

export function Card_Pedidos() {
  const [produtos, setProdutos] = useState([]);
  const { pedidos, setPedidos } = useContext(PedidosContext);
  const { estabelecimento } = useContext(UserContext);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const produtosData = await getProducts(estabelecimento.id);
        console.log('Produtos:', produtosData);
        setProdutos(produtosData);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os produtos.');
      }
    };

    fetchProdutos();
  }, []);

  const handleAddToCart = (produto) => {
    setPedidos((prevPedidos) => [...prevPedidos, produto]);
    Alert.alert('Sucesso', 'Produto adicionado ao carrinho.');
  };

  return (
    <View>
      {produtos?.map((produto) => (
        <View key={produto.id} style={styles.container}>
          <View style={styles.img_check}>
            <Text style={styles.nome}>{produto.nome}</Text>
            <Text style={styles.nome}>{produto.marca}</Text>
          </View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.botao}>
              <Image source={require('../../../assets/lapis.png')} style={styles.lapis} onError={(e) => console.log(e.nativeEvent.error)} />
            </TouchableOpacity>
            <View style={styles.preco}>
              <Text style={styles.valor}>R$ {produto.preco}</Text>
            </View>
            <TouchableOpacity style={styles.adicionar} onPress={() => handleAddToCart(produto)}>
              <Text style={styles.adicionarTexto}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
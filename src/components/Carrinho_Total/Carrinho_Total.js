import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles';
import { PedidosContext, UserContext } from '../../context/context';
import { createOrder } from '../../api/orders/create-order';

export function Carrinho_Total() {
  const { pedidos, setPedidos } = useContext(PedidosContext);
  const { user } = useContext(UserContext);

  const total = pedidos?.reduce((sum, pedido) => sum + pedido.preco, 0) || 0;

  const handleComprar = async () => {
    const pedidoData = {
      produtos: pedidos.map(pedido => ({
        idUsuario: user.id,
        idProduto: pedido.id,
        idEstabelecimento: pedido.idEstabelecimento,
        quantidade: pedido.quantidade,
        valor: pedido.preco,
      })),
    };

    try {
      await createOrder(pedidoData);
      setPedidos([]);
      Alert.alert('Sucesso', 'Compra realizada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar a compra.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.valor}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>R$ {total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.comprar} onPress={handleComprar}>
        <Text style={styles.comprarTexto}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}
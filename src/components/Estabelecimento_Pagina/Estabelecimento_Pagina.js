import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { Card_Produto } from '../Card_Produto';

export function Estabelecimento_Pagina({ navigation }) {
  const [previousScreen, setPreviousScreen] = React.useState('');
  const [ehEstabelecimento, setEhEstabelecimento] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const previousRoute = navigation.getState().routes[navigation.getState().index - 2];
      console.log('previousRoute', previousRoute);
      if (previousRoute) {
        setPreviousScreen(previousRoute.name);
        setEhEstabelecimento(previousRoute.name === 'Login_Estabelecimento');
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/supermercado_centro.jpg')} style={styles.foto} />
        <LinearGradient
          colors={['transparent', '#ff4400']}
          style={styles.gradient}
        />
      </View>
      <View style={styles.top}>
        <Text style={styles.nome}>SuperMercado Centro</Text>
        <Text style={styles.endereco}>Av. Flores, 1364</Text>
      </View>
      <View style={styles.divisoria}></View>
      <Text style={styles.produtos}>Produtos</Text>
      {ehEstabelecimento && (
        <TouchableOpacity style={styles.adicionarProduto} onPress={() => navigation.navigate('Cadastro_Produto')}>
          <Text style={styles.adicionarProdutoTexto}>+</Text>
        </TouchableOpacity>
      )}
      <View style={styles.cards}>
        <Card_Produto navigation={navigation} />
      </View>
    </View>
  );
}

export default Estabelecimento_Pagina;
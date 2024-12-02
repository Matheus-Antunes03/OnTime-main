import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Rodape({ navigation , ehEstabelecimento}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../../assets/casa.png')} style={styles.icone} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Image source={require('../../../assets/bussola.png')} style={styles.icone} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Pesquisa')}>
        <Image source={require('../../../assets/lupa.png')} style={styles.icone} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        if (ehEstabelecimento) {
          navigation.navigate('Estabelecimento');
        } else {
          navigation.navigate('Usuario');
        }
      }}>
        <Image source={require('../../../assets/usuario.png')} style={styles.icone} />
      </TouchableOpacity>
    </View>
  );
}

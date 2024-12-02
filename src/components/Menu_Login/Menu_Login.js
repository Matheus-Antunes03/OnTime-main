import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function Menu_Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-Vindo(a)!</Text>
       <Text style={styles.texto}>faça login abaixo</Text>
      <Text style={styles.texto}>para acessar a OnTime</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Login_Usuario')}>
        <View style={styles.botao}>
          <Image source={require('../../../assets/usuario.png')} style={styles.icone} />
            <Text style={styles.sou}>Sou um Cliente</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Login_Estabelecimento')}>
        <View style={styles.botao}>
          <Image source={require('../../../assets/estabelecimento.png')} style={styles.icone} />
          <Text style={styles.sou}>Sou um Estabelecimento</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
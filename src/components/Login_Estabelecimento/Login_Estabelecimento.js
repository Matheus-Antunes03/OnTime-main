import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Login_Estabelecimento({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.jpg')} style={styles.logo}/>
      <TextInput>Email</TextInput>
      <TextInput>Senha</TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} >Entrar</TouchableOpacity>
    </View>
  );
}
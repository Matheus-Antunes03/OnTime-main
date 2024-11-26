import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function Login_Estabelecimento({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.jpg')} style={styles.logo}/>
      <Text style={styles.nome}>Email</Text>
      <TextInput style={styles.campo}/>
      
      <Text style={styles.nome}>Senha</Text>
      <TextInput style={styles.campo}/>
      <TouchableOpacity style={styles.entrar} onPress={() => navigation.navigate('Home')} >Entrar</TouchableOpacity>
    </View>
  );
}
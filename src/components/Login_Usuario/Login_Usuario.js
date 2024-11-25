import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function Login_Usuario({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.jpg')} style={styles.logo}/>
      <Text>Email</Text>
      <TextInput/>
      
      <Text>Senha</Text>
      <TextInput/>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} >Entrar</TouchableOpacity>
    </View>
  );
}
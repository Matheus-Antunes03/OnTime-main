import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function IndexTela({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo}/>
        <TouchableOpacity style={styles.botao}>Login</TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu_Cadastro')} style={styles.botao}>Cadastre-se</TouchableOpacity>
    </View>
  );
}
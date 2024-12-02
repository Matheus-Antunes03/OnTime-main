import React, { useState, useContext } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles';
import { UserContext } from '../../context/context';
import { loginEstablishment } from '../../api/establishments/login-establishment';

export function Login_Estabelecimento({ navigation }) {
  const [cnpj, setCnpj] = useState('');
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const data = await loginEstablishment(cnpj);
      if (!data || data.length < 1) {
        Alert.alert('Erro', 'Estabelecimento não encontrado.');
        return;
      }
      setUser(data);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível fazer login.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.nome}>CNPJ</Text>
      <TextInput
        style={styles.campo}
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.entrar} onPress={handleLogin}>
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
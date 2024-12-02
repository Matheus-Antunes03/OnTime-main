import React, { useState, useContext } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles';
import { UserContext } from '../../context/context';
import { loginUser } from '../../api/users/login-user';

export function Login_Usuario({ navigation }) {
  const [cpf, setCpf] = useState('');
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const data = await loginUser(cpf);
      if (!data) {
        Alert.alert('Erro', 'CPF não encontrado.');
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
      <Text style={styles.nome}>CPF</Text>
      <TextInput
        style={styles.campo}
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.entrar} onPress={handleLogin}>
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
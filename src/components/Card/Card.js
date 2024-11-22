import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Card({ navigation }) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Estabelecimento_Perfil')}>
        <Image source={require('../../../assets/supermercado_centro.jpg')} style={styles.foto} />
        <View style={styles.content}>
          <Text style={styles.nome}>Supermercado Centro</Text>
          <View style={styles.lista}>
            <Text style={styles.item}>- Padaria</Text>
            <Text style={styles.item}>- Mercearia</Text>
            <Text style={styles.item}>- Hortifruti</Text>
            <Text style={styles.item}>- Outros</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
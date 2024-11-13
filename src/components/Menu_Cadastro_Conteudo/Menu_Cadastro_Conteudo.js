import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function Menu_Cadastro_Conteudo({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Cadastre-se em nossa</Text>
        <Text style={styles.texto}>plataforma e venha fazer</Text>
        <Text style={styles.texto}>parte da OnTime!</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Cadastro_Cliente')}>
        <View style={styles.botao}>
            <Image source={require('../../../assets/usuario.png')} style={styles.icone} />
            <Text style={styles.sou}>Sou um Cliente</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Cadastro_Estabelecimento')}>
        <View style={styles.botao}>
            <Image source={require('../../../assets/estabelecimento.png')} style={styles.icone} />
            <Text style={styles.sou}>Sou um Estabelecimento</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
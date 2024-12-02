import React, { useContext } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { UserContext } from '../../context/context';

export function Meus_Dados() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/fotoPerfil.jpg')} style={styles.foto} />
      </View>
      <View style={styles.fundo}>
        <Text style={styles.nome}>{user.nome}</Text>
        <View style={styles.divisoria}></View>
        <Text style={styles.titulo}>Nome</Text>
        <Text style={styles.item}>{user.nome}</Text>
        <Text style={styles.titulo}>Data de Nascimento</Text>
        <Text style={styles.item}>{user.dataNasc}</Text>
        <Text style={styles.titulo}>Telefone</Text>
        <Text style={styles.item}>{user.telefone}</Text>
        <Text style={styles.titulo}>CPF</Text>
        <Text style={styles.item}>{user.cpf}</Text>
      </View>
    </View>
  );
}

export default Meus_Dados;
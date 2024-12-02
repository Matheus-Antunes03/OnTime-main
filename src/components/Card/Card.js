import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { getEstablishments } from '../../api/establishments/get-establishments';

export function Card({ navigation }) {
  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    const fetchEstablishments = async () => {
      try {
        const establishmentsData = await getEstablishments();
        setEstablishments(establishmentsData);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os estabelecimentos.');
      }
    };

    fetchEstablishments();
  }, []);

  return (
    <View>
      {establishments.map((establishment) => (
        <TouchableOpacity
          key={establishment.id}
          style={styles.container}
          onPress={() => navigation.navigate('Estabelecimento_Perfil')}
        >
          <Image source={require('../../../assets/supermercado_centro.jpg')} style={styles.foto} />
          <View style={styles.content}>
            <Text style={styles.nome}>{establishment.nome}</Text>
            <View style={styles.lista}>
              <Text style={styles.item}>- Padaria</Text>
              <Text style={styles.item}>- Mercearia</Text>
              <Text style={styles.item}>- Hortifruti</Text>
              <Text style={styles.item}>- Outros</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
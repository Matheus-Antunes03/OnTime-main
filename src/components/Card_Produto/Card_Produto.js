import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Card_Produto({ navigation }) {

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Produto')}>
        <View style={styles.img_check}>
          <Image source={require('../../../assets/lacta90.png')} style={styles.foto} />
        </View>
        <View style={styles.content}>
          <Text style={styles.nome}>Barra de chocolate</Text>
          <Text style={styles.nome}>ao leite 90g - Lacta</Text>
          <Text style={styles.nomeMercado}>SuperMercado Centro</Text>
          <View style={styles.preco}>
                    <View style={styles.lado}>
                        <Text style={styles.de}>De: R$ 8,90</Text>
                        <View style={styles.custo}>
                            <Text style={styles.desconto}>-50%</Text>
                        </View>
                    </View>
                    <Text style={styles.valor}>Por: R$ 4,45</Text>
                </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
